const contactUsPageContent = require('../_includes/components/pages/contactUs')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Contact Us',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Please feel free to drop us a line. We will respond you as soon as possibile. If you need assistance feel free to call us.',
            eleventyNavigation: {
                key: 'contact-us',
                title: 'Contact Us',
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
