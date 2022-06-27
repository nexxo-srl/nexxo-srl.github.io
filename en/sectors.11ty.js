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
            isWhiteFooter: true
        }
    }

    async render(data) {
        return `${await sectorsPageContent.call(this, data)}`
    }
}
