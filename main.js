let Musics = [
    {
        cover: "./imgs/set-fire.jpeg",
        title: "Set fire to the rain",
        song: new Audio("./music/Set fire to the rain Adele.mp3")

    },

    {
        cover: "./imgs/dua-lipa.jpeg",
        title: "Future Nostalgia",
        song: new Audio("./music/Dua-Lipa-Future-Nostalgia-dibamusics-128.mp3")

    },
    {
        cover: "./imgs/one-dance.jpg",
        title: "One Dnace",
        song: new Audio("./music/Drake - One Dance.mp3")

    },
]


let title = document.querySelector(".title")
let cover = document.querySelector(".coverImg")
let range = document.querySelector(".range")
let prev = document.getElementById("prev")
let play = document.getElementById("play")
let next = document.getElementById("next")

let currentMusic = 0
range.value = 0
title.innerText = Musics[currentMusic].title
cover.src = Musics[currentMusic].cover
let song = Musics[currentMusic].song

song.addEventListener("canplay", () => {
    range.max = song.duration
})

song.addEventListener("timeupdate", updateRange)

function updateRange() {
    range.value = song.currentTime
}

range.addEventListener("input", () => {
    song.currentTime = range.value
})

play.addEventListener("click", () => {
    if (song.paused) {
        song.play()
        play.classList.replace("fa-play", "fa-pause")
    } else {
        song.pause()
        play.classList.replace("fa-pause", "fa-play")
    }
})

prev.addEventListener("click", () => {
    changeMusic("prev")
})

next.addEventListener("click", () => {
    changeMusic("next")
})

function changeMusic(state) {
    if (state === "next") {
        if (currentMusic === Musics.length - 1) {
            currentMusic = 0
        } else {
            currentMusic += 1
        }
    } else if (state === "prev") {
        if (currentMusic === 0) {
            currentMusic = Musics.length - 1
        } else {
            currentMusic -= 1
        }
    }

    song.removeEventListener("timeupdate", updateRange)
    song.pause()
    play.classList.replace("fa-pause", "fa-play")
    song.currentTime = 0
    range.value = 0

    title.innerText = Musics[currentMusic].title
    cover.src = Musics[currentMusic].cover
    song = Musics[currentMusic].song

    song.addEventListener("canplay", () => {
        range.max = song.duration
    })

    song.addEventListener("timeupdate", updateRange)
}



