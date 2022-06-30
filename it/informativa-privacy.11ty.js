const sitemapAlternates = require("../_includes/sitemap/alternate");

module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Informativa Privacy',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Questo Sito Web raccoglie alcuni Dati Personali dei propri Utenti.',
            eleventyNavigation: {
                key: 'informativa-privacy',
                title: 'Informativa Privacy',
            },
            isWhiteFooter: true,
            canonicalPageRelativeUrl: 'it/informativa-privacy/',
            ogImageRelativeUrl: 'assets/img/landing/software-company/nexxo-varese-hero.jpg',
            sitemap: {
                links: sitemapAlternates.privacyPolicy
            }
        }
    }

    async render(data) {
        return `
        <!-- Breadcrumb -->
        <nav class="container py-4 my-lg-3" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="${this.i18n('pagesUrl.homepage')}"><i class="bx bx-home-alt fs-lg me-1"></i>${this.i18n('pagesUrl.homepage.linkName')}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">${this.i18n('pagesUrl.privacyPolicy.linkName')}</li>
          </ol>
        </nav>

        <section class="container">
        <h1>INFORMATIVA PRIVACY</h1>
        <h2>INFORMATIVA ESTESA AI SENSI DEGLI ARTT. 12, 13 E, OCCORRENDO, 14 DEL GDPR – REGOLAMENTO (UE) 2016/679 RELATIVO ALLA PROTEZIONE DELLE PERSONE FISICHE, CON RIGUARDO AL TRATTAMENTO DEI DATI PERSONALI (DI SEGUITO IL GDPR)</h2>
        <p>Il titolare del trattamento riporta, di seguito, l’Informativa ai sensi degli artt. 12, 13 e, occorrendo, 14 del GDPR relativa al trattamento dei dati personali forniti dal Cliente/interessato tramite la compilazione e sottoscrizione del Contratto per acquistare i prodotti/servizi offerti in vendita dal titolare del trattamento stesso, caricando spontaneamente in questo sito web dati personali (in particolare attraverso la compilazione di form) o semplicemente navigando in esso.</p>
        </section>
        `
    }
}
