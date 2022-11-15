module.exports = async function (data) {

    const isHomePage = data.eleventyNavigation.key === 'home';

    const whoWeAreSectionResponsiveLink = isHomePage
        ? `<a class="nav-link drawer-item" onclick="collapseMenu('${this.i18n('pagesUrl.homepage.whoWeAreSection')}')">${this.i18n('pagesUrl.homepage.whoWeAreSection.linkName')}</a>`
        : `<a href="${this.i18n('pagesUrl.homepage.whoWeAreSection')}" class="nav-link drawer-item">${this.i18n('pagesUrl.homepage.whoWeAreSection.linkName')}</a>`

    const howWeWorkSectionResponsiveLink = isHomePage
        ? `<a class="nav-link drawer-item" onclick="collapseMenu('${this.i18n('pagesUrl.homepage.howWeWorkSection')}')">${this.i18n('pagesUrl.homepage.howWeWorkSection.linkName')}</a>`
        : `<a href="${this.i18n('pagesUrl.homepage.howWeWorkSection')}" class="nav-link drawer-item">${this.i18n('pagesUrl.homepage.howWeWorkSection.linkName')}</a>`


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

                <script>const collapseMenu = function (linkToNavigate){
                    document.getElementsByClassName('navbar-toggler')[0].click(); 
                    setTimeout(function() {
                        window.location = linkToNavigate;
                    }, 500);                    
                }
                </script>

                <li class="nav-item">
                  ${whoWeAreSectionResponsiveLink}
                  <a href="${this.i18n('pagesUrl.homepage.whoWeAreSection')}" class="nav-link header-item">${this.i18n('pagesUrl.homepage.whoWeAreSection.linkName')}</a>
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
                      <li>
                        <a href="${this.i18n('pagesUrl.advisory')}" class="dropdown-item">${this.i18n('pagesUrl.advisory.linkName')}</a>                  
                      </li>
                    </ul>
                </li>
                
                <li class="nav-item">
                  <a href="${this.i18n('pagesUrl.sectors')}" class="nav-link">${this.i18n('pagesUrl.sectors.linkName')}</a>
                </li>
                
                <li class="nav-item">
                  ${howWeWorkSectionResponsiveLink}
                  <a href="${this.i18n('pagesUrl.homepage.howWeWorkSection')}" class="nav-link header-item">${this.i18n('pagesUrl.homepage.howWeWorkSection.linkName')}</a>
                </li>
                
              </ul>
            </div>
            <div class="offcanvas-footer border-top">
                <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary w-100">
                    <i class="bx bx-phone fs-5 lh-1 me-1"></i>
                    &nbsp;${this.i18n('pagesUrl.contactUs.linkName')}
                </a>     
            </div>
          </div>
          
          <!-- Language Switch -->
          <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${this.i18n('pagesUrl.languageSwitch.label')}</a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="${this.i18n('pagesUrl.languageSwitch.otherLanguageUrl')}" class="dropdown-item">${this.i18n('pagesUrl.languageSwitch.otherLanguageLabel')}</a>                  
                  </li>
                </ul>
          </div>
          
          <!-- Mobile Menu CTA -->
          <button type="button" class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <!-- Mobile Menu CTA -->
          <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
            <i class="bx bx-phone fs-5 lh-1 me-1"></i>
            &nbsp;${this.i18n('pagesUrl.contactUs.linkName')}
          </a>
        </div>
      </header>
`
}
