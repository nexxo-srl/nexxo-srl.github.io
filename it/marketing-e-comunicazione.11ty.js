module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Marketing e Comunicazione',
            author: 'Nexxo Cross Platform S.r.l.',
            pageDescription: 'Ti supportiamo per semplificare la tua operatività attraverso un\'assistenza puntuale ed un supporto professionale in tutte le fase del tuo progetto, offrendoti servizi di comunicazione aziendale e marketing strategico su misura.',
            eleventyNavigation: {
                key: 'marketing-e-comunicazione',
                title: 'Marketing e Comunicazione',
            },
            isWhiteFooter: true
        }
    }

    async render(data) {
        const recaptchaClientKey = '6Ldlg5kgAAAAACt717ealB2V2KO-T6XuuTwzfOTB'
        const contactFormUrl = 'https://us-central1-nexxoxp-website.cloudfunctions.net/contactUs'

        return `<main class="page-wrapper">

      <!-- Breadcrumb -->
      <nav class="container py-4 mb-lg-2 mt-lg-3" aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center justify-content-md-start mb-0">
          <li class="breadcrumb-item">
            <a href="${this.i18n('pagesUrl.homepage')}"><i class="bx bx-home-alt fs-lg me-1"></i>Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="${this.i18n('pagesUrl.homepage.whatWeDoSectionId')}">Cosa proponiamo</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Marketing e comunicazione</li>
        </ol>
      </nav>


      <!-- Page title + Image -->
      <section class="container pb-5 mb-md-3 mb-lg-5">
        <div class="row align-items-center">
          <div class="col-xl-5 col-md-6 offset-xl-1 order-md-2 text-center text-md-start mb-3 mb-sm-0">
            <h2 class="h4 text-primary mb-2">Cosa proponiamo</h2>
            <h1 class="mb-4">Marketing e comunicazione</h1>
            <p class="fs-xl d-md-none d-lg-block pb-2 pb-md-4 mb-lg-3">Ti supportiamo per semplificare la tua operatività attraverso un'assistenza puntuale ed un supporto professionale in tutte le fase del tuo progetto, offrendoti servizi di comunicazione aziendale e marketing strategico su misura.</p>
          </div>
          <div class="col-md-6 order-md-1">
            ${await this.image('services/marketing/dashboard.png', 'Image', 'rounded-3')}
          </div>
        </div>
      </section>


      <!-- Services -->
      <section class="container pb-5 mb-md-3 mb-lg-5">
        <div class="row justify-content-center text-center">
          <div class="col-xl-6 col-lg-7 col-md-8 col-sm-10">
            <h2 class="h1 mb-4">I nostri servizi</h2>
            <p class="text-muted mb-3 mb-lg-4">Forniamo servizi e consulenza in marketing e comunicazione aziendale attraverso un portafoglio di soluzioni integrate, accompagnando le aziende durante tutto il processo di ridefinizione e sviluppo del business aziendale.</p>
          </div>
        </div>


        <!-- Swiper slider -->
        <div class="swiper swiper-nav-onhover mx-n2" data-swiper-options='{
          "slidesPerView": 1,
          "spaceBetween": 8,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "0": {
              "slidesPerView": 1
            },
            "560": {
              "slidesPerView": 2
            },
            "992": {
              "slidesPerView": 3
            }
          }
        }'>
          <div class="swiper-wrapper">

            <!-- Item -->
            <div class="swiper-slide h-auto py-3">
              <div class="card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2">
                <div class="card-body">
                  <div class="d-table position-relative p-3 mb-3">
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-circle"></span>
                    <div class="text-primary position-relative zindex-5">
                      <svg class="" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><g clip-path="url(#A)" fill="currentColor"><path d="M29.699 18.609a5.87 5.87 0 0 0 0-8.286c-2.29-2.29-5.996-2.29-8.286 0a5.87 5.87 0 0 0 0 8.286c2.29 2.29 5.996 2.29 8.286 0zM23.07 11.98c1.374-1.374 3.598-1.374 4.972 0a3.52 3.52 0 0 1 0 4.972c-1.374 1.374-3.598 1.374-4.972 0a3.52 3.52 0 0 1 0-4.972zM.054 38.476a1.17 1.17 0 0 0 1.467 1.471c1.017-.318 10.012-3.172 12.434-5.594.649-.649 1.177-1.382 1.567-2.167a1.15 1.15 0 0 0 .602-.124l2.839-1.427.43 5.754c.002.875.925 1.433 1.699 1.044.292-.194 3.324-1.302 5.46-4.766 1.186-1.923 1.805-4.134 1.805-6.394v-.805c1.764-1.141 3.406-2.36 4.752-3.66 5.822-5.621 7.137-12.54 6.856-20.64C39.944.553 39.45.059 38.834.037c-8.098-.281-15.018 1.033-20.64 6.856-1.274 1.32-2.471 2.868-3.593 4.593h-.975c-4.561 0-8.803 2.607-10.879 6.762l-.281.56a1.17 1.17 0 0 0 1.044 1.699c.665.002-.361-.045 5.868.512l-1.437 2.86a1.17 1.17 0 0 0-.124.633c-.777.389-1.504.913-2.147 1.557C3.247 28.487.374 37.461.054 38.476zm15.765-8.889l-5.407-5.406 1.106-2.208 6.509 6.509-2.208 1.106zm5.798 4.883l-.395-4.977A102.77 102.77 0 0 0 26 26.911c-.197 3.096-1.816 5.873-4.383 7.559zM37.65 2.35c.039 2.56-.109 4.825-.466 6.863a7.51 7.51 0 0 1-6.397-6.397c2.037-.357 4.303-.505 6.862-.466zM19.88 8.519c2.455-2.543 5.194-4.229 8.616-5.187a9.84 9.84 0 0 0 2.771 5.401 9.84 9.84 0 0 0 5.401 2.771c-.959 3.422-2.644 6.161-5.187 8.616-2.837 2.74-7.2 5.175-11.251 7.249l-7.598-7.599c2.074-4.051 4.509-8.413 7.249-11.251zM5.415 18.297c1.715-2.623 4.567-4.26 7.738-4.409-.939 1.61-1.819 3.271-2.641 4.879l-5.096-.47zm3.905 8.106l1.32 1.32-2.486 2.486a1.172 1.172 0 1 0 1.657 1.657l2.486-2.486 1.32 1.32c-.281.723-.729 1.404-1.32 1.994-1.343 1.343-6.052 3.17-9.274 4.286 1.122-3.215 2.957-7.913 4.302-9.257a5.81 5.81 0 0 1 1.994-1.32zm10.415-6.138a1.172 1.172 0 1 0-1.657 1.657 1.172 1.172 0 1 0 1.657-1.657z"/></g><defs><clipPath id="A"><path fill="#fff" d="M0 0h40v40H0z"/></clipPath></defs></svg>
                    </div>
                  </div>
                  <h3 class="h4">Comunicazione digitale e tradizionale</h3>
                  <ul class="list-unstyled mb-0">
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Gestione social media (LinkedIn, Instagram, Facebook, TikTok, ecc.)
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Sviluppo siti web, mobile app, UX/UI design
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Presentazioni aziendali e di business
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Pubblicità e promozione
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Item -->
            <div class="swiper-slide h-auto py-3">
              <div class="card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2">
                <div class="card-body">
                  <div class="d-table position-relative p-3 mb-3">
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-circle"></span>
                    <div class="text-primary position-relative zindex-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"><path d="M38.828 27.031h-1.172V7.109a3.52 3.52 0 0 0-3.516-3.516H5.859c-1.938 0-3.508 1.577-3.508 3.516v19.922H1.18A1.18 1.18 0 0 0 0 28.203v2.344a5.87 5.87 0 0 0 5.859 5.859H34.14A5.87 5.87 0 0 0 40 30.547v-2.344a1.17 1.17 0 0 0-1.172-1.172zM4.688 7.109c0-.646.526-1.172 1.172-1.172h28.281a1.18 1.18 0 0 1 1.18 1.172v19.922H27.11c-.647 0-1.164.525-1.164 1.172v.002 1.17H14.063v-1.172a1.17 1.17 0 0 0-1.172-1.172H4.688V7.109zm32.977 23.438a3.53 3.53 0 0 1-3.524 3.516H5.859a3.52 3.52 0 0 1-3.516-3.516v-1.172h9.383v1.172c0 .647.517 1.172 1.164 1.172h14.219a1.17 1.17 0 0 0 1.172-1.172v-1.172h9.383v1.172zm-4.696-7.031a1.17 1.17 0 0 0-1.172-1.172H11.049l6.604-6.549 3.862 3.862a1.17 1.17 0 0 0 1.651.006l4.765-4.697c.46.222.977.347 1.522.347a3.52 3.52 0 0 0 3.516-3.516 3.52 3.52 0 0 0-3.516-3.516 3.52 3.52 0 0 0-3.516 3.516c0 .539.122 1.051.34 1.508l-3.928 3.872-3.865-3.865a1.17 1.17 0 0 0-1.654-.004l-7.456 7.394V9.453a1.172 1.172 0 0 0-2.344 0v14.062c0 .653.534 1.172 1.172 1.172h.001 23.593a1.17 1.17 0 0 0 1.172-1.172zm-3.516-12.891c.646 0 1.172.526 1.172 1.172s-.526 1.172-1.172 1.172-1.172-.526-1.172-1.172.526-1.172 1.172-1.172z"/></svg>
                    </div>
                  </div>
                  <h3 class="h4">Creazione contenuti</h3>
                  <ul class="list-unstyled mb-0">
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Infografiche digitali, motion graphics, caroselli, illustrazioni
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Produzione e post-produzione immagini
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Produzione e post-produzione video, sottotitoli, speakeraggio, montaggio finale
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Preparazione didascalie, storytelling, copywriting
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Item -->
            <div class="swiper-slide h-auto py-3">
              <div class="card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2">
                <div class="card-body">
                  <div class="d-table position-relative p-3 mb-3">
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-circle"></span>
                    <div class="text-primary position-relative zindex-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"><path d="M36.484 1.25H3.516A3.52 3.52 0 0 0 0 4.766v23.437a3.52 3.52 0 0 0 3.516 3.516h10.171l-1.562 4.687H8.281a1.172 1.172 0 1 0 0 2.344h23.438a1.172 1.172 0 1 0 0-2.344h-3.843l-1.562-4.687h10.171A3.52 3.52 0 0 0 40 28.203V4.766a3.52 3.52 0 0 0-3.516-3.516zm-21.89 35.156l1.563-4.687h7.686l1.563 4.687H14.595zm23.062-8.203c0 .646-.526 1.172-1.172 1.172H3.516c-.646 0-1.172-.526-1.172-1.172v-1.172h35.312v1.172zM12.78 17.952l-1.066-1.066 1.657-1.657 1.066 1.066a1.17 1.17 0 0 0 1.424.181c.659-.388 1.362-.681 2.089-.869a1.17 1.17 0 0 0 .878-1.134V12.97h2.344v1.503a1.17 1.17 0 0 0 .878 1.134 8.13 8.13 0 0 1 2.089.87 1.17 1.17 0 0 0 1.424-.181l1.066-1.066 1.657 1.657-1.066 1.066a1.17 1.17 0 0 0-.181 1.424 8.09 8.09 0 0 1 .869 2.09 1.17 1.17 0 0 0 1.134.878h1.503v2.344h-4.806a5.88 5.88 0 0 0 .118-1.172A5.87 5.87 0 0 0 20 17.656a5.87 5.87 0 0 0-5.859 5.859 5.88 5.88 0 0 0 .118 1.172H9.453v-2.344h1.503a1.17 1.17 0 0 0 1.135-.878c.188-.728.481-1.431.869-2.09a1.17 1.17 0 0 0-.181-1.424zm10.736 5.563a3.53 3.53 0 0 1-.201 1.172h-6.628a3.53 3.53 0 0 1-.201-1.172A3.52 3.52 0 0 1 20 20a3.52 3.52 0 0 1 3.516 3.516zm14.141 1.172h-4.766v-3.516A1.17 1.17 0 0 0 31.719 20h-1.81a10.5 10.5 0 0 0-.418-1.003l1.282-1.282a1.17 1.17 0 0 0 0-1.657l-3.314-3.315a1.17 1.17 0 0 0-1.657 0l-1.282 1.282c-.328-.157-.663-.296-1.003-.418v-1.811a1.17 1.17 0 0 0-1.172-1.172h-4.688a1.17 1.17 0 0 0-1.172 1.172v1.811a10.3 10.3 0 0 0-1.003.418L14.2 12.743a1.17 1.17 0 0 0-1.657 0l-3.314 3.315a1.17 1.17 0 0 0 0 1.657l1.281 1.282A10.46 10.46 0 0 0 10.092 20H8.281a1.17 1.17 0 0 0-1.172 1.172v3.516H2.344V4.766c0-.646.526-1.172 1.172-1.172h32.969c.646 0 1.172.526 1.172 1.172v19.922zM31.719 5.938a3.52 3.52 0 0 0-3.516 3.516 3.52 3.52 0 0 0 3.516 3.516 3.52 3.52 0 0 0 3.516-3.516 3.52 3.52 0 0 0-3.516-3.516zm0 4.688c-.646 0-1.172-.526-1.172-1.172s.526-1.172 1.172-1.172 1.172.526 1.172 1.172-.526 1.172-1.172 1.172z"/></svg>
                    </div>
                  </div>
                  <h3 class="h4">Marketing strategico</h3>
                  <ul class="list-unstyled mb-0">
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Brand strategy (analisi e studio del marchio e del modello di business)
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Digital marketing strategy (strategia dei social media, SEO/SEM, segmentazione clienti)
                    </li>
                    <li class="d-flex align-items-center mb-2">
                      <i class="bx bx-check-circle fs-xl text-muted me-2"></i>
                      Strategic selling (strategia dei canali e del processo di vendita)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative d-lg-none pt-2 pt-sm-3 mt-4"></div>
        </div>
      </section>


      <!-- Contact form -->
      <section class="container pb-3 mb-lg-3">
        <div class="position-relative bg-secondary rounded-3 py-5 mb-2">
          <div class="row pb-2 py-md-3 py-lg-5 px-4 px-lg-0 position-relative zindex-3">
            <div class="col-xl-3 col-lg-4 col-md-5 offset-lg-1">
              <p class="lead mb-2 mb-md-3">Hai un progetto in mente?</p>
              <h2 class="h1 pb-3">Non esitare a contattarci</h2>
            </div>
            <form id="contact-form" class="col-lg-6 col-md-7 offset-xl-1 needs-validation" novalidate method="POST" action="${contactFormUrl}">
              <input type="hidden" name="subject" value="Nexxoxp.com - Richiesta info marketing e comunicazione"/>
              <div class="row">
                <div class="col-sm-6 mb-4">
                  <label for="name" class="form-label fs-base">Nome e Cognome</label>
                  <input type="text" name="name" id="name" class="form-control form-control-lg" required>
                  <div class="invalid-feedback">Inserisci il tuo Nome e Cognome!</div>
                </div>
                <div class="col-sm-6 mb-4">
                  <label for="email" class="form-label fs-base">Email</label>
                  <input type="email" name="email" id="email" class="form-control form-control-lg" required>
                  <div class="invalid-feedback">Inserisci la tua email!</div>
                </div>
                <div class="col-12 pb-2 mb-4">
                  <label for="message" class="form-label fs-base">Messaggio</label>
                  <textarea id="message" name="message" class="form-control form-control-lg" rows="4" required></textarea>
                  <div class="invalid-feedback">inserisci il tuo messaggio!</div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary shadow-primary btn-lg">
                <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                <span>Invia richiesta</span>
              </button>
            </form>
            <div id="contact-form-done" class="col-lg-6 col-md-7 offset-xl-1" style="display: none;">
              <h4 class="text-center">Grazie per averci contattato! Un membro del nostro team si metterà in contatto con te il prima possibile.</h4>
            </div>
            <script src="https://www.google.com/recaptcha/api.js?render=${recaptchaClientKey}"></script>
            <script>
                const form = document.getElementById('contact-form')
                const formReplacement = document.getElementById('contact-form-done')
                const submitButton = form.getElementsByTagName('button')[0]
                const checkRecaptcha = callback => {
                    grecaptcha.ready(function() {
                        grecaptcha.execute('${recaptchaClientKey}', {action: 'submit'})
                            .then(token => callback(null, token))
                            .catch(error => callback(error))
                    })
                }
                const lockForm = () => {
                    submitButton.classList.add('disabled')
                    submitButton.children[0].style.cssText = ''
                }
                const unlockForm = () => {
                    submitButton.children[0].style.cssText = 'display: none;'
                    submitButton.classList.remove('disabled')
                }
                form.addEventListener('submit', (event) => {
                    event.preventDefault()
                    
                    checkRecaptcha((error, token) => {
                        if (error) {
                            console.log(error)
                            return
                        }
                        
                        const request = new XMLHttpRequest()
                        const formData = new FormData(form)
                        formData.set('recaptcha', token)
                        const fail = () => {
                            unlockForm()
                            alert('L\\'invio della email è fallito')
                        }
                        const success = () => {
                            form.reset()
                            unlockForm()
                            form.style.cssText = 'display: none;'
                            formReplacement.style.cssText = ''
                        }
                    
                        request.open('POST', form.action, true)
                        request.onload = function() {
                            if (this.status >= 200 && this.status < 400) {
                                success()
                            } else {
                                fail()
                            }
                        }
                        request.onerror = function() { fail() }
                        
                        lockForm()
                        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                        request.send(new URLSearchParams(formData))
                    })
                })
            </script>
          </div>

          <!-- Pattern -->
          <div class="position-absolute end-0 bottom-0 text-primary">
            <svg width="416" height="444" viewBox="0 0 416 444" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M240.875 615.746C389.471 695.311 562.783 640.474 631.69 504.818C700.597 369.163 645.201 191.864 496.604 112.299C348.007 32.7335 174.696 87.5709 105.789 223.227C36.8815 358.882 92.278 536.18 240.875 615.746ZM208.043 680.381C388.035 776.757 605.894 713.247 694.644 538.527C783.394 363.807 709.428 144.04 529.436 47.6636C349.443 -48.7125 131.584 14.7978 42.8343 189.518C-45.916 364.238 28.0504 584.005 208.043 680.381Z" fill="currentColor"/><path opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M262.68 572.818C382.909 637.194 526.686 594.13 584.805 479.713C642.924 365.295 595.028 219.601 474.799 155.224C354.57 90.8479 210.793 133.912 152.674 248.33C94.5545 362.747 142.45 508.442 262.68 572.818ZM253.924 590.054C382.526 658.913 538.182 613.536 601.593 488.702C665.004 363.867 612.156 206.847 483.554 137.988C354.953 69.129 199.296 114.506 135.886 239.341C72.4752 364.175 125.323 521.195 253.924 590.054Z" fill="currentColor"/></svg>
          </div>
        </div>
      </section>
    </main>`
    }
}
