'use strict'

let gElCanvas
let gCtx

function onInitCanvas(imgId) {
    const elImgContainer = document.querySelector('.imgs-container')
    elImgContainer.style.display = 'none'

    document.querySelector('.about-container').style.display = 'none'
    document.querySelector('.search-bar').style.display = 'none'

    const elMemeSection = document.querySelector('.meme-editor-container')
    elMemeSection.style.display = 'flex'

    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    onGetMeme(imgId)

    addListeners()
}

function renderMeme() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
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
    var msg = (!line) ? 'You Cant Remove More!' : 'Line deleted'

    document.querySelector('.txt-color-input').value = currLine.color
    document.getElementById('text-input').value = currLine.txt
    renderMeme()
    flashMsg(msg)
}

function onSetLine() {
    const line = setLine()
    if (!line) return flashMsg('You need to add line first!')
    const currLine = getSelectedLine()
    document.querySelector('.txt-color-input').value = currLine.color
    document.getElementById('text-input').value = currLine.txt
    flashMsg('Line Set')
}

function onChangeColor(val) {
    changeColor(val)
    renderMeme()
    flashMsg('Color update')
}

function onIncreaseFont(num) {
    const size = increaseFontSize(num)
    var msg = (!size) ? 'You reach max size' : 'Font size update'
    renderMeme()
    flashMsg(msg)
}

function onDecreaseFont(num) {
    const size = decreaseFontSize(num)
    var msg = (!size) ? 'You reach min size' : 'Font size update'
    renderMeme()
    flashMsg(msg)
}

function onChangeFont(val) {
    changeFont(val)
    renderMeme()
    flashMsg('Font update')
}

function onMoveYLine(num) {
    moveTextOnYLine(num)
    renderMeme()
}

function onMoveXLine(num) {
    moveTextOnXLine(num)
    renderMeme()
}

function drawMeme(img) {
    // updateTextPos()
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderText()
    }
}

function renderText() {
    gMeme.lines.forEach((line, idx) => {
        drawText(line, idx)
    })
}

function flashMsg(msg) {
    const el = document.querySelector('.user-msg')
    el.innerText = msg
    el.classList.add('open')
    setTimeout(() => {
        el.classList.remove('open')
    }, 3000)
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
}

function onAlienCenter() {
    alienTextCenter()
    renderMeme()
}

function onAlienLeft() {
    alienTextLeft()
    renderMeme()
}

function onAlienRight() {
    alienTextRight()
    renderMeme()
}