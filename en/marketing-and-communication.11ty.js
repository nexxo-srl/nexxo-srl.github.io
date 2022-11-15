const marketingPageContent = require("../_includes/components/pages/marketing");
const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Marketing and Communication',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'We support you to simplify your operations offering you customized corporate communication and strategic marketing services.',
            eleventyNavigation: {
                key: 'marketing-e-comunicazione',
                title: 'Marketing e Comunicazione',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/marketing-e-comunicazione/',
            ogImageRelativeUrl: 'assets/img/services/marketing/dashboard.png',
            sitemap: {
                links: sitemapAlternates.marketing
            }
        }
    }

    async render(data) {
        return `${await marketingPageContent.call(this, data)}`
    }
}
