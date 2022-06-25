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
            isWhiteFooter: true
        }
    }

    async render(data) {
        return `<main class="page-wrapper">

      <!-- Breadcrumb -->
      <nav class="container py-4 my-lg-3" aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <a href="${this.i18n('pagesUrl.homepage')}"><i class="bx bx-home-alt fs-lg me-1"></i>Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Settori</li>
        </ol>
      </nav>


      <!-- Page title + filters -->
      <!--section class="container d-sm-flex align-items-center justify-content-between pb-4 mb-2 mb-lg-3">
        <h1 class="mb-sm-0 me-sm-3">Settori</h1>
        <select class="form-select" style="width: 240px;">
          <option value="All categories">Categorie</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Safety & Security">Safety & Security</option>
          <option value="Value Services">Value Services</option>
        </select>
      </section-->


      <!-- Portfolio list -->
      <section class="container pb-2 pb-lg-3">

        <!-- Item -->
        <div id="${this.i18n('pagesUrl.sectors.industrialSectionId')}" class="row pb-5 mb-md-4 mb-lg-5">
          <div class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/01.jpg', 'Image', 'rounded-3', [600], '600w')}   
          </div>
          <div class="rellax col-md-6" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
              <h2 class="h3">Industriale</h2>
              <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Manufacturing</p>
              <div class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">              
              <ul>
                <li>Creazione di report in tempo reale direttamente dagli impianti e dalle macchine, certificando i tempi di attività, fermi macchina, allarmi, anomalie, temperature, ecc.</li>
                <li>Certificazione:
                    <ul>
                        <li>della catena del freddo che garantisce trasparenza e affidabilità;</li>
                        <li>di garanzia e qualità del prodotto, sia dei principi attivi che del prodotto finale e del suo confezionamento;</li>
                        <li>dei processi di raffinazione e trasformazione del petrolio;</li>
                        <li>del consumo di energia.</li>
                    </ul>
                </li>
                <li>Miglioramento della sicurezza e facilità nella gestione dei mercati locali di scambio energetico.</li>
                <li>Automatizzazione e riduzione dei costi dei certificati di origine energetici.</li>
                <li>Tracciabilità della produzione e distribuzione di idrogeno e biogas.</li>
              </ul>
              </div>         
          </div>
        </div>

        <!-- Item -->
        <div id="${this.i18n('pagesUrl.sectors.maintenanceSectionId')}" class="row pb-5 mb-md-4 mb-lg-5">
          <div class="rellax col-md-6 order-md-2 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/02.jpg', 'Image', 'rounded-3 float-md-end', [600], '600w')}
          </div>
          <div class="rellax col-md-6 order-md-1 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
              <h2 class="h3">Manutenzione, tracciabilità e ispezione</h2>
              <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Maintenance</p>
              <div class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">              
                  <ul>
                    <li>Monitoraggio e certificazione di: allarmi, aggiornamenti, condizioni ambientali, tempi di servizio, attività di manutenzione e ispezioni, arresti macchine e sistemi antincendio.</li>
                    <li>Creazione di report verificabili; digitalizzazione dei processi; miglioramento dell'efficienza e dell'affidabilità.</li>
                    <li>Tracciamento ed evidenza di tutte le operazioni di carico e scarico, stato merce e ricevimenti. Monitoraggio e prova inalterabile dello stato di avanzamento dei lavori.</li>
                  </ul>
              </div>              
          </div>
        </div>

        <!-- Item -->
        <div id="${this.i18n('pagesUrl.sectors.connectivitySectionId')}" class="row pb-5 mb-md-4 mb-lg-5">
          <div class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/03.jpg', 'Image', 'rounded-3', [600], '600w')}
          </div>
          <div class="rellax col-md-6 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
              <h2 class="h3">Connettività e cybersecurity</h2>
              <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Safety & Security</p>              
              <div class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">              
                  <ul>
                    <li>Prova verificabile delle comunicazioni e dello stato di servizio in ogni momento.</li>
                    <li>Certificazione di immagini satellitari.</li>
                    <li>Certificazione cloud e server.</li>
                  </ul>
              </div>    
          </div>
        </div>

        <!-- Item -->
        <div id="${this.i18n('pagesUrl.sectors.safetySectionId')}" class="row pb-5 mb-md-4 mb-lg-5">
          <div class="rellax col-md-6 order-md-2 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/04.jpg', 'Image', 'rounded-3 float-md-end', [600], '600w')}           
          </div>
          <div class="rellax col-md-6 order-md-1 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
              <h2 class="h3">Sicurezza</h2>
              <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Safety & Security</p>
              <div class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">              
              <ul>
                <li>Negli ambienti industriali e infrastrutturali è indispensabile avere visibilità sullo stato di tutti i sistemi di sicurezza, come:
                    <ul>
                        <li>prova dell’evento per lo stato del sistema, allarmi ed incidenti;</li>
                        <li>prova del lavoro per la manutenzione e le ispezioni;</li>
                        <li>implementazione rapida della blockchain senza la necessità di una piattaforma specifica.</li>
                    </ul>
                </li>
                <li>Tracciabilità dello stato della flotta aziendale in ogni momento, con una cronologia certificata delle attività. Assicurazione della massima qualità e trasparenza nel servizio di trasporto.</li>                
              </ul>
              </div>
          </div>
        </div>

      <!-- Item -->
      <div id="${this.i18n('pagesUrl.sectors.insuranceSectionId')}" class="row pb-5 mb-md-4 mb-lg-5">
        <div class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/05.jpg', 'Image', 'rounded-3', [600], '600w')}
        </div>
        <div class="rellax col-md-6 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
            <h2 class="h3">Assicurativo e finanziario</h2>
            <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Value Services</p>            
            <div class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">              
              <ul>
                <li>Promozione di nuovi progetti e miglioramento di quelli esistenti aggiungendo strumenti innovativi e di rapida implementazione.</li>
                <li>Creazione di una cronologia certificata degli eventi soggetti a verifiche. Tracciamento, autenticità ed evidenza delle operazioni che sono soggette ai controlli assicurativi.</li>
              </ul>
            </div>   
        </div>
      </div>

      <!-- Item -->
      <div id="${this.i18n('pagesUrl.sectors.luxurySectionId')}" class="row pb-5 mb-md-4 mb-lg-5">
        <div class="rellax col-md-6 order-md-2 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
          ${await this.image('portfolio/list/06.jpg', 'Image', 'rounded-3 float-md-end', [600], '600w')}
        </div>
        <div class="rellax col-md-6 order-md-1 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
            <h2 class="h3">Beni di valore</h2>
            <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Value Services</p>
            <div class="d-md-none d-lg-block pb-3 mb-2 mb-md-3">              
              <ul>
                <li>Tracciabilità delle materie prime e dei prodotti lungo la filiera, proteggendoli dalle contraffazioni.</li>
                <li>Certificazione di unicità dei singoli capi all'interno di una collezione.</li>
                <li>Prova di autenticità di un bene prezioso, e relativa verifica di origine, dell’artista e altro. Esso può essere utilizzato come supporto fisico per NFT (Non-Fungible-Token) consentendo il commercio e il trasferimento di proprietà.</li>
              </ul>
            </div>
        </div>
      </div>
      </section>

      <!-- Contact CTA -->
      <section class="container mb-1 mb-md-3 mb-lg-4">
        <div class="bg-secondary rounded-3 overflow-hidden">
          <div class="row align-items-center">
            <div class="col-xl-4 col-md-5 offset-lg-1">
              <div class="pt-5 pb-3 pb-md-5 px-4 px-lg-0 text-center text-md-start">
                <p class="lead mb-3">Sei pronto per iniziare?</p>
                <h2 class="h1 pb-3 pb-sm-4">Porta il tuo <span class="text-primary">Business</span> al livello superiore!</h2>
                <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary btn-lg">Contattaci</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-7 offset-xl-1">
              <div class="position-relative d-flex flex-column align-items-center justify-content-center h-100">
                <svg class="d-none d-md-block position-absolute top-50 start-0 translate-middle-y" width="868" height="868" style="min-width: 868px;" viewBox="0 0 868 868" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.15" cx="434" cy="434" r="434" fill="#6366F1"/></svg>
                ${await this.image('portfolio/cta.png', 'Illustration', 'position-relative zindex-3 mb-2 my-lg-4', [382], '382w')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>`
    }
}
