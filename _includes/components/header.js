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
              <h5 class="offcanvas-title">${this.i18n('generic.header.menu.title')}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                  <a href="${this.i18n('pagesUrl.homepage.whoWeAreSection')}" class="nav-link">${this.i18n('pagesUrl.homepage.whoWeAreSection.linkName')}</a>
                </li>
                
                <li class="nav-item dropdown">
                  <a href="${this.i18n('pagesUrl.homepage.whatWeDoSection')}" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${this.i18n('pagesUrl.homepage.whatWeDoSection.linkName')}</a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="${this.i18n('pagesUrl.marketingAndCommunication')}" class="dropdown-item">${this.i18n('pagesUrl.marketingAndCommunication.linkName')}</a>                  
                      </li>
                      <li>
                        <a href="${this.i18n('pagesUrl.informationTechnology')}" class="dropdown-item">${this.i18n('pagesUrl.informationTechnology.linkName')}</a>                  
                      </li>
                    </ul>
                </li>
                
                <li class="nav-item">
                  <a href="${this.i18n('pagesUrl.sectors')}" class="nav-link">${this.i18n('pagesUrl.sectors.linkName')}</a>
                </li>
                
                <li class="nav-item">
                  <a href="${this.i18n('pagesUrl.homepage.howWeWorkSection')}" class="nav-link">${this.i18n('pagesUrl.homepage.howWeWorkSection.linkName')}</a>
                </li>
                
              </ul>
            </div>
            <div class="offcanvas-footer border-top">
                <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-Fprimary w-100">
                    <i class="bx bx-phone fs-5 lh-1 me-1"></i>
                    &nbsp;${this.i18n('pagesUrl.contactUs.linkName')}
                </a>     
            </div>
          </div>
          
          <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${this.i18n('pagesUrl.languageSwitch.label')}</a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="${this.i18n('pagesUrl.languageSwitch.otherLanguageUrl')}" class="dropdown-item">${this.i18n('pagesUrl.languageSwitch.otherLanguageLabel')}</a>                  
                  </li>
                </ul>
          </div>
          
          <button type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
            <i class="bx bx-phone fs-5 lh-1 me-1"></i>
            &nbsp;${this.i18n('pagesUrl.contactUs.linkName')}
          </a>
        </div>
      </header>
`
}
