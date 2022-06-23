module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Settori',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
            eleventyNavigation: {
                key: 'settori',
                title: 'Settori',
            },
        }
    }

    async render(data) {
        return `<p>Empty page</p>`
    }
}
