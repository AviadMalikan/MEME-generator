'use strict'

let gElCanvas
let gCtx

function onInitCanvas(imgId) {
    const elImgContainer = document.querySelector('.imgs-container')
    elImgContainer.style.display = 'none'

    const elMemeSection = document.querySelector('.meme-editor-container')
    elMemeSection.style.display = 'flex'

    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    onGetMeme(imgId)

    addListeners()
}

function renderMeme() {
    const elContainer = document.querySelector('.meme-editor-container')
    gElCanvas.width = elContainer.offsetWidth / 2
    gElCanvas.height = gElCanvas.width

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
    updateCurrImg(imgId)
    drawMeme(img)
    renderMeme()
}

function onSetLineTxt(val) {
    if (val === ' ') return
    updateCurrText(val)
    renderMeme()
}

function onAddLine() {
    addLine()
    document.getElementById('text-input').value = ''
    document.getElementById('text-input').placeholder = 'Enter text here '
    renderMeme()
}

function onRemoveLine() {
    const line = removeLine()
    const currLine = getSelectedLine()
    console.log('line: ', line)
    
    if (!line) alert('You Cant Remove More!')
    document.getElementById('text-input').value = currLine.txt
    renderMeme()
}

function onSetLine() {
    const line = setLine()
    if (!line) alert('You need to add line first!')
    const currLine = getSelectedLine()
    document.getElementById('text-input').value = currLine.txt
}

function drawMeme(img) {
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        gMeme.lines.forEach((line, idx) => drawText(line, idx))
    }
}