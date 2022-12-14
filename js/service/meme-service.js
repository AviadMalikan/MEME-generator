'use strict'


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
];
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter Text here',
            size: 50,
            align: 'left',
            color: 'white'
        }
    ]
}

function restartMems() {

}

function setLine() {
    if (gMeme.lines.length === 1) return false

    gMeme.selectedLineIdx++
    if (gMeme.lines.length === gMeme.selectedLineIdx) gMeme.selectedLineIdx = 0
    return true
}


function getCurrImg() {
    return getImgById(gMeme.selectedImgId)
}

function getImgById(imgId) {
    const img = gImgs.find(img => img.id === imgId)
    return img
}

function addLine() {
    gMeme.lines.push({
        txt: 'Enter Text here!!',
        size: 50,
        align: 'left',
        color: 'white'
    })
    gMeme.selectedLineIdx++
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    if (gMeme.lines.length === 0) return false
    gMeme.selectedLineIdx--
}

function updateCurrImg(imgId) {
    gMeme.selectedImgId = imgId
}

function updateCurrText(txt) {
    const currLine = getSelectedLine()
    currLine.txt = txt
}

function drawText(line, idx) {
    // text, size = 35, color = 'white', x = gElCanvas.width / 2, y = 50
    const currLine = getSelectedLine()
    const { txt, size, color } = line
    var x = gElCanvas.width / 2
    var y
    switch (idx) {
        case 0:
            y = 50
            break
        case 1:
            y = gElCanvas.height - size
            break
        default:
            y = gElCanvas.height / 2
            break
    }
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color

    gCtx.font = `400 ${size}px impact`;
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(txt, x, y)
}




function getSelectedLine() {

    return gMeme.lines[gMeme.selectedLineIdx]
}
