'use strict'


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getImgById(imgId) {
    const img = gImgs.find(img => img.id === imgId)
    return img
}

function drawText(text, x, y, size, color) {

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.font = `impact ${size}`


    gCtx.fillText(text)
    gCtx.stroke()

}

function drawImg(img) {
    const elImg = new Image()
    elImg.src = img.url
    gCtx.drawImg(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}