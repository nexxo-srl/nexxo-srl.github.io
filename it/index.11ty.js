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
        return `<main class="page-wrapper">
          
          <!-- Hero slider + BG parallax -->
          <section class="jarallax dark-mode bg-dark py-xxl-5" data-jarallax data-speed="0.4">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-translucent"></span>
            <div class="jarallax-img" style="background-image: url(/assets/img/landing/software-company/nexxo-varese-hero.jpg);"></div>
            <div class="position-relative text-center zindex-5 overflow-hidden pt-4 py-md-5">

              <!-- Slider controls (Prev / next) -->
              <button type="button" id="hero-prev" class="btn btn-prev btn-icon btn-xl bg-transparent shadow-none position-absolute top-50 start-0 translate-middle-y d-none d-md-inline-flex ms-n3 ms-lg-2">
                <i class="bx bx-chevron-left fs-1"></i>
              </button>
              <button type="button" id="hero-next" class="btn btn-next btn-icon btn-xl bg-transparent shadow-none position-absolute top-50 end-0 translate-middle-y d-none d-md-inline-flex me-n3 me-lg-2">
                <i class="bx bx-chevron-right fs-1"></i>
              </button>

              <!-- Slider -->
              <div class="container text-center py-xl-5">
                <div class="row justify-content-center pt-lg-5">
                  <div class="col-xl-8 col-lg-9 col-md-10 col-11">
                    <div class="swiper pt-5 pb-4 py-md-5" data-swiper-options='{
                      "effect": "fade",
                      "speed": 500,
                      "autoplay": {
                        "delay": 5500,
                        "disableOnInteraction": false
                      },
                      "pagination": {
                        "el": ".swiper-pagination",
                        "clickable": true
                      },
                      "navigation": {
                        "prevEl": "#hero-prev",
                        "nextEl": "#hero-next"
                      }
                    }'>
                      <div class="swiper-wrapper">

                        <!-- Item -->
                        <div class="swiper-slide">
                          <h2 class="display-2 from-start mb-lg-4">${this.i18n('home.title')}</h2>
                          <div class="from-end">
                            <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">Qualunque siano le tue esigenze, qualunque sia il tuo business, qualunque siano i tuoi obiettivi; intraprendi con noi il tuo percorso di trasformazione digitale.</p>
                          </div>
                          <div class="scale-up delay-1">
                            <a href="#cosa-proponiamo" class="btn btn-primary shadow-primary btn-lg">Cosa proponiamo</a>
                          </div>

                        </div>

                        <!-- Item -->
                        <div class="swiper-slide">
                          <h2 class="display-2 from-start mb-lg-4">Il binomio perfetto tra Marketing e Tecnologia</h2>
                          <div class="from-end">
                            <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">Uniamo servizi di comunicazione digitale, Internet-of-Things (IoT) & Blockchain per un'esperienza più completa ed innovativa che mai!</p>
                          </div>
                          <div class="scale-up delay-1">
                            <a href="#cosa-proponiamo" class="btn btn-primary shadow-primary btn-lg">Cosa proponiamo</a>
                          </div>
                        </div>

                        <!-- Item -->
                        <div class="swiper-slide">
                          <h2 class="display-2 from-start mb-lg-4">Al vostro fianco in ogni settore</h2>
                          <div class="from-end">
                            <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">Affrontiamo insieme ogni problema di business creando e sviluppando soluzioni applicative specifiche. Condividi con noi il tuo caso d’uso!</p>
                          </div>
                          <div class="scale-up delay-1">
                            <a href="#cosa-proponiamo" class="btn btn-primary shadow-primary btn-lg">Cosa proponiamo</a>
                          </div>
                        </div>
                      </div>

                      <!-- Pagination (bullets) -->
                      <div class="swiper-pagination position-relative d-md-none pt-2 mt-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-between position-relative zindex-5 pb-5">
              <div class="d-flex mb-4 mb-sm-0">
                <a href="https://www.linkedin.com/company/nexxo-cross-platform-s-r-l/?viewAsMember=true" target="_blank" class="btn btn-icon btn-secondary btn-linkedin rounded-circle me-2">
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/nexxocrossplatform/" target="_blank" class="btn btn-icon btn-secondary btn-instagram rounded-circle me-2">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://www.facebook.com/nexxocrossplatform" target="_blank" class="btn btn-icon btn-secondary btn-facebook rounded-circle me-2">
                  <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@nexxocrossplatform" target="_blank" class="btn btn-icon btn-secondary btn-tiktok rounded-circle me-2">
                  <i class="bx bxl-tiktok"></i>
                </a>
              </div>
              <a href="${this.i18n('pagesUrl.sectors')}" class="nav-link px-0">
                Scopri i settori
                <i class="bx bx-right-arrow-circle fs-4 ms-2"></i>
              </a>
            </div>
          </section>

          <!-- About -->
          <section id="chi-siamo" class="container pt-5 mt-2 mt-md-4 mt-lg-5 pb-md-2 pb-lg-5">
            <div class="row pt-xl-3">
              <div class="col-md-5 text-center text-md-start pb-5">
                <h1 class="mb-4"><a>Chi siamo</a></h1>
                <p class="fs-lg pb-lg-3 mb-1">Siamo un' <strong>agenzia digitale start-up</strong> che aiuta a sviluppare le attività commerciali dei nostri clienti.</p>
                <p class="fs-lg pb-lg-3 mb-1">Ci proponiamo come <strong>partner tecnologico</strong> alle aziende che hanno bisogno di sviluppare la propria competitività attraverso la <strong>trasformazione digitale</strong>.</p>
                <p class="fs-lg pb-lg-3 mb-1">Lavoriamo in un ambiente giovanile dove si respira aria di creatività, energia e passione.</p>
                <p class="fs-lg pb-lg-3 mb-1">La nostra combo è quando un cliente ed un’azienda lavorano come un’unica entità nel raggiungimento degli stessi obiettivi.</p>
              </div>
              <div class="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
                ${await this.image('landing/software-company/about-us.jpg', 'Image', 'rounded-3 shadow-sm')}                
              </div>
            </div>
          </section>

          <!-- Services -->
          <section id="cosa-proponiamo" class="bg-secondary pb-md-2 pb-lg-5">
            <div class="d-none d-lg-block"></div>
            <div class="container pb-4 pt-5">
              <h2 class="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4"><a>Cosa proponiamo</a></h2>
              <div class="row align-items-center pb-5 mb-lg-2">
                <div class="text-center text-md-start">
                  <p class="fs-lg text-muted mb-md-0">Accompagniamo i nostri clienti verso la trasformazione e il rinnovamento strategico del proprio business, al fine di sfruttare al meglio le potenzialità offerte dalla transizione digitale verso l’Industria 4.0.</p>
                </div>
              </div>
              <div class="row row-cols-1 row-cols-md-2">

                <!-- Item -->
                <div class="col py-4 my-2 my-sm-3">
                  <a href="${this.i18n('pagesUrl.marketingAndCommunication')}" class="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                    <div class="card-body pt-3">
                      <div class="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                        ${await this.image('services/icons/cms.svg', 'Icon', 'd-block m-1', [40], '40w')}
                      </div>
                      <h2 class="h4 d-inline-flex align-items-center">
                        Marketing e Comunicazione
                        <i class="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                      </h2>
                      <p class="fs-sm text-body mb-0">Assistiamo le aziende nella progettazione, elaborazione o revisione del modello di business, integrando le opportune strategie, i processi di marketing e la comunicazione aziendale.</p>
                    </div>
                  </a>
                </div>

                <!-- Item -->
                <div class="col py-4 my-2 my-sm-3">
                  <a href="${this.i18n('pagesUrl.informationTechnology')}" class="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                    <div class="card-body pt-3">
                      <div class="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                        ${await this.image('services/icons/rocket.svg', 'Icon', 'd-block m-1', [40], '40w')}                      
                      </div>
                      <h2 class="h4 d-inline-flex align-items-center">
                        Tecnologie Informatiche
                        <i class="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                      </h2>
                      <p class="fs-sm text-body mb-0">Supportiamo le aziende che necessitano dell’autenticità e l’integrità dei dati fornendo servizi e soluzioni informatiche che si basano sulle tecnologie:</p>
                      <p class="fs-sm text-body mb-0">Internet-of-Things (IoT) e Blockchain.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>


          <!-- How it works (Steps) -->
          <section id="come-lavoriamo" class="container py-5 my-2 my-md-4 my-lg-5">
            <h2 class="h1 text-center pb-3 pb-md-0 mb-md-5"><a>Come lavoriamo</a></h2>
            <div class="steps">
              <div class="step pt-0 pt-md-3 pb-5">
                <div class="step-number">
                  <div class="step-number-inner">1</div>
                </div>
                <div class="step-body d-flex align-items-center ps-xl-5">
                  <div class=" d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.3" data-disable-parallax-down="lg">
                    ${await this.image('home/how-it-works/accordo-di-riservatezza.png', 'Accordo di riservatezza', 'd-dark-mode-none', [306], '306w')}
                  </div>
                  <div class=" ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.4" data-disable-parallax-down="lg">
                    <h3 class="h4">Accordo di riservatezza</h3>
                    <p class="mb-0">Proteggiamo completamente le tue informazioni riservate firmando in primo luogo un Accordo di Riservatezza. Il nostro modello operativo consente di avere un <i>Project Manager</i> che lavora a tempo pieno al tuo progetto.</p>
                  </div>
                </div>
              </div>
              <div class="step pt-0 pt-md-4 pb-5">
                <div class="step-number">
                  <div class="step-number-inner">2</div>
                </div>
                <div class="step-body d-flex align-items-center ps-xl-5">
                  <div class=" d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="lg">
                    ${await this.image('home/how-it-works/fase-conoscitiva.png', 'Illustration', 'd-dark-mode-none', [306], '306w')}
                  </div>
                  <div class=" ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.5" data-disable-parallax-down="lg">
                    <h3 class="h4">Fase conoscitiva</h3>
                    <p class="mb-0">Ci riuniamo e ascoltiamo le tue esigenze e i tuoi obiettivi per comprendere al meglio il tuo progetto.</p>
                    <ul>
                      <li>Descrizione del Progetto - comprensione reciproca dello scopo e degli obiettivi da raggiungere.</li>
                      <li>Requisiti - ascoltiamo le vostre aspettative lavorando in maniera congiunta, concordando le specifiche finali.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="step pt-0 pt-md-4 pb-5">
                <div class="step-number">
                  <div class="step-number-inner">3</div>
                </div>
                <div class="step-body d-flex align-items-center ps-xl-5">
                  <div class=" d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.3" data-disable-parallax-down="lg">
                    ${await this.image('home/how-it-works/fase-ux-ui-design.png', 'Illustration', 'd-dark-mode-none', [306], '306w')}
                  </div>
                  <div class=" ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.4" data-disable-parallax-down="lg">
                    <h3 class="h4">Fase UX/UI Design</h3>
                    <p class="mb-0">La fase conoscitiva e UX/UI design sono strettamente interconnesse tra di loro dove il nostro team di progettazione trasformerà le tue idee in realtà.</p>
                    <ul>
                      <li>Design - ti accompagniamo in ogni fase progettuale realizzando bozze, disegni grafici e altri lavori creativi per valorizzare il tuo <i>brand</i>.</li>
                      <li>Mock-up - è un’anteprima che simula la resa finale del progetto.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="step pt-0 pt-md-4 pb-5">
                <div class="step-number">
                  <div class="step-number-inner">4</div>
                </div>
                <div class="step-body d-flex align-items-center ps-xl-5">
                  <div class=" d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="lg">
                    ${await this.image('home/how-it-works/fase-conclusiva.png', 'Illustration', 'd-dark-mode-none', [306], '306w')}
                  </div>
                  <div class=" ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.6" data-disable-parallax-down="lg">
                    <h3 class="h4">Fase conclusiva</h3>
                    <p class="mb-0">A seguito dell’approvazione del mock-up viene realizzato e completato il tuo progetto.</p>
                    <p class="mb-0">La consegna sarà effettuata dopo un accurato collaudo e formazione sul suo corretto utilizzo.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Case studies -->
          <section class="bg-secondary pt-5">
            <div class="container">
              <h2 class="h1 text-center text-md-start mb-lg-4">Ultime tendenze tecnologiche</h2>
              <div class="row align-items-center pb-5">
                <div class="col-md-8 col-lg-7 col-xl-6 text-center text-md-start">
                  <p class="fs-lg text-muted mb-md-0">Portiamo soluzioni semplici ai problemi di ogni azienda attraverso una profonda comprensione del settore e del business.</p>
                </div>
              </div>
            </div>
    
            <div class="position-relative py-lg-4 py-xl-5">
    
              <!-- Swiper tabs -->
              <div class="swiper-tabs position-absolute top-0 start-0 w-100 h-100">
                <div id="image-1" class="jarallax position-absolute top-0 start-0 w-100 h-100 swiper-tab active" data-jarallax data-speed="0.4">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
                  <div class="jarallax-img" style="background-image: url(/assets/img/landing/software-company/case-study01.jpg);"></div>
                </div>
                <div id="image-2" class="jarallax position-absolute top-0 start-0 w-100 h-100 swiper-tab" data-jarallax data-speed="0.4">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
                  <div class="jarallax-img" style="background-image: url(/assets/img/landing/software-company/case-study02.jpg);"></div>
                </div>
              </div>
    
              <!-- Swiper slider -->
              <div class="container position-relative zindex-5 py-5">
                <div class="row py-2 py-md-3">
                  <div class="col-xl-5 col-lg-7 col-md-9">
    
                    <!-- Slider controls (Prev / next) -->
                    <div class="d-flex justify-content-center justify-content-md-start pb-3 mb-3">
                      <button type="button" id="case-study-prev" class="btn btn-prev btn-icon btn-sm bg-white me-2">
                        <i class="bx bx-chevron-left"></i>
                      </button>
                      <button type="button" id="case-study-next" class="btn btn-next btn-icon btn-sm bg-white ms-2">
                        <i class="bx bx-chevron-right"></i>
                      </button>
                    </div>
    
                    <!-- Card -->
                    <div class="card bg-white shadow-sm p-3">
                      <div class="card-body">
                        <div class="swiper" data-swiper-options='{
                          "spaceBetween": 30,
                          "loop": true,
                          "tabs": true,
                          "pagination": {
                            "el": "#case-study-pagination",
                            "clickable": true
                          },
                          "navigation": {
                            "prevEl": "#case-study-prev",
                            "nextEl": "#case-study-next"
                          }
                        }'>
                          <div class="swiper-wrapper">
    
                            <!-- Item -->
                            <div class="swiper-slide" data-swiper-tab="#image-1">
                              ${await this.image('landing/software-company/case-study-logo02.png', 'Logo', 'd-block mb-3', [72], '72w')}
                              <h3 class="mb-2">Piattaforme Social sempre più vicine alle aziende</h3>
                              <p class="fs-sm text-muted border-bottom pb-3 mb-3">Gestione Social Media</p>
                              <p class="pb-2 pb-lg-3 mb-3">Connettiamo la tua comunicazione aziendale sulle piattaforme Social. Aumenta la competitività comunicando su reti: LinkedIn, Instagram, Facebook, TikTok, ecc.</p>
                              <a href="${this.i18n('pagesUrl.marketingAndCommunication')}" class="btn btn-primary">Marketing e Comunicazione</a>
                            </div>
    
                            <!-- Item -->
                            <div class="swiper-slide" data-swiper-tab="#image-2">                              
                              ${await this.image('landing/software-company/case-study-logo01.png', 'Logo', 'd-block mb-3', [72], '72w')}
                              <h3 class="mb-2">L'autenticità dei dati al centro delle decisioni aziendali</h3>
                              <p class="fs-sm text-muted border-bottom pb-3 mb-3">Gestione integrità e certificazione dei dati aziendali</p>
                              <p class="pb-2 pb-lg-3 mb-3">Tracciamento della catena di approvvigionamento, monitoraggio e certificazioni d'uso dei beni industriali (es. ore d'uso, allarmi, anomalie) per una maggiore sicurezza e competitività.</p>
                              <a href="${this.i18n('pagesUrl.informationTechnology')}" class="btn btn-primary">Tecnologie Informatiche</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <!-- Pagination (bullets) -->
                    <div class="dark-mode pt-4 mt-3">
                      <div id="case-study-pagination" class="swiper-pagination position-relative bottom-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Why Us -->
          <section class="container py-5 my-2 my-md-4 my-lg-5">
            <h2 class="h1 text-center pt-1 pt-xl-2 mb-4">Perché sceglierci?</h2>
            <p class="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">Scegli noi perché ti aiuteremo a trovare nuovi clienti e ad aumentare il tuo business.</p>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-xl-3">
              <div class="col text-center border-end">
                <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  ${await this.image('home/why-choose-us/icona-01.png', 'Icon', '', [52], '52w')}
                </div>
                <h3 class="h5 mb-2 mb-lg-0">Creiamo la tua crescita digitale</h3>
              </div>
              <div class="col text-center border-end">
                <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  ${await this.image('home/why-choose-us/icona-02.png', 'Icon', '', [52], '52w')}
                </div>
                <h3 class="h5 mb-2 mb-lg-0">Uniamo marketing e tecnologia</h3>
              </div>
              <div class="col text-center border-end">
                <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  ${await this.image('home/why-choose-us/icona-03.png', 'Icon', '', [52], '52w')}
                </div>
                <h3 class="h5 mb-2 mb-lg-0">Sviluppiamo soluzioni multisettoriali</h3>
              </div>
              <div class="col text-center">
                <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  ${await this.image('home/why-choose-us/icona-04.png', 'Icon', '', [48], '48w')}
                </div>
                <h3 class="h5 mb-2 mb-lg-0">Il metodo è al centro del nostro lavoro</h3>
              </div>
            </div>
          </section>


        <!-- Sectors -->
        <section class="container py-5 my-2 my-md-4 my-lg-5">
          <div class="row">
            <div class="col-lg-4 text-center text-lg-start pb-3 pb-lg-0 mb-4 mb-lg-0">
              <h2 class="h1 mb-lg-4">Al vostro fianco in ogni settore</h2>
              <p class="pb-4 mb-0 mb-lg-3">Affrontiamo insieme ogni problema di business creando e sviluppando soluzioni applicative specifiche. Cerca il tuo settore!</p>
              <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary shadow-primary btn-lg">Contattaci</a>
            </div>
            <div class="col-xl-7 col-lg-8 offset-xl-1">
              <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/industrial.png', 'Icon', '', [32], '32w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">Industriale</h3>
                        <p class="pb-2 mb-1">Farmaceutica, Chimica, Alimentare, Energia, Oil & Gas, Navale, Automobilistico, Aerospaziale, ecc.</p>
                        <a href="${this.i18n('pagesUrl.sectors.industrialSection')}" class="btn btn-link stretched-link px-0">
                          Scopri di più
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/connectivity.png', 'Icon', '', [36], '36w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">Connettività e cybersecurity</h3>
                        <p class="pb-2 mb-1">Satelliti, telecomunicazioni, <i>software, server, cloud, cyber security</i>, ecc.</p>
                        <a href="${this.i18n('pagesUrl.sectors.connectivitySection')}" class="btn btn-link stretched-link px-0">
                          Scopri di più
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/safety.png', 'Icon', '', [32], '32w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">Sicurezza</h3>
                        <p class="pb-2 mb-1">Siti (industriali, commerciali, condomini, pubblici, militari, ecc), flotte aziendali, trasporti merce, sorveglianza, ecc.</p>
                        <a href="${this.i18n('pagesUrl.sectors.safetySection')}" class="btn btn-link stretched-link px-0">
                          Scopri di più
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/maintenance.png', 'Icon', '', [32], '32w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">Manutenzioni, tracciabilità ed ispezione</h3>
                        <p class="pb-2 mb-1">Industriale, Infrastrutture (industriali, commerciali, condominiali, municipali, militari), logistica, costruzioni, edilizia, gestione condominiale. Catene di approvvigionamenti alimentari e industriali.</p>
                        <a href="${this.i18n('pagesUrl.sectors.maintenanceSection')}" class="btn btn-link stretched-link px-0">
                          Scopri di più
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/insurance.png', 'Icon', '', [32], '32w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">Assicurativo e finanziario</h3>
                        <p class="pb-2 mb-1">Consulenza, proprietà intellettuale, affari legali, sinistri, ecc.</p>
                        <a href="${this.i18n('pagesUrl.sectors.insuranceSection')}" class="btn btn-link stretched-link px-0">
                          Scopri di più
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/luxury.png', 'Icon', '', [32], '32w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">Beni di valore</h3>
                        <p class="pb-2 mb-1">Moda, gioielli, arte, cosmetica, vini pregiati, cura della persona, medicale, ecc.</p>
                        <a href="${this.i18n('pagesUrl.sectors.luxurySection')}" class="btn btn-link stretched-link px-0">
                          Scopri di più
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="position-relative bg-dark py-5">
        <span class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, .05)"></span>
        <div class="container position-relative zindex-5 text-center my-xl-3 py-1 py-md-4 py-lg-5">
          <p class="lead text-light opacity-70 mb-3">Sei pronto per partire?</p>
          <h2 class="h1 text-light pb-3 pb-lg-0 mb-lg-5">Avvia un progetto con noi!</h2>
          <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary shadow-primary btn-lg">Contattaci</a>
        </div>
      </section>
        
    </main>`
    }
}
