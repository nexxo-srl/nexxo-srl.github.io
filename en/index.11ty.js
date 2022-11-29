const homePageContent = require('../_includes/components/pages/home')
const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Digital Holding',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'We combine digital communication, Internet-of-Things (IoT) & Blockchain services for a more complete and innovative experience than ever.',
            eleventyNavigation: {
                key: 'home',
                title: 'Home',
            },
            canonicalPageRelativeUrl: 'it/',
            ogImageRelativeUrl: 'assets/img/landing/software-company/nexxo-varese-hero.jpg',
            sitemap: {
                links: sitemapAlternates.home
            }
        }
    }

    async render(data) {
        return `${await homePageContent.call(this, data)}`
    }
}
