const functions = require('firebase-functions')
const cors = require('cors')
const nodemailer = require('nodemailer')
const fetch = require('node-fetch')

const whitelist = [
    'https://nexxoxp.com',
    'https://www.nexxoxp.com',
    'https://nexxoxp.github.io'
]
const nexxoxpInfoEmail = 'info@nexxoxp.com'
const corsSettings = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

/**
 You can check the values with
 firebase functions:config:get

 To change the values use
 firebase functions:config:set register.username='<something>' register.password='<something>' recaptcha.key='<something>'

 After update, to use the values in the simulator go to `functions` folder and run
 firebase functions:config:get > .runtimeconfig.json
 */
const smtpConfig = functions.config().smtp
const recaptchaConfig = functions.config().recaptcha

const smtpServerHost = 'smtp.gmail.com'
const transporter = nodemailer.createTransport({
    host: smtpServerHost,
    port: 465,
    secure: true,
    auth: {
        user: smtpConfig.username,
        pass: smtpConfig.password
    }
})

const verifyRecaptcha = (userToken, callback) => {
    if (!userToken) {
        callback('Missing token')
        return
    }

    fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'post',
        // Only this content type is accepted. See: https://stackoverflow.com/a/52416003
        body: new URLSearchParams({secret: recaptchaConfig.key, response: userToken})
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(res => callback(null, res))
        .catch(error => callback(error))
}

exports.contactUs = functions.https.onRequest((request, response) => {
    cors(corsSettings)(request, response, () => {
        if (request.method !== 'POST') {
            return response.status(403).send('Forbidden')
        }

        const fail = (error) => {
            console.log(error)
            return response.status(500).send('An error occurred while sending email.')
        }

        return verifyRecaptcha(request.body.recaptcha, (error, verification) => {
            if (error) {
                return fail(error)
            }

            if (!verification.success || verification.score < 0.5) {
                const errorMessage = `Recaptcha detected "${request.body.name}" <${request.body.email}> is a bot (success: ${verification.success}, score: ${verification.score})`
                const verificationElement = verification['error-codes']
                    ? `\nError codes: ${verification['error-codes'].join(', ')}`
                    : ''
                return fail(errorMessage + verificationElement)
            }

            try {
                const name = request.body.name ? request.body.name.replace(/[^\p{L}\p{N}\s]/gu, '') : ''
                const sender = name ? `"${name}" <${request.body.email}>` : request.body.email
                if (!sender) {
                    return fail('Missing sender')
                }

                const subject = request.body.subject
                if (!subject) {
                    return fail('Missing subject')
                }

                const message = request.body.message
                if (!message) {
                    return fail('Missing message')
                }

                transporter.sendMail({
                    from: smtpConfig.username,
                    to: nexxoxpInfoEmail,
                    replyTo: sender,
                    subject: subject,
                    text: message,
                }, (error, result) => {
                    if (error) {
                        return fail(error)
                    }

                    return response.send(result.messageId)
                })
            } catch (e) {
                return fail(e)
            }
        })
    })
})
