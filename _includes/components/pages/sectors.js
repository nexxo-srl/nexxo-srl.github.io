const paddedAnchor = require('./utils/paddedAnchor')

module.exports = async function(data)
{
    return `
      <!-- Breadcrumb -->
      <nav class="container py-4 my-lg-3" aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <a href="${this.i18n('pagesUrl.homepage')}"><i class="bx bx-home-alt fs-lg me-1"></i>${this.i18n('pagesUrl.homepage.linkName')}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">${this.i18n('pagesUrl.sectors.linkName')}</li>
        </ol>
      </nav>

      <!-- Portfolio list -->
      <section class="container pb-2 pb-lg-3">

        <!-- Item 01 -->
        ${paddedAnchor(this.i18n('pagesUrl.sectors.industrialSectionId'))}
        <div class="row pb-5 mb-md-4 mb-lg-5">
          <div class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/industrial.jpg', 'Industriale', 'rounded-3', [600], '600w')}   
          </div>
          <div class="rellax col-md-6" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
              <h2 class="h3">${this.i18n('sectors.item01.title')}</h2>
              <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Manufacturing</p>
              <div class="d-lg-block pb-3 mb-2 mb-md-3">              
              ${this.i18n('sectors.item01.paragraph')}
              </div>         
          </div>
        </div>

        <!-- Item 02 -->
        ${paddedAnchor(this.i18n('pagesUrl.sectors.maintenanceSectionId'))}
        <div class="row pb-5 mb-md-4 mb-lg-5">
          <div class="rellax col-md-6 order-md-2 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/02.jpg', 'Manutenzione, tracciabilità e ispezione', 'rounded-3 float-md-end', [600], '600w')}
          </div>
          <div class="rellax col-md-6 order-md-1 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
              <h2 class="h3">${this.i18n('sectors.item02.title')}</h2>
              <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Maintenance</p>
              <div class="d-lg-block pb-3 mb-2 mb-md-3">              
                  ${this.i18n('sectors.item02.paragraph')}
              </div>              
          </div>
        </div>

        <!-- Item 03 -->
        ${paddedAnchor(this.i18n('pagesUrl.sectors.connectivitySectionId'))}
        <div class="row pb-5 mb-md-4 mb-lg-5">
          <div class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/03.jpg', 'Connettività e cybersecurity', 'rounded-3', [600], '600w')}
          </div>
          <div class="rellax col-md-6 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
              <h2 class="h3">${this.i18n('sectors.item03.title')}</h2>
              <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Safety & Security</p>              
              <div class="d-lg-block pb-3 mb-2 mb-md-3">              
                  ${this.i18n('sectors.item03.paragraph')}
              </div>    
          </div>
        </div>

        <!-- Item 04 -->
        ${paddedAnchor(this.i18n('pagesUrl.sectors.safetySectionId'))}
        <div class="row pb-5 mb-md-4 mb-lg-5">
          <div class="rellax col-md-6 order-md-2 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/04.jpg', 'Sicurezza', 'rounded-3 float-md-end', [600], '600w')}           
          </div>
          <div class="rellax col-md-6 order-md-1 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
              <h2 class="h3">${this.i18n('sectors.item04.title')}</h2>
              <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Safety & Security</p>
              <div class="d-lg-block pb-3 mb-2 mb-md-3">              
              ${this.i18n('sectors.item04.paragraph')}
              </div>
          </div>
        </div>

      <!-- Item 05 -->
      ${paddedAnchor(this.i18n('pagesUrl.sectors.insuranceSectionId'))}
      <div class="row pb-5 mb-md-4 mb-lg-5">
        <div class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
            ${await this.image('portfolio/list/05.jpg', 'Assicurativo e finanziario', 'rounded-3', [600], '600w')}
        </div>
        <div class="rellax col-md-6 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
            <h2 class="h3">${this.i18n('sectors.item05.title')}</h2>
            <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Value Services</p>            
            <div class="d-lg-block pb-3 mb-2 mb-md-3">              
              ${this.i18n('sectors.item05.paragraph')}
            </div>   
        </div>
      </div>

      <!-- Item 06 -->
      ${paddedAnchor(this.i18n('pagesUrl.sectors.luxurySectionId'))}
      <div class="row pb-5 mb-md-4 mb-lg-5">
        <div class="rellax col-md-6 order-md-2 pb-1 mb-3 pb-md-0 mb-md-0" data-rellax-percentage="0.5" data-rellax-speed="0.8" data-disable-parallax-down="md">
          ${await this.image('portfolio/list/06.jpg', 'Beni di valore', 'rounded-3 float-md-end', [600], '600w')}
        </div>
        <div class="rellax col-md-6 order-md-1 pt-md-4 pt-lg-5" data-rellax-percentage="0.5" data-rellax-speed="-0.6" data-disable-parallax-down="md">
            <h2 class="h3">${this.i18n('sectors.item06.title')}</h2>
            <p class="d-table badge bg-faded-primary text-primary fs-sm mb-3">Value Services</p>
            <div class="d-lg-block pb-3 mb-2 mb-md-3">              
              ${this.i18n('sectors.item06.paragraph')}
            </div>
        </div>
      </div>
      </section>

      <!-- Contact CTA -->
      <section class="container mb-1 mb-md-3 mb-lg-4">
        <div class="bg-secondary rounded-3 overflow-hidden">
          <div class="row align-items-center">
            <div class="col-xl-4 col-md-5 offset-lg-1">
              <div class="pt-5 pb-3 pb-md-5 px-4 px-lg-0 text-center text-md-start">
                <p class="lead mb-3">${this.i18n('sectors.contactCTA.paragraph')}</p>
                <h2 class="h1 pb-3 pb-sm-4">${this.i18n('sectors.contactCTA.title')}</h2>
                <a href="${this.i18n('pagesUrl.contactUs')}" class="btn btn-primary btn-lg">${this.i18n('sectors.contactCTA.buttonCTA')}</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-7 offset-xl-1">
              <div class="position-relative d-flex flex-column align-items-center justify-content-center h-100">
                <svg class="d-none d-md-block position-absolute top-50 start-0 translate-middle-y" width="868" height="868" style="min-width: 868px;" viewBox="0 0 868 868" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.15" cx="434" cy="434" r="434" fill="#6366F1"/></svg>
                ${await this.image('portfolio/cta.png', 'Illustrazione vettoriale porta il tuo business al livello superiore', 'position-relative zindex-3 mb-2 my-lg-4', [382], '382w')}
              </div>
            </div>
          </div>
        </div>
      </section>`
}
