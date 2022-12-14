'use strict'

Date
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['celebrity', 'tramp'] },
    { id: 2, url: 'img/2.jpg', keywords: ['animals', 'dogs'] },
    { id: 3, url: 'img/3.jpg', keywords: ['animals', 'baby', 'dogs'] },
    { id: 4, url: 'img/4.jpg', keywords: ['animals', 'cats'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby',] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'explain'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['movie', 'smile'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby', 'smile'] },
    { id: 10, url: 'img/10.jpg', keywords: ['celebrity', 'smile'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'kiss'] },
    { id: 12, url: 'img/12.jpg', keywords: ['movie', 'celebrity'] },
    { id: 13, url: 'img/13.jpg', keywords: ['movie', 'celebrity'] },
    { id: 14, url: 'img/14.jpg', keywords: ['movie', 'matrix',] },
    { id: 15, url: 'img/15.jpg', keywords: ['movie',] },
    { id: 16, url: 'img/16.jpg', keywords: ['movie', 'smile'] },
    { id: 17, url: 'img/17.jpg', keywords: ['celebrity', 'putin'] },
    { id: 18, url: 'img/18.jpg', keywords: ['movie', 'baby'] },
];
var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter Text here',
            size: 50,
            align: 'center',
            color: '#ffffff',
            font: 'impact',
            // pos: { x: gElCanvas.width / 2, y: 50 },
            isDrag: false,
        }
    ]
}

function resetMemes() {
    gMeme = {
        selectedImgId: 0,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Enter Text here',
                size: 50,
                align: 'center',
                color: '#ffffff',
                font: 'impact',
                // pos: { x: gElCanvas.width / 2, y: 50 },
                isDrag: false,
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
    var y = (gMeme.lines.length < 2) ? gElCanvas.height - 50 : y = gElCanvas.height / 2
    gMeme.lines.push({
        txt: 'Enter Text here',
        size: 50,
        align: 'center',
        color: '#ffffff',
        font: 'impact',
        isDrag: false,
        pos: { x: gElCanvas.width / 2, y },
    })
    gMeme.selectedLineIdx++
}

function removeLine() {
    if (gMeme.lines.length === 1) return null

    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx--
    if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = 0
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

function moveTextOnYLine(num) {
    const currLine = getSelectedLine()
    currLine.pos.y += num
}

function moveTextOnXLine(num) {
    const currLine = getSelectedLine()
    currLine.pos.x += num
}

function alienTextCenter() {
    const currLine = getSelectedLine()
    currLine.align = 'center'
    currLine.pos.x = gElCanvas.width / 2
}

function alienTextLeft() {
    const currLine = getSelectedLine()
    currLine.align = 'left'
    currLine.pos.x = 0
}
function alienTextRight() {
    const currLine = getSelectedLine()
    currLine.align = 'right'
    currLine.pos.x = gElCanvas.width
}

function decreaseFontSize(num) {
    const currLine = getSelectedLine()
    if (currLine.size <= 20) return null
    currLine.size += num
    return true
}

function drawText(line, idx) {
    const { txt, size, color, font, align } = line
    // console.log('line: ', line)
    if (!line.pos) {
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
        line.pos = { x, y }
    }

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `400 ${size}px ${font}`;
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, line.pos.x, line.pos.y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(txt, line.pos.x, line.pos.y)
}



function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}
