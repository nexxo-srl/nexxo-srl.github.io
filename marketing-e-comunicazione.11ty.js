module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Marketing e Comunicazione',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
            eleventyNavigation: {
                key: 'marketing-e-comunicazione',
                title: 'Marketing e Comunicazione',
            },
        }
    }

    async render(data) {
        return `<p>Empty page</p>`
    }
}
