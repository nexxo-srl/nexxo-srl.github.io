const marketingPageContent = require("../_includes/components/pages/marketing");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Marketing e Comunicazione',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Ti supportiamo per semplificare la tua operatività offrendoti servizi di comunicazione aziendale e marketing strategico su misura.',
            eleventyNavigation: {
                key: 'marketing-e-comunicazione',
                title: 'Marketing e Comunicazione',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/marketing-e-comunicazione/',
            ogImageRelativeUrl: 'assets/img/services/marketing/dashboard.png'
        }
    }

    async render(data) {
        return `${await marketingPageContent.call(this, data)}`
    }
}
