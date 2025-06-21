console.log('running');

let cards = [
          {
                    image : '../Songs/cover.jpg',
                    albumType : 'Electronic music',
                    discription: 'A blend of music for Dan & Hayley'
          },

          {
                    image : '../Images/img6.svg',
                    albumType : 'Dan & Hayley',
                    discription: 'A blend of music for Dan & Hayley'
          },

          {
                    image : '../Images/img8.png',
                    albumType : 'Top songs 2025',
                    discription: 'A blend of music for Dan & Hayley'
          },

          {
                    image : '../Images/img4.svg',
                    albumType : 'Serotonin',
                    discription: 'A blend of music for Dan & Hayley'
          }
]

function displayCards() {
          let displayElement = document.querySelector('.right-section3');

          cards.forEach((card) => {
                    displayElement.innerHTML +=(`
                              <div class="sec3-card grey2">
                                        <img src="${card.image}" alt="">
                                        <p class="right-t3">${card.albumType}</p>
                                        <p class="right-t4">${card.discription}</p>
                              </div>        
                    `)
          })
}

displayCards();

let progress = document.querySelector('.progress')
let song = document.querySelector('.song')
let controlIcon = document.querySelector('.ctrl-icon')


async function loadingData() {
          await new Promise((resolve) => {
                     song.addEventListener("loadedmetadata", () => {
                              progress.max = song.duration;
                              progress.value = song.currentTime;

                               if (!isNaN(song.duration) && song.duration !== Infinity) {
                                        document.querySelector('.js-duration').innerHTML = formatTime(song.duration);
                              }
                              resolve();
                    });
          })
          // document.querySelector('.js-duration').innerHTML = formatTime(song.duration);
}
loadingData();

let playToggle = 1;
function playPause() {
          if(playToggle){
                    song.play();
                    playToggle = 0;
                    document.querySelector('.ctrl-icon').innerHTML = (`
                              <img src="../Images/pause.svg" alt=""></p>
                    `)
          } else {
                    song.pause();
                    playToggle = 1;
                    document.querySelector('.ctrl-icon').innerHTML = (`
                              <img src="../Images/play.svg" alt=""></p>
                    `)
          }
}

progress.addEventListener("input", () => {
          song.currentTime = progress.value;
});

song.ontimeupdate = () => {
          progress.value = song.currentTime;
          document.querySelector('.js-current-time').innerHTML = formatTime(song.currentTime);
}

function formatTime(seconds) {
          const mins = Math.floor(seconds / 60);
          const secs = Math.floor(seconds % 60);
          return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
}