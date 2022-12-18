'use strict'


function onInit() {
    onRestartPage()
    console.log('Lets make meme!')
    renderGallery()
}

function renderGallery() {
    const elImgContainer = document.querySelector('.imgs-container')
    const imgs = getImgs()

    var strHTMLs
    if (imgs.length === 0) {
        strHTMLs = `<h2> Try to be more specific </h2>`
    } else {
        strHTMLs = imgs.map(img => `
        <img src="${img.url}" alt="${img.id} class="meme-img"
        onclick="onInitCanvas(${img.id})" ">`).join('')
    }
    elImgContainer.classList.display = 'none'
    elImgContainer.innerHTML = strHTMLs
}

function onRestartPage() {
    // window.location.reload()
    document.querySelector('.txt-color-input').value = "#ffffff"
    document.getElementById('text-input').value = ''
    document.querySelector('.search-input').value = ''

    document.querySelector('.imgs-container').style.display = 'grid'
    document.querySelector('.about-container').style.display = 'flex'
    document.querySelector('.search-bar').style.display = 'flex'
    document.querySelector('.meme-editor-container').style.display = 'none'
    resetMemes()
    resetFilter()
    renderGallery()
}

function onSetFilterBy(filterBy, el) {
    setFilterBy(filterBy)
    renderGallery()
    if (el) {
        const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        const currentSize = parseFloat(style);
        const maxFontSize = (screen.width < 700) ? 18 : 30
        if (currentSize >= maxFontSize) return
        el.style.fontSize = (currentSize + 2) + 'px';
    }
}

function onToggleNav() {
    document.body.classList.toggle('menu-open')
}

