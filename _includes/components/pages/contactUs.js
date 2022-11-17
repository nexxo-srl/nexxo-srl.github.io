const includeFormScript = require('../formScript')

module.exports = async function (data) {
    const contactFormUrl = 'https://us-central1-nexxoxp-website.cloudfunctions.net/contactUs'

    return `
      <!-- Page content -->
      <section class="container">

        <!-- Breadcrumb -->
        <nav class="pt-4 mt-lg-3" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
            <a href="${this.i18n('pagesUrl.homepage')}"><i class="bx bx-home-alt fs-lg me-1"></i>${this.i18n('pagesUrl.homepage.linkName')}</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">${this.i18n('pagesUrl.contactUs.linkName')}</li>
          </ol>
        </nav>

        <!-- Page title -->
        <h1 class="pt-4 mt-lg-3 pb-3 pb-lg-4">${this.i18n('contactUs.title')}</h1>

        <div class="row pb-5 mb-md-2 mb-lg-4 mb-xl-5">

          <!-- Contact details -->
          <div class="col-xl-5 col-md-6 mb-4 mb-md-0">
            <div class="card card-hover mb-3">
              <div class="card-body d-flex align-items-start">
                <i class="bx bx-envelope fs-3 bg-secondary text-primary d-inline-block rounded-circle p-3"></i>
                <div class="ps-4">
                  <h3 class="h4 pb-1 mb-2">${this.i18n('contactUs.emailCard.title')}</h3>
                  <p class="pb-1 mb-2">${this.i18n('contactUs.emailCard.paragraph01')}</p>
                  <a href="mailto:info@nexxoxp.com" class="btn btn-link stretched-link fs-base px-0">
                    ${this.i18n('contactUs.emailCard.messageCTA')}
                    <i class="bx bx-right-arrow-alt fs-4 ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="card card-hover mb-3">
              <div class="card-body d-flex align-items-start">
                <i class="bx bx-phone-call fs-3 bg-secondary text-primary d-inline-block rounded-circle p-3"></i>
                <div class="ps-4">
                  <h3 class="h4 pb-1 mb-2">${this.i18n('contactUs.phoneCard.title')}</h3>
                  <p class="pb-1 mb-2">${this.i18n('contactUs.phoneCard.paragraph01')}</p>
                  <p class="pb-1 mb-2">${this.i18n('contactUs.phoneCard.paragraph02')}</p>
                  <a href="tel:${data.nexxo.contacts.unformattedPhone}" class="btn btn-link stretched-link fs-base px-0">${data.nexxo.contacts.phone}</a>
                </div>
              </div>
            </div>
            <div class="card card-hover">
              <div class="card-body d-flex align-items-start">
                <i class="bx bx-map fs-3 bg-secondary text-primary d-inline-block rounded-circle p-3"></i>
                <div class="ps-4">
                  <h3 class="h4 pb-1 mb-2">${this.i18n('contactUs.locationCard.title')}</h3>
                  <p class="pb-1 mb-2">${data.nexxo.contacts.address}</p>                  
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
          <form id="contact-form" class="needs-validation row justify-content-center py-lg-3 py-xl-4" novalidate method="POST" action="${contactFormUrl}">
            <input type="hidden" name="subject" value="Nexxoxp.com - Richiesta info contattaci"/>
            <div class="col-xl-8 col-lg-9 col-md-10 col-sm-11">
              <h2 class="h1 pb-lg-1 mb-4">${this.i18n('contactUs.contactForm.title')}</h2>
              <p class="fs-lg text-muted pb-lg-1 mb-4">${this.i18n('contactUs.contactForm.subtitle')}</p>
              <div class="row">
                <div class="col-sm-6 mb-4">
                  <label for="name" class="form-label fs-base">${this.i18n('contactUs.contactForm.fullNameField.label')}</label>
                  <input type="text" name="name" id="name" class="form-control form-control-lg" required>
                  <div class="invalid-feedback">${this.i18n('contactUs.contactForm.fullNameField.errorMessage')}</div>
                </div>
                <div class="col-sm-6 mb-4">
                  <label for="email" class="form-label fs-base">${this.i18n('contactUs.contactForm.emailField.label')}</label>
                  <input type="email" name="email" id="email" class="form-control form-control-lg" required>
                  <div class="invalid-feedback">${this.i18n('contactUs.contactForm.emailField.errorMessage')}</div>
                </div>
                <div class="col-12 mb-4">
                  <label for="message" class="form-label fs-base">${this.i18n('contactUs.contactForm.messageField.label')}</label>
                  <textarea id="message" name="message" class="form-control form-control-lg" rows="4" required></textarea>
                  <div class="invalid-feedback">${this.i18n('contactUs.contactForm.messageField.errorMessage')}</div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary shadow-primary btn-lg">
                <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                <span>${this.i18n('contactUs.contactForm.buttonCTA')}</span>
              </button>
              <p class="fs-xs pb-2 pb-lg-0 mt-4 mb-0">${this.i18n('generic.recaptchaDisclaimer')}</p>                      
            </div>
          </form>
          <div id="contact-form-done" class="col-lg-6 col-md-7 offset-xl-1" style="display: none;">
              <h4 class="text-center">${this.i18n('contactUs.contactForm.thankYouMessage')}</h4>
          </div>
          
          ${includeFormScript(this.i18n, 'contact-form', 'contactUsForm')}
            
        </div>
      </section>`
}
