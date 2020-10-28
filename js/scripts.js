function handler(entries) {
  for (entry of entries) {
    console.log(entry);

    if (entry.isIntersecting) {
      console.log('we see it')
    } else {
      console.log('we dont see it')
    }
  }
}

let observer = new IntersectionObserver(handler);
console.log('hello', document.getElementById('firstTarget'))
observer.observe(document.getElementById('firstTarget'));