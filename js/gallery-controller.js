'use strict'


function onInit() {
    restartPage()

    console.log('Lets make meme!')
    renderGallery()
}

function renderGallery() {

    const elImgContainer = document.querySelector('.imgs-container')
    const imgs = getImgs()
    const strHTMLs = imgs.map(img => `
    <img src="${img.url}" alt="${img.id} class="meme-img"
    onclick="onInitCanvas(${img.id})" ">`).join('')
    elImgContainer.classList.display = 'none'
    elImgContainer.innerHTML = strHTMLs
}

function restartPage() {
    // window.location.reload()
    document.querySelector('.txt-color-input').value = "#ffffff"
    document.getElementById('text-input').value = ''

    document.querySelector('.imgs-container').style.display = 'grid'
    document.querySelector('.about-container').style.display = 'flex'
    document.querySelector('.search-bar').style.display = 'flex'
    document.querySelector('.meme-editor-container').style.display = 'none'
}

function onSetFilterBy(filterBy, el) {
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    el.style.fontSize = (currentSize + 1) + 'px';


    setFilterBy( )
}