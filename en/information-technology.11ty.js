const technologyPageContent = require("../_includes/components/pages/technology");
module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Information Technology',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Al fianco in ogni settore, accompagniamo i nostri clienti verso l’industria 4.0 e il rinnovamento strategico del proprio business, al fine di sfruttare al meglio le potenzialità offerte dalla trasformazione digitale.',
            eleventyNavigation: {
                key: 'tecnologie-informatiche',
                title: 'Tecnologie Informatiche',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/tecnologie-informatiche/',
            ogImageRelativeUrl: 'assets/img/landing/software-company/nexxo-varese-hero.jpg'
        }
    }

    async render(data) {
        return `${await technologyPageContent.call(this, data)}`
    }
}