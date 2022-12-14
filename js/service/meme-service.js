'use strict'


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter Text here',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getCurrImg() {
    return getImgById(gMeme.selectedImgId)

}

function getImgById(imgId) {
    const img = gImgs.find(img => img.id === imgId)
    return img
}

function updateCurrImg(img) {
    gMeme.selectedImgId = img.id
}

function updateCurrText(txt) {
    gMeme.lines[0].txt = txt
}

function drawText(text, size = 35, color = 'white', x = gElCanvas.width / 2, y = 50) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color

    gCtx.font = `900 ${size}px arial`;
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y)
}


function drawMeme(img) {
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(gMeme.lines[0].txt)
    }
}