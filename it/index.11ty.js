const homePageContent = require('../_includes/components/pages/home')
const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            author: 'Nexxo Cross Platform S.r.l.',
            pageTitle: 'Digital Holding',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
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
