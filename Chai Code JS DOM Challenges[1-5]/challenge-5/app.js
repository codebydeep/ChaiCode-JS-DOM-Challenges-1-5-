/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const prevBtn = document.getElementById('prevButton');
const nextBtn = document.getElementById('nextButton');
const track = document.getElementById('carouselTrack');
track.style.backgroundImage = `url(${images[0].url})`;
track.className = 'carousel-slide';
let count = 0;
const caption = document.getElementById('caption');
caption.innerText = images[0].caption;

nextBtn.addEventListener('click', () => {
  count++;
    track.style.backgroundImage = `url(${images[count].url})`;
    track.className = 'carousel-slide';
    caption.innerText = images[count].caption;
})
prevBtn.addEventListener('click', () => {
  count--;
    track.style.backgroundImage = `url(${images[count].url})`;
    track.className = 'carousel-slide';
    caption.innerText = images[count].caption;
})
