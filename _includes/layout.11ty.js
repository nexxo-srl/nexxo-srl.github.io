const header = require('./components/header')
const footer = require('./components/footer')

const lazyCssLink = (href, media) => {
    return `<link rel="preload" as="style" type="text/css" media="${media}" href="${href}" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" type="text/css" media="${media}" href="${href}"></noscript>`
}

module.exports = async function (data) {
    const canonical = `${data.nexxo.domain}${data.page.url}`
    const facebookVerification = ''
    const tagManagerId = ''

    const [headerContent, footerContent] = await Promise.all([
        (async () => data.hideHeader ? '' : await header.call(this, data))(),
        (async () => data.hideFooter ? '' : await footer.call(this, data))(),
    ])

    return `
        <!doctype html>
        <html lang="${data.locale}" dir="${data.dir}">
            <head>
                <meta charset="utf-8">
                <title>${data.pageTitle}</title>
                
                <!-- SEO Meta Tags -->
                <meta name="description" content="${data.pageDescription}">
                <meta name="author" content="${data.author}">
                
                <!-- Viewport -->
                <meta name="viewport" content="width=device-width, initial-scale=1">
                ${data.additionalMeta ? data.additionalMeta : ''}

                <!-- Favicon and Touch Icons -->
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
                <link rel="manifest" href="/assets/favicon/site.webmanifest">
                <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#6366f1">
                <link rel="shortcut icon" href="/assets/favicon/favicon.ico">
                <meta name="msapplication-TileColor" content="#080032">
                <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml">
                <meta name="theme-color" content="#ffffff">
                         
                <!-- Vendor Styles -->      
                ${lazyCssLink('/assets/vendor/boxicons/css/boxicons.min.css', 'screen')}
                ${lazyCssLink('/assets/vendor/swiper/swiper-bundle.min.css', 'screen')}
                ${lazyCssLink('/assets/vendor/animate/animate.min.css', 'screen')}
                ${lazyCssLink('/assets/vendor/aos/aos.css', 'screen')}
                ${lazyCssLink('/assets/vendor/font-awesome/css/all.min.css', 'screen')}
                ${lazyCssLink('/assets/vendor/glightbox/css/glightbox.css', 'screen')}
                ${lazyCssLink('/assets/vendor/themify-icons/css/themify-icons.css', 'screen')}
              
                <!-- Main Theme Styles + Bootstrap -->               
                ${lazyCssLink('/assets/css/theme.min.css', 'all')}
                
                <!-- Page loading styles -->
                <style>
                  .page-loading {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    -webkit-transition: all .4s .2s ease-in-out;
                    transition: all .4s .2s ease-in-out;
                    background-color: #fff;
                    opacity: 0;
                    visibility: hidden;
                    z-index: 9999;
                  }
                  .dark-mode .page-loading {
                    background-color: #131022;
                  }
                  .page-loading.active {
                    opacity: 1;
                    visibility: visible;
                  }
                  .page-loading-inner {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    -webkit-transition: opacity .2s ease-in-out;
                    transition: opacity .2s ease-in-out;
                    opacity: 0;
                  }
                  .page-loading.active > .page-loading-inner {
                    opacity: 1;
                  }
                  .page-loading-inner > span {
                    display: block;
                    font-size: 1rem;
                    font-weight: normal;
                    color: #9397ad;
                  }
                  .dark-mode .page-loading-inner > span {
                    color: #fff;
                    opacity: .6;
                  }
                  .page-spinner {
                    display: inline-block;
                    width: 2.75rem;
                    height: 2.75rem;
                    margin-bottom: .75rem;
                    vertical-align: text-bottom;
                    border: .15em solid #b4b7c9;
                    border-right-color: transparent;
                    border-radius: 50%;
                    -webkit-animation: spinner .75s linear infinite;
                    animation: spinner .75s linear infinite;
                  }
                  .dark-mode .page-spinner {
                    border-color: rgba(255,255,255,.4);
                    border-right-color: transparent;
                  }
                  @-webkit-keyframes spinner {
                    100% {
                      -webkit-transform: rotate(360deg);
                      transform: rotate(360deg);
                    }
                  }
                  @keyframes spinner {
                    100% {
                      -webkit-transform: rotate(360deg);
                      transform: rotate(360deg);
                    }
                  }
                </style>

                <!-- Theme mode -->
                <script>
                  let mode = window.localStorage.getItem('mode'),
                      root = document.getElementsByTagName('html')[0];
                  if (mode !== undefined && mode === 'dark') {
                    root.classList.add('dark-mode');
                  } else {
                    root.classList.remove('dark-mode');
                  }
                </script>

                <!-- Page loading scripts -->
                <script>
                  (function () {
                    window.onload = function () {
                      const preloader = document.querySelector('.page-loading');
                      preloader.classList.remove('active');
                      setTimeout(function () {
                        preloader.remove();
                      }, 1000);
                    };
                  })();
                </script>
            </head>
            
            <!-- Body -->
            <body>
                <!-- Page loading spinner -->
                <div class="page-loading active">
                  <div class="page-loading-inner">
                    <div class="page-spinner"></div><span>Loading...</span>
                  </div>
                </div>

                <main class="page-wrapper">
                    ${headerContent}
                    ${data.content}
                </main>                
                ${footerContent}
                
                <!-- Back to top button -->
                <a href="#top" class="btn-scroll-top" data-scroll>
                  <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
                  <i class="btn-scroll-top bx bx-chevron-up"></i>
                </a>

                <!-- Vendor Scripts -->
                <script defer src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script defer src="/assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.js"></script>
                <script defer src="/assets/vendor/jarallax/dist/jarallax.min.js"></script>
                <script defer src="/assets/vendor/parallax-js/dist/parallax.min.js"></script>
                <script defer src="/assets/vendor/rellax/dist/rellax.min.js"></script>
                <script defer src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
    
                <!-- Main Theme Script -->
                <script defer src="/assets/js/theme.min.js"></script>
            </body>          
        </html>`
}
