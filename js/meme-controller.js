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
    flashMsg('Text Update')
}

function onAddLine() {
    addLine()
    document.getElementById('text-input').value = ''
    document.getElementById('text-input').placeholder = 'Enter text here '
    renderMeme()
    flashMsg('New line added')
}

function onRemoveLine() {
    const line = removeLine()
    const currLine = getSelectedLine()

    if (!line) {
        flashMsg('You Cant Remove More!')
    } else {
        document.getElementById('text-input').value = currLine.txt
        flashMsg('Line delete')
    }
    renderMeme()
}

function onSetLine() {
    const line = setLine()
    if (!line) return flashMsg('You need to add line first!')
    const currLine = getSelectedLine()
    document.getElementById('text-input').value = currLine.txt
    flashMsg('Line Set')
}

function drawMeme(img) {
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        gMeme.lines.forEach((line, idx) => drawText(line, idx))
    }
}


function flashMsg(msg) {
    const el = document.querySelector('.user-msg')
    el.innerText = msg
    el.classList.add('open')
    setTimeout(() => {
        el.classList.remove('open')
    }, 3000)
}