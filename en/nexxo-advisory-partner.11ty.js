const advisoryPageContent = require("../_includes/components/pages/advisory");
const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Nexxo Advisory Partner',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'An independent consulting boutique serving companies that need specialized assistance in: M&A Advisory, Corporate Finance, Corporate Advisory and Management Services.',
            eleventyNavigation: {
                key: 'nexxo-advisory-partner',
                title: 'Nexxo Advisory Partner',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/nexxo-advisory-partner/',
            ogImageRelativeUrl: 'assets/img/services/advisory/advisory-partner.jpeg',
            sitemap: {
                links: sitemapAlternates.advisory
            }
        }
    }

    async render(data) {
        return `${await advisoryPageContent.call(this, data)}`
    }
}
