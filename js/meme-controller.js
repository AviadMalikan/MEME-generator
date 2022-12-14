'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    onGetMeme(1)

    // renderCanvas()
    addListeners()
}

function renderMeme() {
    const elContainer = document.querySelector('.meme-editor-container')
    gElCanvas.width = elContainer.offsetWidth / 2
    gElCanvas.height = elContainer.offsetHeight

    const img = getCurrImg()
    drawMeme(img)
}


function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev
    window.addEventListener('resize', () => {
        renderMeme()
        // renderCanvas()

    })
}

function addMouseListeners() {
    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    // gElCanvas.addEventListener('touchmove', onMove)
    // gElCanvas.addEventListener('touchstart', onDown)
    // gElCanvas.addEventListener('touchend', onUp)
}


function onGetMeme(imgId) {
    const img = getImgById(imgId)
    updateCurrImg(img)
    drawMeme(img)
    // drawText('OLA')
    renderMeme()
}

function onEditText(val) {
    console.log('val: ', val)
    updateCurrText(val)
    renderMeme()

}