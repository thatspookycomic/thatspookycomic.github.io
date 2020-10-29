const clickSound = new Audio('audio/spookyclick.mp3');
const screamSound = new Audio('audio/spookyscream.mp3');
let firstJumpScareActivated = false;
let secondJumpScareActivated = false;

function playFirstJumpScare() {
  setTimeout(() => {
    clickSound.play();
    window.scrollTo(0, 8441);
  }, 800)

  setTimeout(() => {
    window.scrollTo(0, 9090);
  }, 900)

  setTimeout(() => {
    window.scrollTo(0, 9660);
  }, 1000)

  setTimeout(() => {
    window.scrollTo(0, 10315);
  }, 1100)

  setTimeout(() => {
    window.scrollTo(0, 10926);
  }, 1200)

  setTimeout(() => {
    window.scrollTo(0, 11498);
  }, 1300)

  setTimeout(() => {
    window.scrollTo(0, 12054);
  }, 1400)

  setTimeout(() => {
    window.scrollTo(0, 12704);
  }, 1500)

  setTimeout(() => {
    window.scrollTo(0, 13256);
  }, 1600)

  setTimeout(() => {
    window.scrollTo(0, 12704);
  }, 1700)

  setTimeout(() => {
    window.scrollTo(0, 13256);
  }, 1800)

  setTimeout(() => {
    window.scrollTo(0, 12704);
  }, 1900)

  setTimeout(() => {
    window.scrollTo(0, 13256);
  }, 2000)

  setTimeout(() => {
    window.scrollTo(0, 12704);
  }, 2100)

  setTimeout(() => {
    window.scrollTo(0, 13256);
  }, 2200)

  firstJumpScareActivated = true;
}

function playSecondJumpScare() {
  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 24988);
  }, 800)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 25727);
  }, 900)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 26414);
  }, 1000)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 27094);
  }, 1100)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 27799);
  }, 1200)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 28666);
  }, 1300)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 27799);
  }, 1400)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 28666);
  }, 1500)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 27799);
  }, 1600)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 28666);
  }, 1700)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 27799);
  }, 1800)

  setTimeout(() => {
    screamSound.play();
    window.scrollTo(0, 28666);
  }, 1900)

  secondJumpScareActivated = true;
}

function handler(entries) {
  for (entry of entries) {
    if (
      entry.target.id === 'firstTarget'
      && entry.isIntersecting
      && !firstJumpScareActivated
    ) {
      playFirstJumpScare();
    }

    if (
      entry.target.id === 'secondTarget'
      && entry.isIntersecting
      && !secondJumpScareActivated
    ) {
      playSecondJumpScare();
    }
  }
}

function emojiClickChange() {
  document.getElementById('clickEmoji').innerText = "👻";
}

let observer = new IntersectionObserver(handler);
observer.observe(document.getElementById('firstTarget'));
observer.observe(document.getElementById('secondTarget'));