const includeFormScript = require('./formScript')

module.exports = async function (data) {
    const contactFormUrl = 'https://us-central1-nexxoxp-website.cloudfunctions.net/contactUs'

    const footerAdditionalClasses = data.isWhiteFooter ? '' : 'dark-mode bg-dark'
    const titleAdditionalClasses = data.isWhiteFooter ? '' : 'text-dark'
    const textAdditionalClasses = data.isWhiteFooter ? '' : 'text-light'
    const companyData = data.isNexxoAdvisory ? data.nexxoAdvisory : data.nexxo

    return ` <footer class="footer ${footerAdditionalClasses} pt-5 pb-4 pb-lg-5">
      <div class="container pt-lg-4">
        <div class="row pb-5">
          <div class="col-lg-4 col-md-6">
            <div class="navbar-brand ${titleAdditionalClasses} p-0 me-0 mb-3 mb-lg-4">
              ${companyData.fullName}
            </div>
            <p class="fs-sm ${textAdditionalClasses} opacity-70 pb-lg-3 mb-4">${this.i18n(companyData.summaryParagraphI18nKey)}</p>
            <p class="fs-sm ${textAdditionalClasses} opacity-70">${companyData.contacts.address}<br/>(VAT Code) P.IVA ${companyData.vatCode}</p>
            <form id="footer-form" class="needs-validation" novalidate   method="POST" action="${contactFormUrl}">
              <input type="hidden" name="subject" value="Nexxoxp.com - Iscrizione da footer"/>
              <input type="hidden" name="name" value="Utente anonimo"/>
              <input type="hidden" name="message" value="Richiedo di essere aggiornato"/>
              <label for="subscr-email" class="form-label">${this.i18n('generic.footer.subscribeForm.title')}</label>
              <div class="input-group">
                <input type="email" name="email" id="subscr-email" class="form-control rounded-start ps-5" placeholder="Email" required>
                <i class="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
                <div class="invalid-tooltip position-absolute top-100 start-0">${this.i18n('generic.footer.subscribeForm.validationWrongEmail')}</div>
                <button type="submit" class="btn btn-primary">
                    <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                    <span>${this.i18n('generic.footer.subscribeForm.cta')}</span>
              </button>
              </div>
            </form>
            <div id="footer-form-done" class="col-lg-6 col-md-7 offset-xl-1" style="display: none;">
              <p class="fs-sm ${textAdditionalClasses}">${this.i18n('generic.footer.subscribeForm.thankYouMessage')}</p>
            </div>
            ${includeFormScript(this.i18n, 'footer-form', 'footerForm')}
          </div>
          <div class="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" class="row">
              <div class="col-lg-4">
                <h6 class="mb-2">
                  <a href="#useful-links" class="d-block ${titleAdditionalClasses} dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">${this.i18n('generic.footer.linkAccordion.title')}</a>
                </h6>
                <div id="useful-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul class="nav flex-column pb-lg-1 mb-lg-3">
                    <li class="nav-item"><a href="${this.i18n('pagesUrl.homepage')}" class="nav-link d-inline-block px-0 pt-1 pb-2">${this.i18n('pagesUrl.homepage.linkName')}</a></li>
                    <li class="nav-item"><a href="${this.i18n('pagesUrl.homepage.whoWeAreSection')}" class="nav-link d-inline-block px-0 pt-1 pb-2">${this.i18n('pagesUrl.homepage.whoWeAreSection.linkName')}</a></li>
                    <li class="nav-item"><a href="${this.i18n('pagesUrl.homepage.whatWeDoSection')}" class="nav-link d-inline-block px-0 pt-1 pb-2">${this.i18n('pagesUrl.homepage.whatWeDoSection.linkName')}</a></li>
                    <li class="nav-item"><a href="${this.i18n('pagesUrl.sectors')}" class="nav-link d-inline-block px-0 pt-1 pb-2">${this.i18n('pagesUrl.sectors.linkName')}</a></li>
                    <li class="nav-item"><a href="${this.i18n('pagesUrl.homepage.howWeWorkSection')}" class="nav-link d-inline-block px-0 pt-1 pb-2">${this.i18n('pagesUrl.homepage.howWeWorkSection.linkName')}</a></li>
                  </ul>
                  <ul class="nav flex-column mb-2 mb-lg-0">
                    <li class="nav-item"><a href="${this.i18n('pagesUrl.privacyPolicy')}" class="nav-link d-inline-block px-0 pt-1 pb-2">${this.i18n('pagesUrl.privacyPolicy.linkName')}</a></li>
                    <!-- START Iubenda cookie preferences -->
                    <script>
                        function openIubendaPreferences(){
                            _iub.cs.api.openPreferences();
                        }
                    </script>
                    <li class="nav-item"><a onclick="openIubendaPreferences()" class="nav-link d-inline-block px-0 pt-1 pb-2">${this.i18n('generic.footer.cookiePreferences')}</a></li>
                    <!-- END Iubenda Cookie Preferences -->
                  </ul>
                </div>
              </div>
              ${getSocialLinksComponent(this.i18n, titleAdditionalClasses, companyData)}
              <div class="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 class="mb-2">${this.i18n('generic.footer.contactsSection.title')}</h6>
                <a href="mailto:${companyData.contacts.info}" class="fw-medium">${companyData.contacts.info}</a>
                <p class="fs-sm ${textAdditionalClasses} opacity-70">Tel: ${companyData.contacts.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <p class="fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span class="${textAdditionalClasses} opacity-50">&copy; 2022 ${companyData.fullName} | P.IVA ${companyData.vatCode} | ${this.i18n('generic.allRightsReserved')}</span>
        </p>
      </div>
    </footer>
   
    <!-- START Back to top button -->
    <a href="#top" class="btn-scroll-top" data-scroll>
      <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i class="btn-scroll-top-icon bx bx-chevron-up"></i>
    </a>
    <!-- END Back to top button -->`
}

function getSocialLinksComponent(i18nFunction, titleAdditionalClasses, companyData)
{
    const linkedinItem = companyData.linkedin ? `<li class="nav-item"><a href="${companyData.linkedin}" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a></li>` : ''
    const facebookItem = companyData.facebook ? `<li class="nav-item"><a href="${companyData.facebook}" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a></li>` : ''
    const instagramItem = companyData.instagram ? `<li class="nav-item"><a href="${companyData.instagram}" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>` : ''
    const tiktokItem = companyData.tiktok ? `<li class="nav-item"><a href="${companyData.tiktok}" class="nav-link d-inline-block px-0 pt-1 pb-2">TikTok</a></li>` : ''

    return `<div class="col-xl-4 col-lg-3">
                <h6 class="mb-2">
                  <a href="#social-links" class="d-block ${titleAdditionalClasses} dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">${i18nFunction('generic.footer.socialAccordion.title')}</a>
                </h6>
                <div id="social-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul class="nav flex-column mb-2 mb-lg-0">
                    ${linkedinItem}
                    ${facebookItem}
                    ${instagramItem}
                    ${tiktokItem}
                  </ul>
                </div>
              </div>`
}
