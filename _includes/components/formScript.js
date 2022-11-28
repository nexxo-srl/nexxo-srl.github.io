module.exports = function (i18nFunction, contactFormId, contactFormName) {
    return `
    <script>
        const ${contactFormName} = document.getElementById('${contactFormId}')
        
        ${contactFormName}.addEventListener('submit', (event) => {
            event.preventDefault()
            
            checkRecaptcha((error, token) => {
                if (error) {
                    console.log(error)
                    return
                }
                
                const request = new XMLHttpRequest()
                const formData = new FormData(${contactFormName})
                const formReplacement = document.getElementById('${contactFormId}-done')
                const submitButton = ${contactFormName}.getElementsByTagName('button')[0]
                
                formData.set('recaptcha', token)
                const fail = () => {
                    unlockForm(submitButton)
                    alert(\`${i18nFunction('generic.footer.subscribeForm.errorPopup.failedEmailSending')}\`)
                }
                const success = () => {
                    ${contactFormName}.reset()
                    unlockForm(submitButton)
                    ${contactFormName}.style.cssText = 'display: none;'
                    formReplacement.style.cssText = ''
                }
            
                request.open('POST', ${contactFormName}.action, true)
                request.onload = function() {
                    if (this.status >= 200 && this.status < 400) {
                        success()
                    } else {
                        fail()
                    }
                }
                request.onerror = function() { fail() }
                
                lockForm(submitButton)
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                request.send(new URLSearchParams(formData))                
            })
        })
    </script>`
}