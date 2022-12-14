'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    // renderCanvas()


    addListeners()
}

function renderCanvas() {
    const elBody = document.body
    // const elContainer = document.querySelector('canvas-editor-container')
    // console.log('elContainer.offsetWidth: ', elContainer.offsetWidth)
    // console.log('gElCanvas: ', gElCanvas)

    gElCanvas.width = elBody.offsetWidth / 2
    gElCanvas.height = elBody.offsetHeight / 2
}


function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev
    window.addEventListener('resize', () => {
        renderCanvas()
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


function onDrawImg(imgId) {
    const img = getImgById(imgId)
    drawImg(img)
    drawText()
}