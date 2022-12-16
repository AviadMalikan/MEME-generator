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
    // restartMems()

    document.querySelector('.txt-color-input').value = "#ffffff"
    document.getElementById('text-input').value = ''

    document.querySelector('.imgs-container').style.display = 'grid'
    document.querySelector('.about-container').hidden = false
    document.querySelector('.search-bar').style.display = 'flex'
    document.querySelector('.meme-editor-container').style.display = 'none'

}