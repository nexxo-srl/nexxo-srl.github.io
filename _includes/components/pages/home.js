const paddedAnchor = require('./utils/paddedAnchor')

module.exports = async function(data)
{
    return `
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
                          <h2 class="display-2 from-start mb-lg-4">${this.i18n('home.slideTitle01')}</h2>
                          <div class="from-end">
                            <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">${this.i18n('home.slideDescription01')}</p>
                          </div>
                          <div class="scale-up delay-1">
                            <a href="#${this.i18n('pagesUrl.homepage.whatWeDoSection.id')}" class="btn btn-primary shadow-primary btn-lg">${this.i18n('home.slideCTA')}</a>
                          </div>

                        </div>

                        <!-- Item -->
                        <div class="swiper-slide">
                          <h2 class="display-2 from-start mb-lg-4">${this.i18n('home.slideTitle02')}</h2>
                          <div class="from-end">
                            <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">${this.i18n('home.slideDescription02')}</p>
                          </div>
                          <div class="scale-up delay-1">
                            <a href="#${this.i18n('pagesUrl.homepage.whatWeDoSection.id')}" class="btn btn-primary shadow-primary btn-lg">${this.i18n('home.slideCTA')}</a>
                          </div>
                        </div>

                        <!-- Item -->
                        <div class="swiper-slide">
                          <h2 class="display-2 from-start mb-lg-4">${this.i18n('home.slideTitle03')}</h2>
                          <div class="from-end">
                            <p class="fs-xl text-light opacity-70 pb-2 mb-lg-5">${this.i18n('home.slideDescription03')}</p>
                          </div>
                          <div class="scale-up delay-1">
                            <a href="#${this.i18n('pagesUrl.homepage.whatWeDoSection.id')}" class="btn btn-primary shadow-primary btn-lg">${this.i18n('home.slideCTA')}</a>
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
            
            <!-- Social icons -->
            <div class="container d-flex flex-column flex-sm-row align-items-center justify-content-between position-relative zindex-5 pb-5">
              <div class="d-flex mb-4 mb-sm-0">
                <a href="${data.nexxo.linkedin}" target="_blank" class="btn btn-icon btn-secondary btn-linkedin rounded-circle me-2">
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a href="${data.nexxo.instagram}" target="_blank" class="btn btn-icon btn-secondary btn-instagram rounded-circle me-2">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="${data.nexxo.facebook}" target="_blank" class="btn btn-icon btn-secondary btn-facebook rounded-circle me-2">
                  <i class="bx bxl-facebook"></i>
                </a>
                <a href="${data.nexxo.tiktok}" target="_blank" class="btn btn-icon btn-secondary btn-tiktok rounded-circle me-2">
                  <i class="bx bxl-tiktok"></i>
                </a>
              </div>
              <a href="${this.i18n('pagesUrl.sectors')}" class="nav-link px-0">
                ${this.i18n('home.slideDiscoverSectorsCTA')}
                <i class="bx bx-right-arrow-circle fs-4 ms-2"></i>
              </a>
            </div>
          </section>

          <!-- Who We Are Section -->
          <section id="${this.i18n('pagesUrl.homepage.whoWeAreSection.id')}" class="container pt-5 mt-2 mt-md-4 mt-lg-5 pb-md-2 pb-lg-5">            
            
            <div class="row pt-xl-3">
              <div class="col-md-5 text-center text-md-start pb-5">
                <h1 class="mb-4"><a>${this.i18n('home.whoWeAre.title')}</a></h1>
                <p class="fs-lg pb-lg-3 mb-1">${this.i18n('home.whoWeAre.paragraph01')}</p>
                <p class="fs-lg pb-lg-3 mb-1">${this.i18n('home.whoWeAre.paragraph02')}</p>
                <p class="fs-lg pb-lg-3 mb-1">${this.i18n('home.whoWeAre.paragraph03')}</p>
                <p class="fs-lg pb-lg-3 mb-1">${this.i18n('home.whoWeAre.paragraph04')}</p>
              </div>
              <div class="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
                ${await this.image('landing/software-company/about-us.jpg', 'Team di giovani talenti di una software company', 'rounded-3 shadow-sm')}                
              </div>
            </div>
          </section>

          <!-- What We Do Section -->
          <section class="bg-secondary pb-md-2 pb-lg-5">
            ${paddedAnchor(this.i18n('pagesUrl.homepage.whatWeDoSection.id'))}
            <div class="d-none d-lg-block"></div>
            <div class="container pb-4 pt-5">
              <h2 class="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4"><a>${this.i18n('home.whatWeDo.title')}</a></h2>
              <div class="row align-items-center pb-5 mb-lg-2">
                <div class="text-center text-md-start">
                  <p class="fs-lg text-muted mb-md-0">${this.i18n('home.whatWeDo.paragraph01')}</p>
                </div>
              </div>
              <div class="row row-cols-1 row-cols-md-2">

                <!-- Item -->
                <div class="col py-4 my-2 my-sm-3">
                  <a href="${this.i18n('pagesUrl.marketingAndCommunication')}" class="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                    <div class="card-body pt-3">
                      <div class="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                        ${await this.image('services/icons/cms.svg', 'Icona cms', 'd-block m-1', [160, 120, 80, 40], '40w')}
                      </div>
                      <h2 class="h4 d-inline-flex align-items-center">
                        ${this.i18n('home.whatWeDo.marketing.title')}
                        <i class="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                      </h2>
                      <p class="fs-sm text-body mb-0">${this.i18n('home.whatWeDo.marketing.paragraph01')}</p>
                    </div>
                  </a>
                </div>

                <!-- Item -->
                <div class="col py-4 my-2 my-sm-3">
                  <a href="${this.i18n('pagesUrl.informationTechnology')}" class="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2">
                    <div class="card-body pt-3">
                      <div class="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
                        ${await this.image('services/icons/rocket.svg', 'Icona razzo', 'd-block m-1', [160, 120, 80, 40], '40w')}                      
                      </div>
                      <h2 class="h4 d-inline-flex align-items-center">
                        ${this.i18n('home.whatWeDo.technology.title')}
                        <i class="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                      </h2>
                      <p class="fs-sm text-body mb-0">${this.i18n('home.whatWeDo.technology.paragraph01')}</p>
                      <p class="fs-sm text-body mb-0">${this.i18n('home.whatWeDo.technology.paragraph02')}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>


          <!-- How We Work -->
          <section class="container py-5 my-2 my-md-4 my-lg-5">
            ${paddedAnchor(this.i18n('pagesUrl.homepage.howWeWorkSection.id'))}
            <h2 class="h1 pb-3 pb-md-0 mb-md-5"><a>${this.i18n('home.howWeWork.title')}</a></h2>
            <div class="steps">
              <div class="step pt-0 pt-md-3 pb-5">
                <div class="step-number">
                  <div class="step-number-inner">1</div>
                </div>
                <div class="step-body d-flex align-items-center ps-xl-5">
                  <div class=" d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.3" data-disable-parallax-down="lg">
                    ${await this.image('home/how-it-works/accordo-di-riservatezza.png', 'Come lavoriamo: accordo di riservatezza', 'd-dark-mode-none howWeWorkImage', [400, 300, 200], '300w')}
                  </div>
                  <div class=" ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.4" data-disable-parallax-down="lg">
                    <h3 class="h4">${this.i18n('home.howWeWork.step01.title')}</h3>
                    <p class="mb-0">${this.i18n('home.howWeWork.step01.paragraph01')}</p>
                  </div>
                </div>
              </div>
              <div class="step pt-0 pt-md-4 pb-5">
                <div class="step-number">
                  <div class="step-number-inner">2</div>
                </div>
                <div class="step-body d-flex align-items-center ps-xl-5">
                  <div class=" d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="lg">
                    ${await this.image('home/how-it-works/fase-conoscitiva.png', 'Come lavoriamo: fase conoscitiva', 'd-dark-mode-none howWeWorkImage', [400, 300, 200], '300w')}
                  </div>
                  <div class=" ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.5" data-disable-parallax-down="lg">
                    <h3 class="h4">${this.i18n('home.howWeWork.step02.title')}</h3>
                    <p class="mb-0">${this.i18n('home.howWeWork.step02.paragraph01')}</p>
                    <ul>
                      <li>${this.i18n('home.howWeWork.step02.listElement01')}</li>
                      <li>${this.i18n('home.howWeWork.step02.listElement02')}</li>
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
                    ${await this.image('home/how-it-works/fase-ux-ui-design.png', 'Come lavoriamo: fase ux/ui', 'd-dark-mode-none howWeWorkImage', [400, 300, 200], '300w')}
                  </div>
                  <div class=" ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.4" data-disable-parallax-down="lg">
                    <h3 class="h4">${this.i18n('home.howWeWork.step03.title')}</h3>
                    <p class="mb-0">${this.i18n('home.howWeWork.step03.paragraph01')}</p>
                    <ul>
                      <li>${this.i18n('home.howWeWork.step03.listElement01')}</li>
                      <li>${this.i18n('home.howWeWork.step03.listElement02')}</li>
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
                    ${await this.image('home/how-it-works/fase-conclusiva.png', 'Come lavoriamo: fase conclusiva', 'd-dark-mode-none howWeWorkImage', [400, 300, 200], '300w')}
                  </div>
                  <div class=" ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.6" data-disable-parallax-down="lg">
                    <h3 class="h4">${this.i18n('home.howWeWork.step04.title')}</h3>
                    <p class="mb-0">${this.i18n('home.howWeWork.step04.paragraph01')}</p>
                    <p class="mb-0">${this.i18n('home.howWeWork.step04.paragraph02')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- Latest Trends -->
          <section class="bg-secondary pt-5">
            <div class="container">
              <h2 class="h1 text-center text-md-start mb-lg-4">${this.i18n('home.latestTrends.title')}</h2>
              <div class="row align-items-center pb-5">
                <div class="col-md-8 col-lg-7 col-xl-6 text-center text-md-start">
                  <p class="fs-lg text-muted mb-md-0">${this.i18n('home.latestTrends.paragraph01')}</p>
                </div>
              </div>
            </div>
    
            <div class="position-relative py-lg-4 py-xl-5">
    
              <!-- Swiper tabs -->
              <div class="swiper-tabs position-absolute top-0 start-0 w-100 h-100">
                <div id="image-1" class="jarallax position-absolute top-0 start-0 w-100 h-100 swiper-tab active" data-jarallax data-speed="0.4">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
                  <div class="jarallax-img" style="background-image: url(/assets/img/landing/software-company/latest-trends-marketing.jpg);"></div>
                </div>
                <div id="image-2" class="jarallax position-absolute top-0 start-0 w-100 h-100 swiper-tab" data-jarallax data-speed="0.4">
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
                  <div class="jarallax-img" style="background-image: url(/assets/img/landing/software-company/latest-trends-tech.jpg);"></div>
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
                              ${await this.image('landing/software-company/case-study-logo02.png', 'Logo case study 1', 'swiper-logo d-block mb-3', [144, 72], '72w')}
                              <h3 class="mb-2">${this.i18n('home.latestTrends.card01.title')}</h3>
                              <p class="fs-sm text-muted border-bottom pb-3 mb-3">${this.i18n('home.latestTrends.card01.paragraph01')}</p>
                              <p class="pb-2 pb-lg-3 mb-3">${this.i18n('home.latestTrends.card01.paragraph02')}</p>
                              <a href="${this.i18n('pagesUrl.marketingAndCommunication')}" class="btn btn-primary">${this.i18n('home.latestTrends.card01.cta')}</a>
                            </div>
    
                            <!-- Item -->
                            <div class="swiper-slide" data-swiper-tab="#image-2">                              
                              ${await this.image('landing/software-company/case-study-logo01.png', 'Logo case study 2', 'swiper-logo d-block mb-3', [144, 72], '72w')}
                              <h3 class="mb-2">${this.i18n('home.latestTrends.card02.title')}</h3>
                              <p class="fs-sm text-muted border-bottom pb-3 mb-3">${this.i18n('home.latestTrends.card02.paragraph01')}</p>
                              <p class="pb-2 pb-lg-3 mb-3">${this.i18n('home.latestTrends.card02.paragraph02')}</p>
                              <a href="${this.i18n('pagesUrl.informationTechnology')}" class="btn btn-primary">${this.i18n('home.latestTrends.card02.cta')}</a>
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
            <h2 class="h1 text-center pt-1 pt-xl-2 mb-4">${this.i18n('home.whyChooseUs.title')}</h2>
            <p class="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">${this.i18n('home.whyChooseUs.paragraph01')}</p>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-xl-3">
              <div class="col text-center border-end">
                <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  ${await this.image('home/why-choose-us/icona-01.png', 'Icona 1 perché sceglierci', 'whyUsIcon', [150, 100, 50], '50w')}
                </div>
                <h3 class="h5 mb-2 mb-lg-0">${this.i18n('home.whyChooseUs.element01')}</h3>
              </div>
              <div class="col text-center border-end">
                <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  ${await this.image('home/why-choose-us/icona-02.png', 'Icona 2 perché sceglierci', 'whyUsIcon', [150, 100, 50], '50w')}
                </div>
                <h3 class="h5 mb-2 mb-lg-0">${this.i18n('home.whyChooseUs.element02')}</h3>
              </div>
              <div class="col text-center border-end">
                <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  ${await this.image('home/why-choose-us/icona-03.png', 'Icona 3 perché sceglierci', 'whyUsIcon', [150, 100, 50], '50w')}
                </div>
                <h3 class="h5 mb-2 mb-lg-0">${this.i18n('home.whyChooseUs.element03')}</h3>
              </div>
              <div class="col text-center">
                <div class="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  ${await this.image('home/why-choose-us/icona-04.png', 'Icona 4 perché sceglierci','whyUsIcon', [150, 100, 50], '50w')}
                </div>
                <h3 class="h5 mb-2 mb-lg-0">${this.i18n('home.whyChooseUs.element04')}</h3>
              </div>
            </div>
          </section>


        <!-- Sectors -->
        <section class="container py-5 my-2 my-md-4 my-lg-5">
          <div class="row">
            <div class="col-lg-4 text-center text-lg-start pb-3 pb-lg-0 mb-4 mb-lg-0">
              <h2 class="h1 mb-lg-4">${this.i18n('home.sectors.title')}</h2>
              <p class="pb-4 mb-0 mb-lg-3">${this.i18n('home.sectors.paragraph01')}</p>
              <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary shadow-primary btn-lg">${this.i18n('home.sectors.contactUsCTA')}</a>
            </div>
            <div class="col-xl-7 col-lg-8 offset-xl-1">
              <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/industrial.png', 'Icon', 'sectorsIcon', [150, 100, 50], '50w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">${this.i18n('home.sectors.industrial.title')}</h3>
                        <p class="pb-2 mb-1">${this.i18n('home.sectors.industrial.paragraph')}</p>
                        <a href="${this.i18n('pagesUrl.sectors.industrialSection')}" class="btn btn-link stretched-link px-0">
                          ${this.i18n('home.sectors.discoverMoreCTA')}
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/connectivity.png', 'Icona connettività', 'sectorsIcon', [150, 100, 50], '50w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">${this.i18n('home.sectors.connectivity.title')}</h3>
                        <p class="pb-2 mb-1">${this.i18n('home.sectors.connectivity.paragraph')}</p>
                        <a href="${this.i18n('pagesUrl.sectors.connectivitySection')}" class="btn btn-link stretched-link px-0">
                          ${this.i18n('home.sectors.discoverMoreCTA')}
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/safety.png', 'Icona sicurezza', 'sectorsIcon', [150, 100, 50], '50w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">${this.i18n('home.sectors.safety.title')}</h3>
                        <p class="pb-2 mb-1">${this.i18n('home.sectors.safety.paragraph')}</p>
                        <a href="${this.i18n('pagesUrl.sectors.safetySection')}" class="btn btn-link stretched-link px-0">
                          ${this.i18n('home.sectors.discoverMoreCTA')}
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
                        ${await this.image('sectors/maintenance.png', 'Icona manutenzioni', 'sectorsIcon', [150, 100, 50], '50w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">${this.i18n('home.sectors.maintenance.title')}</h3>
                        <p class="pb-2 mb-1">${this.i18n('home.sectors.maintenance.paragraph')}</p>
                        <a href="${this.i18n('pagesUrl.sectors.maintenanceSection')}" class="btn btn-link stretched-link px-0">
                          ${this.i18n('home.sectors.discoverMoreCTA')}
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/insurance.png', 'Icona assicurativo', 'sectorsIcon', [150, 100, 50], '50w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">${this.i18n('home.sectors.insurance.title')}</h3>
                        <p class="pb-2 mb-1">${this.i18n('home.sectors.insurance.paragraph')}</p>
                        <a href="${this.i18n('pagesUrl.sectors.insuranceSection')}" class="btn btn-link stretched-link px-0">
                          ${this.i18n('home.sectors.discoverMoreCTA')}
                          <i class="bx bx-right-arrow-alt fs-xl ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card card-hover bg-secondary border-0 mb-4">
                    <div class="card-body d-flex align-items-start">
                      <div class="flex-shrink-0 bg-light rounded-3 p-3">
                        ${await this.image('sectors/luxury.png', 'Icona beni di valore', 'sectorsIcon', [150, 100, 50], '50w')}
                      </div>
                      <div class="ps-4">
                        <h3 class="h5 pb-2 mb-1">${this.i18n('home.sectors.luxury.title')}</h3>
                        <p class="pb-2 mb-1">${this.i18n('home.sectors.luxury.paragraph')}</p>
                        <a href="${this.i18n('pagesUrl.sectors.luxurySection')}" class="btn btn-link stretched-link px-0">
                          ${this.i18n('home.sectors.discoverMoreCTA')}
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

        <!-- Pre Footer CTA -->
        <section class="position-relative bg-dark py-5">
        <span class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255, 255, 255, .05)"></span>
        <div class="container position-relative zindex-5 text-center my-xl-3 py-1 py-md-4 py-lg-5">
          <p class="lead text-light opacity-70 mb-3">${this.i18n('home.preFooterCTA.paragraph01')}</p>
          <h2 class="h1 text-light pb-3 pb-lg-0 mb-lg-5">${this.i18n('home.preFooterCTA.title')}</h2>
          <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary shadow-primary btn-lg">${this.i18n('home.preFooterCTA.contactUsCTA')}</a>
        </div>
      </section>`
}
