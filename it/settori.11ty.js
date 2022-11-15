const sectorsPageContent = require("../_includes/components/pages/sectors");
const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Settori',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Industriale, Manutenzione, tracciabilità e ispezione, Connettività e cybersecurity, Sicurezza, Assicurativo e finanziario, Beni di valore.',
            eleventyNavigation: {
                key: 'settori',
                title: 'Settori',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/settori/',
            ogImageRelativeUrl: 'assets/img/portfolio/list/03.jpg',
            sitemap: {
                links: sitemapAlternates.sectors
            }
        }
    }

    async render(data) {
        return `${await sectorsPageContent.call(this, data)}`
    }
}
