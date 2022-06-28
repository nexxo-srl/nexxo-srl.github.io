module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Nexxo Cross Platform S.r.l.',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
            eleventyNavigation: {
                key: 'loading',
                title: 'loading',
            },
            additionalMeta: '<meta http-equiv="refresh" content="0.1; url = /it/"/>',
            hideHeader: true,
            hideFooter: true
        }
    }

    async render(data) {
        return ``
    }
}
