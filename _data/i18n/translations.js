const homeTranslations = require("./home");
const marketingTranslations = require("./marketing");
const technologyTranslations = require("./technology");
const advisoryTranslations = require("./advisory")
const sectorsTranslations = require("./sectors");
const contactUsTranslations = require("./contact-us");
const genericTranslations = require("./generic");
const pagesUrl = require("./pages-url");

module.exports = {
    home: homeTranslations,
    marketing: marketingTranslations,
    technology: technologyTranslations,
    advisory: advisoryTranslations,
    sectors: sectorsTranslations,
    contactUs: contactUsTranslations,
    generic: genericTranslations,
    pagesUrl: pagesUrl,
}
