const contactUsPageContent = require('../_includes/components/pages/contactUs')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Contattaci',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Scrivici, chiamaci o passa a trovarci. Non esitare a contattarci, ti risponderemo in tempi brevi. Chiamaci per un confronto immediato.',
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
