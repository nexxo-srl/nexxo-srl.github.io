const contactUsPageContent = require('../_includes/components/pages/contactUs')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Contattaci',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
            eleventyNavigation: {
                key: 'contattaci',
                title: 'Contattaci',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/contattaci/',
            ogImageRelativeUrl: 'assets/img/landing/software-company/nexxo-varese-hero.jpg'
        }
    }

    async render(data) {
        return `${await contactUsPageContent.call(this, data)}`
    }
}
