var helpButton = document.querySelector('.help-button')
var helpBox = document.querySelector('.help-box')

helpButton.addEventListener('click', () => {
    helpBox.classList.toggle('box-open')
})

var catGif = document.querySelector('.cat-gif')
var meowSound = document.querySelector('.meow-sound')

catGif.addEventListener('click', () => {
    meowSound.play()
    catHelp.style.display = 'none'
})

var btnPlay = document.querySelector('.btn-play')
var btnPause = document.querySelector('.btn-pause')
var musicBg = document.querySelector('.music-bg')
var playerMusica = document.querySelector('.player')
var OpenPlayer = document.querySelector('.openPlayer')
var buttonOk = document.querySelector('.player-help button')
var playerHelp = document.querySelector('.player-help')
var catHelp = document.querySelector('.cat-help')
var catHelpBtn = document.querySelector('.cat-help button')
var fastPlayMusic = document.querySelector('#fastPlayMusic')

btnPause.addEventListener('click', () => {
    btnPause.style.display = 'none'
    btnPlay.style.display = 'block'
    musicBg.pause()
})

fastPlayMusic.addEventListener('click', () => {
    musicBg.play()
    playerHelp.style.display = 'none'
    catHelp.style.display = 'block'
    playerMusica.classList.remove('playerOpen')
    btnPause.style.display = 'block'
    btnPlay.style.display = 'none'
})

btnPlay.addEventListener('click', () => {
    btnPause.style.display = 'block'
    btnPlay.style.display = 'none'
    musicBg.play()
})

OpenPlayer.addEventListener('click', () => {
    playerMusica.classList.toggle('playerOpen')
})

buttonOk.addEventListener('click', () => {
    playerHelp.style.display = 'none'
    catHelp.style.display = 'block'
    playerMusica.classList.remove('playerOpen')
})

catHelpBtn.addEventListener('click', () => {
    catHelp.style.display = 'none'
})


var caroucel = document.querySelector('.caroucel')
var unload = document.querySelector('.unload')
firstImg = document.querySelectorAll('img')[0]
arrowIcons = document.querySelectorAll('.wrapper i')

var isDragStart = false, prevPageX, prevScrollLeft;
var firstImgWidth = firstImg.clientWidth + 356


var showIcons = () => {
    arrowIcons[0].style.display = caroucel.scrollLeft == 0 ? "none" : "grid"
    arrowIcons[1].style.display = caroucel.scrollLeft == scrollWidth ? "none" : "grid"
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        caroucel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
        showIcons()
    })
})

var dragStart = (e) => {
    isDragStart = true
    prevPageX = e.pageX
    prevScrollLeft = caroucel.scrollLeft;
}

var dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    caroucel.classList.add('dragging')
    let positionDiff = e.pageX - prevPageX;
    caroucel.scrollLeft = prevScrollLeft - positionDiff;
}

var dragStop = () => {
    isDragStart = false
    caroucel.classList.remove('dragging')
}

caroucel.addEventListener('mousedown', dragStart)
caroucel.addEventListener('mousemove', dragging)
caroucel.addEventListener('mouseup', dragStop)