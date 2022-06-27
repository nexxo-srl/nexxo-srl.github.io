const contactUsPageContent = require('../_includes/components/pages/contactUs')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Contact Us',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
            eleventyNavigation: {
                key: 'contact-us',
                title: 'Contact Us',
            },
            isWhiteFooter: true
        }
    }

    async render(data) {
        return `${await contactUsPageContent.call(this, data)}`
    }
}
