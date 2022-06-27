const homePageContent = require('../_includes/components/pages/home')

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Nexxo Cross Platform | Digital Agency',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
            eleventyNavigation: {
                key: 'home',
                title: 'Home',
            },
        }
    }

    async render(data) {
        return `${await homePageContent.call(this, data)}`
    }
}
