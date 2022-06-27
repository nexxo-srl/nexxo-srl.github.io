module.exports = async function (data) {
    const footerAdditionalClasses = data.isWhiteFooter ? '' : 'dark-mode bg-dark'
    const titleAdditionalClasses = data.isWhiteFooter ? '' : 'text-dark'
    const textAdditionalClasses = data.isWhiteFooter ? '' : 'text-light'
    const recaptchaClientKey = '6Ldlg5kgAAAAACt717ealB2V2KO-T6XuuTwzfOTB'
    const contactFormUrl = 'https://us-central1-nexxoxp-website.cloudfunctions.net/contactUs'


    return ` <footer class="footer ${footerAdditionalClasses} pt-5 pb-4 pb-lg-5">
      <div class="container pt-lg-4">
        <div class="row pb-5">
          <div class="col-lg-4 col-md-6">
            <div class="navbar-brand ${titleAdditionalClasses} p-0 me-0 mb-3 mb-lg-4">
              ${data.nexxo.fullName}
            </div>
            <p class="fs-sm ${textAdditionalClasses} opacity-70 pb-lg-3 mb-4">${this.i18n('generic.footer.summaryParagraph')}</p>
            <p class="fs-sm ${textAdditionalClasses} opacity-70">${data.nexxo.contacts.address}<br/>(VAT Code) P.IVA ${data.nexxo.vatCode}</p>
            <form id="contact-form" class="needs-validation" novalidate   method="POST" action="${contactFormUrl}">
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
            <div id="contact-form-done" class="col-lg-6 col-md-7 offset-xl-1" style="display: none;">
              <p class="fs-sm ${textAdditionalClasses}">${this.i18n('generic.footer.subscribeForm.thankYouMessage')}</p>
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
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">${this.i18n('generic.footer.privacyPolicy')}</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-3">
                <h6 class="mb-2">
                  <a href="#social-links" class="d-block ${titleAdditionalClasses} dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">${this.i18n('generic.footer.socialAccordion.title')}</a>
                </h6>
                <div id="social-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul class="nav flex-column mb-2 mb-lg-0">
                    <li class="nav-item"><a href="${data.nexxo.linkedin}" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a></li>
                    <li class="nav-item"><a href="${data.nexxo.facebook}" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a></li>
                    <li class="nav-item"><a href="${data.nexxo.instagram}" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>
                    <li class="nav-item"><a href="${data.nexxo.tiktok}" class="nav-link d-inline-block px-0 pt-1 pb-2">TikTok</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 class="mb-2">${this.i18n('generic.footer.contactsSection.title')}</h6>
                <a href="mailto:email@example.com" class="fw-medium">${data.nexxo.contacts.info}</a>
                <p class="fs-sm ${textAdditionalClasses} opacity-70">Tel: ${data.nexxo.contacts.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <p class="fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span class="${textAdditionalClasses} opacity-50">&copy; 2022 ${data.nexxo.fullName} | P.IVA ${data.nexxo.vatCode} | ${this.i18n('generic.allRightsReserved')}</span>
        </p>
      </div>
    </footer>
    <!-- Back to top -->
    <!-- Back to top button -->
    <a href="#top" class="btn-scroll-top" data-scroll>
      <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i class="btn-scroll-top-icon bx bx-chevron-up"></i>
    </a>`
}
