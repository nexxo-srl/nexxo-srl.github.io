module.exports = class {
    data() {
        return {
            layout: 'layout.11ty.js',
            pageTitle: 'Not Found | Nexxo Cross Platform',
            pageDescription: '',
            // Force output page to be /404.html instead of /404/index.html!
            permalink: '/404.html',
            eleventyExcludeFromCollections: true,
            eleventyNavigation: {
                title: 'Pagina non trovata!'
            },
            hideHeader: true,
            hideFooter: true
        }
    }

    render(data) {
        return `<main class="page-wrapper">

      <!-- BG  -->
      <div class="d-dark-mode-none position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center bg-size-cover" style="background-image: url(/assets/img/404/bg.jpg);"></div>
      
      <!-- Page content -->
      <section class="container d-flex flex-column h-100 align-items-center position-relative zindex-5 pt-5">
        <div class="text-center pt-5 pb-3 mt-auto">

          <!-- Parallax gfx (Light version) -->
          <div class="parallax mx-auto d-dark-mode-none" style="max-width: 574px;">
            <div class="parallax-layer" data-depth="-0.15">
              <img src="/assets/img/404/layer01.png" alt="Layer">
            </div>
            <div class="parallax-layer" data-depth="0.12">
              <img src="/assets/img/404/layer02.png" alt="Layer">
            </div>
            <div class="parallax-layer zindex-5" data-depth="-0.12">
              <img src="/assets/img/404/layer03.png" alt="Layer">
            </div>
          </div>

          <h1 class="visually-hidden">404</h1>
          <h2 class="display-5">Ooops!</h2>
          <p class="fs-xl pb-3 pb-md-0 mb-md-5">${this.i18n('notFound.mainMessage')}</p>
          <a href="${this.i18n('pagesUrl.homepage')}" class="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
            <i class="bx bx-home-alt me-2 ms-n1 lead"></i>
            ${this.i18n('notFound.goToHome')}            
          </a>
        </div>

        <div class="text-center py-lg-5 py-4 mt-auto">
          <p class="fs-sm pt-3 pt-lg-0 mb-0">
            <span class="opacity-75">&copy; 2022 ${data.nexxo.fullName} | P.IVA ${data.nexxo.vatCode} | ${this.i18n('notFound.rightsReserved')}</span> 
          </p>
        </div>  
      </section>
    </main>`
    }
}
