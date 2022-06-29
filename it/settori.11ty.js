const sectorsPageContent = require("../_includes/components/pages/sectors");
module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Settori',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
            eleventyNavigation: {
                key: 'settori',
                title: 'Settori',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/settori/',
            ogImageRelativeUrl: 'assets/img/landing/software-company/nexxo-varese-hero.jpg'
        }
    }

    async render(data) {
        return `${await sectorsPageContent.call(this, data)}`
    }
}
