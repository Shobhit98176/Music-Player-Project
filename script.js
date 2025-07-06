// © 2025. shobhitPal All rights reserved.
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Jack Sparrow",
    name: "Jack Sparrow By Hans Zimmer",
    source:
      "Jack sparrow.mp3",
  },
  {
    title: "MONEY HEIST/BELLA CIAO",
    name: "MONEY HEIST/BELLA CIAO By Manu Pilas",
    source:
      "Money Heist Bella Ciao.mp3",
  },
  {
    title: "Tujh Bin❤️",
    name: "Tujh Bin By Bharatt Saurabh",
    source:
      "Tujh Bin.mp3",
  },
  {
    title: "Mohabbatein💖",
    name: "Mohabbatein By Jatin–Lalit",
    source:
      "Mohabbatein.mp3",
  },
  {
    title: "TUM HI AANA",
    name: "TUM HI AANA By Payal Dev",
    source:
      "Tum hi aana.mp3",
  },

  {
    title: "Oh Oh Jane Jana❤️",
    name: "Oh Oh Jane Jana by Jatin-Lalit",
    source:
      "Oh Oh Jane Jana.mp3",
  },
  {
    title: "Hum Bhi Tumpe💞",
    name: "Hum Bhi Tumpe By Robin Raturi",
    source:
      "Hum bhi tumpe.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
// © 2025. shobhitPal All rights reserved.