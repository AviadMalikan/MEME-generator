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
    restartMems()
    document.querySelector('.txt-color-input').value = "#ffffff"
    document.getElementById('text-input').value = ''
    const elImgContainer = document.querySelector('.imgs-container')
    elImgContainer.style.display = 'grid'

    const elMemeEditor = document.querySelector('.meme-editor-container')
    elMemeEditor.style.display = 'none'
}