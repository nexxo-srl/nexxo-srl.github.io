const technologyPageContent = require("../_includes/components/pages/technology");
const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Information Technology',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Alongside in every sector, we accompany our customers towards industry 4.0 and the strategic renewal of their business.',
            eleventyNavigation: {
                key: 'tecnologie-informatiche',
                title: 'Tecnologie Informatiche',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/tecnologie-informatiche/',
            ogImageRelativeUrl: 'assets/img/services/it/dashboard_TI.png',
            sitemap: {
                links: sitemapAlternates.technology
            }
        }
    }

    async render(data) {
        return `${await technologyPageContent.call(this, data)}`
    }
}
