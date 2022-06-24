module.exports = async function (data) {
    const footerAdditionalClasses = data.isWhiteFooter ? '' : 'dark-mode bg-dark'
    const titleAdditionalClasses = data.isWhiteFooter ? '' : 'text-dark'
    const textAdditionalClasses = data.isWhiteFooter ? '' : 'text-light'

    return ` <footer class="footer ${footerAdditionalClasses} pt-5 pb-4 pb-lg-5">
      <div class="container pt-lg-4">
        <div class="row pb-5">
          <div class="col-lg-4 col-md-6">
            <div class="navbar-brand ${titleAdditionalClasses} p-0 me-0 mb-3 mb-lg-4">
              Nexxo Cross Platform S.r.l.
            </div>
            <p class="fs-sm ${textAdditionalClasses} opacity-70 pb-lg-3 mb-4">Siamo un'agenza digitale Start-Up che aiuta a sviuluppare le attività commerciali dei propri clienti. Ci proponiamo come partner tecnologico principale alle aziende industriali che hanno bisogno di sviluppare la propria competitività attraverso la trasfromazione digitale.</p>
            <p class="fs-sm ${textAdditionalClasses} opacity-70">Via E. Cairoli 5, 21100 Varese (VA) - ITALY<br/>(VAT Code) P.IVA 03799860121</p>
            <form class="needs-validation" novalidate>
              <label for="subscr-email" class="form-label">Iscriviti per ricevere ulteriori informazioni</label>
              <div class="input-group">
                <input type="email" id="subscr-email" class="form-control rounded-start ps-5" placeholder="Email" required>
                <i class="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
                <div class="invalid-tooltip position-absolute top-100 start-0">La tua email.</div>
                <button type="submit" class="btn btn-primary">Iscriviti</button>
              </div>
            </form>
          </div>
          <div class="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" class="row">
              <div class="col-lg-4">
                <h6 class="mb-2">
                  <a href="#useful-links" class="d-block ${titleAdditionalClasses} dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Useful Links</a>
                </h6>
                <div id="useful-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul class="nav flex-column pb-lg-1 mb-lg-3">
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Chi Siamo</a></li>
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Cosa Proponiamo</a></li>
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Settori</a></li>
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Come Lavoriamo</a></li>
                  </ul>
                  <ul class="nav flex-column mb-2 mb-lg-0">
                    <li class="nav-item"><a href="#" class="nav-link d-inline-block px-0 pt-1 pb-2">Informativa Privacy</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-3">
                <h6 class="mb-2">
                  <a href="#social-links" class="d-block ${titleAdditionalClasses} dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Socials</a>
                </h6>
                <div id="social-links" class="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul class="nav flex-column mb-2 mb-lg-0">
                    <li class="nav-item"><a href="https://www.linkedin.com/company/nexxo-cross-platform-s-r-l/" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a></li>
                    <li class="nav-item"><a href="https://www.facebook.com/nexxocrossplatform" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a></li>
                    <li class="nav-item"><a href="https://www.instagram.com/nexxocrossplatform/" target="_blank" class="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>
                    <li class="nav-item"><a href="https://www.tiktok.com/@nexxocrossplatform" class="nav-link d-inline-block px-0 pt-1 pb-2">TikTok</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 class="mb-2">Contattaci</h6>
                <a href="mailto:email@example.com" class="fw-medium">info@nexxoxp.com</a>
                <p class="fs-sm text-light opacity-70">Tel: +39 0332 158 0443</p>
              </div>
            </div>
          </div>
        </div>
        <p class="fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span class="${textAdditionalClasses} opacity-50">&copy; 2022 Nexxo Cross Platform S.r.l. | P.IVA 03799860121 | Tutti i diritti sono riservati.</span>
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
