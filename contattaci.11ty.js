module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Contattaci',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Forniamo servizi di certificazione dei dati basati su tecnologia IoT e Blockchain che rendono le prestazioni misurabili e praticabili come modello di business.',
            eleventyNavigation: {
                key: 'contattaci',
                title: 'Contattaci',
            },
        }
    }

    async render(data) {
        return `<p>Empty page</p>`
    }
}
