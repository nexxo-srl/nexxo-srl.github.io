const fs = require('fs')
const path = require('path')
const Image = require('@11ty/eleventy-img')
const navigationPlugin = require('@11ty/eleventy-navigation')
const sitemap = require('@quasibit/eleventy-plugin-sitemap')
const i18n = require('eleventy-plugin-i18n')
const htmlmin = require('html-minifier')
const Nexxo = require('./_data/nexxo')
const translations = require('./_data/i18n/translations')

module.exports = (eleventyConfig) => {
    eleventyConfig
        .addPassthroughCopy('assets')
        .addPassthroughCopy('favicon.ico')
        .addPassthroughCopy('robots.txt')
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/css/all.min.css': 'assets/vendor/font-awesome/css/all.min.css'})
        .addPassthroughCopy({'node_modules/@fortawesome/fontawesome-free/webfonts': 'assets/vendor/font-awesome/webfonts'})
        .addPassthroughCopy({'node_modules/@icon/themify-icons/themify-icons.css': 'assets/vendor/themify-icons/css/themify-icons.css'})
        .addPassthroughCopy({'node_modules/@srexi/purecounterjs/dist': 'assets/vendor/purecounter'})
        .addPassthroughCopy({'node_modules/animate.css/animate.min.css': 'assets/vendor/animate/animate.min.css'})
        .addPassthroughCopy({'node_modules/aos/dist': 'assets/vendor/aos'})
        .addPassthroughCopy({'node_modules/bootstrap/dist': 'assets/vendor/bootstrap'})
        .addPassthroughCopy({'node_modules/boxicons/css/boxicons.min.css': 'assets/vendor/boxicons/css/boxicons.min.css'})
        .addPassthroughCopy({'node_modules/boxicons/fonts': 'assets/vendor/boxicons/fonts'})
        .addPassthroughCopy({'node_modules/glightbox/dist': 'assets/vendor/glightbox'})
        .addPassthroughCopy({'node_modules/ityped/dist': 'assets/vendor/ityped'})
        .addPassthroughCopy({'node_modules/jarallax/dist': 'assets/vendor/jarallax/dist'})
        .addPassthroughCopy({'node_modules/parallax-js/dist': 'assets/vendor/parallax-js/dist'})
        .addPassthroughCopy({'node_modules/smooth-scroll/dist': 'assets/vendor/smooth-scroll/dist'})
        .addPassthroughCopy({'node_modules/swiper': 'assets/vendor/swiper'})

    eleventyConfig.addPlugin(navigationPlugin)
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: Nexxo.domain,
        },
    })
    
    eleventyConfig.addPlugin(i18n, {
        translations,
        fallbackLocales: {
            '*': 'it'
        }
    })

    eleventyConfig.addFilter('image', async (url, altText, cssClasses, widths = [null], sizes = '') => {
        if (!url) {
            return ''
        }
        url = url.startsWith('http') ? url : `assets/img/${url}`

        const metadata = await Image(url, {
            formats: ['webp', null],
            widths: widths,
            urlPath: '/assets/img',
            outputDir: './_site/assets/img',
            filenameFormat: (id, src, width, format, options) => {
                const extension = path.extname(src)
                const name = path.basename(src, extension)
                fs.mkdirSync(`${options.outputDir}/${name}`, {recursive: true})
                return `${name}/${id}-${width}w.${format}`
            },
        })

        return Image.generateHTML(metadata, {
            alt: altText || '',
            loading: 'lazy',
            decoding: 'async',
            sizes: sizes,
            class: cssClasses,
        })
    })

    eleventyConfig.addTransform('html-minifier', function (content) {
        if (this.outputPath && this.outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true,
            })
        }

        return content
    })

    eleventyConfig.addWatchTarget('./assets')
    eleventyConfig.addWatchTarget('./js')
    eleventyConfig.on('beforeWatch', () => {
        // Delete node.js require cache to enable changed components js reload
        Object.keys(require.cache).forEach(key => {
            delete require.cache[key]
        })
    })
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware('*', (req, res) => {
                    // Handle 404 page when running in serve/dev mode
                    const page404content = fs.readFileSync('_site/404.html')
                    res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'})
                    res.write(page404content)
                    res.end()
                })
            },
        },
    })

    return {
        passthroughFileCopy: true,
    }
}
