const advisoryPageContent = require("../_includes/components/pages/advisory");
const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Nexxo Advisory Partner',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Una boutique consulenziale indipendente al servizio delle aziende che hanno bisogno di un’assistenza specializzata nell’ambito della compravendita aziende, finanza, analisi prestazionali, attività strategiche e operative.',
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
