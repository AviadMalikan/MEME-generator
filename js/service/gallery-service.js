'use strict'

var gFilterBy = ''

function getImgs() {
    if (gFilterBy === '') return gImgs
    const imgs = gImgs.filter(img => img.keywords.toString().includes(gFilterBy))
    return imgs
}

function setFilterBy(filterBy) {
    const filter = filterBy.toLowerCase()       
    gFilterBy = filter
}

function resetFilter() {
    gFilterBy = ''
}


