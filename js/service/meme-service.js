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
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat'] },
];
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter Text here',
            size: 50,
            align: 'left',
            color: '#ffffff',
            font: 'impact',
            strokeColor: 'black',
        }
    ]
}

function restartMems() {
    gMeme = {
        selectedImgId: 0,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Enter Text here',
                size: 50,
                align: 'left',
                color: '#ffffff',
                font: 'impact',
                strokeColor: 'black',
            }
        ]
    }
}

function setLine() {
    if (gMeme.lines.length === 1) return null

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
        txt: 'Enter Text here',
        size: 50,
        align: 'left',
        color: '#ffffff',
        font: 'impact',
        strokeColor: 'black',
    })
    gMeme.selectedLineIdx++
}

function removeLine() {
    if (gMeme.lines.length === 1) return null

    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx--
}

function updateCurrImg(imgId) {
    gMeme.selectedImgId = imgId
}

function updateCurrText(txt) {
    const currLine = getSelectedLine()
    if (!currLine) return null
    currLine.txt = txt
}

function changeColor(val) {
    const currLine = getSelectedLine()
    currLine.color = val
}
function changeFont(val) {
    const currLine = getSelectedLine()
    currLine.font = val
}

function increaseFontSize(num) {
    const currLine = getSelectedLine()
    if (currLine.size >= 100) return null
    currLine.size += num
    return true
}

function decreaseFontSize(num) {
    const currLine = getSelectedLine()
    if (currLine.size <= 20) return null
    currLine.size += num
    return true
}

function drawText(line, idx) {
    // const currLine = getSelectedLine()
    const { txt, size, color, font, strokeColor } = line
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
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = color

    gCtx.font = `400 ${size}px ${font}`;
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(txt, x, y)
}


function getSelectedLine() {

    return gMeme.lines[gMeme.selectedLineIdx]
}
