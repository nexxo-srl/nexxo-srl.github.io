module.exports = function (id) {
    const headerPadding = '75px'
    return `<div style="display: block; position: relative; top: -${headerPadding};visibility: hidden;" id="${id}"></div>`
}
