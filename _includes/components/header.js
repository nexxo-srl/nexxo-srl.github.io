module.exports = async function (data) {
    return `
<!-- Navbar -->
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->
      <header class="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
        <div class="container px-3">
          <a href="${this.i18n('pagesUrl.homepage')}" class="navbar-brand pe-3">
            <img src="/assets/img/logo.svg" width="120" alt="Nexxo">
          </a>
          <div id="navbarNav" class="offcanvas offcanvas-end">
            <div class="offcanvas-header border-bottom">
              <h5 class="offcanvas-title">Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                  <a href="${this.i18n('pagesUrl.homepage.sectionWhoWeAre')}" class="nav-link">Chi siamo</a>
                </li>
                <li class="nav-item dropdown">
                  <a href="${this.i18n('pagesUrl.homepage.sectionWhatWeDo')}" class="nav-link dropdown-toggle">Cosa proponiamo</a>
                  <div class= "dropdown-menu">
                    <ul class="list-unstyled">
                      <li>
                        <a href="${this.i18n('pagesUrl.marketingAndCommunication')}" class="dropdown-item">Marketing e Comunicazione</a>                  
                      </li>
                      <li>
                      <a href="${this.i18n('pagesUrl.informationTechnology')}" class="dropdown-item">Tecnologie Informatiche</a>                  
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="${this.i18n('pagesUrl.sectors')}" class="nav-link">Settori</a>
                </li>
                <li class="nav-item">
                  <a href="${this.i18n('pagesUrl.homepage.sectionHowWeWork')}" class="nav-link">Come lavoriamo</a>
                </li>
              </ul>
            </div>
            <div class="offcanvas-footer border-top">     
            </div>
          </div>
          <!--div class="form-check form-switch mode-switch pe-lg-1 ms-auto me-4" data-bs-toggle="mode">
            <input type="checkbox" class="form-check-input" id="theme-mode">
            <label class="form-check-label d-none d-sm-block" for="theme-mode">Light</label>
            <label class="form-check-label d-none d-sm-block" for="theme-mode">Dark</label>
          </div-->
          <button type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
            <i class="bx bx-phone fs-5 lh-1 me-1"></i>
            &nbsp;Contattaci
          </a>
        </div>
      </header>
`
}
