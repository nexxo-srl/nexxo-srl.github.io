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
            isWhiteFooter: true
        }
    }

    async render(data) {
        return `<main class="page-wrapper">

      <!-- Page content -->
      <section class="container">

        <!-- Breadcrumb -->
        <nav class="pt-4 mt-lg-3" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
            <a href="${this.i18n('pagesUrl.homepage')}"><i class="bx bx-home-alt fs-lg me-1"></i>Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Contattaci</li>
          </ol>
        </nav>

        <!-- Page title -->
        <h1 class="pt-4 mt-lg-3 pb-3 pb-lg-4">Contattaci</h1>

        <div class="row pb-5 mb-md-2 mb-lg-4 mb-xl-5">

          <!-- Contact details -->
          <div class="col-xl-5 col-md-6 mb-4 mb-md-0">
            <div class="card card-hover mb-3">
              <div class="card-body d-flex align-items-start">
                <i class="bx bx-envelope fs-3 bg-secondary text-primary d-inline-block rounded-circle p-3"></i>
                <div class="ps-4">
                  <h3 class="h4 pb-1 mb-2">Scrivici</h3>
                  <p class="pb-1 mb-2">Non esitare a contattarci, ti risponderemo in tempi brevi</p>
                  <a href="mailto:info@nexxoxp.com" class="btn btn-link stretched-link fs-base px-0">
                    Lascia un messaggio
                    <i class="bx bx-right-arrow-alt fs-4 ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card card-hover mb-3">
              <div class="card-body d-flex align-items-start">
                <i class="bx bx-phone-call fs-3 bg-secondary text-primary d-inline-block rounded-circle p-3"></i>
                <div class="ps-4">
                  <h3 class="h4 pb-1 mb-2">Chiamaci</h3>
                  <p class="pb-1 mb-2">Per un immediato confronto siamo disponibili negli orari:</p>
                  <p class="pb-1 mb-2">Lun - Ven 9:00 - 18:00</p>
                  <a href="tel:+3903321580443" class="btn btn-link stretched-link fs-base px-0">(+39) 0332 158 0443</a>
                </div>
              </div>
            </div>
            <div class="card card-hover">
              <div class="card-body d-flex align-items-start">
                <i class="bx bx-map fs-3 bg-secondary text-primary d-inline-block rounded-circle p-3"></i>
                <div class="ps-4">
                  <h3 class="h4 pb-1 mb-2">Dove trovarci</h3>
                  <p class="pb-1 mb-2">Via E. Cairoli 5, 21100 Varese (VA) - ITALY</p>                  
                </div>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="col-md-6 offset-xl-1">
            <div class="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
              <iframe class="d-block h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.472831886673!2d8.831724515419276!3d45.821815179106835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786808306f1ab89%3A0x6993b5c858a69070!2sVia%20Ernesto%20Cairoli%2C%205%2C%2021100%20Varese%20VA!5e0!3m2!1sen!2sit!4v1654763094121!5m2!1sen!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="bg-secondary rounded-3 py-5 px-3 px-sm-0 mb-xl-4">
          <form class="needs-validation row justify-content-center py-lg-3 py-xl-4" novalidate>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-11">
              <h2 class="h1 pb-lg-1 mb-4">Lasciaci un messaggio</h2>
              <p class="fs-lg text-muted pb-lg-1 mb-4">Hai un progetto in mente? Contattaci oppure compila il form qui sotto.</p>
              <div class="row">
                <div class="col-sm-6 mb-4">
                  <label for="name" class="form-label fs-base">Nome completo</label>
                  <input type="text" id="name" class="form-control form-control-lg" required>
                  <div class="invalid-feedback">Per favore inserisci il tuo nome!</div>
                </div>
                <div class="col-sm-6 mb-4">
                  <label for="email" class="form-label fs-base">Indirizzo email</label>
                  <input type="email" id="email" class="form-control form-control-lg" required>
                  <div class="invalid-feedback">Per favore inserisci un indirizzo email valido!</div>
                </div>
                <div class="col-12 mb-4">
                  <label for="message" class="form-label fs-base">Messaggio</label>
                  <textarea id="message" class="form-control form-control-lg" rows="4" required></textarea>
                  <div class="invalid-feedback">Per favore inserisci il tuo messaggio!</div>
                </div>
              </div>
              <div class="form-check mb-4">
                <input type="checkbox" id="terms" class="form-check-input" required>
                <label for="terms" class="form-check-label fs-base">Acconsento ai <a href="#">Termini &amp; Condizioni</a></label>
              </div>
              <button type="submit" class="btn btn-primary btn-lg shadow-primary">Invia messaggio</button>  
            </div>
          </form>
        </div>
      </section>
    </main>`
    }
}
