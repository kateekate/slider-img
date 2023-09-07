const sliderLine = document.querySelector('.slider-line');
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
const dots = document.querySelectorAll('.dot');

let position = 0;
let dotIndex = 0;

// FUNCTIONS

const nextSlide = () => {
  if (position < ((dots.length - 1) * 300)) {
    position += 300;
    dotIndex++;
  } else {
    position = 0;
    dotIndex = 0;
  }
  sliderLine.style.left = -position + 'px';
  activeSlide(dotIndex);
}

const prevSlide = () => {
  if (position > 0) {
    position -= 300;
    dotIndex--;
  } else {
    position = (dots.length - 1) * 300;
    dotIndex = (dots.length - 1);
  }
  sliderLine.style.left = -position + 'px';
  activeSlide(dotIndex);
}

const activeSlide = (idx) => {
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  dots[idx].classList.add('active');
}

// EVENT LISTENERS

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    position = 300 * idx;
    sliderLine.style.left = -position + 'px';
    dotIndex = idx;
    activeSlide(dotIndex);
  })
})

// SET INTERVAL

// setInterval(() => {
//   nextSlide()
// }, 3000)