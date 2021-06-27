const START_COUNT = 0;
const NULL = null;
const Step = {
  NEXT: +1,
  PREV: -1,
};

const slider = document.querySelector(".advertising");
const buttonPrev = slider.querySelector(".controls__button--prev");
const buttonNext = slider.querySelector(".controls__button--next");
const sliderList = slider.querySelectorAll(".advertising__item");
const bullets = slider.querySelectorAll(".bullets__button");

const deleteCurrentClass = () => {
  sliderList.forEach((slide) => {
    slide.classList.remove("advertising__item--current");
  });
  bullets.forEach((bullet) => {
    bullet.classList.remove("bullets__button--active");
  });
};

const shiftSlides = () => {
  let count = START_COUNT;

  return (shift, ...newPosition) => {
    count = shift === NULL ? newPosition[START_COUNT] : count + shift;

    if (count < START_COUNT) {
      count = START_COUNT;
    }

    if (count > sliderList.length - 1) {
      count = sliderList.length - 1;
    }

    deleteCurrentClass();
    sliderList[count].classList.add("advertising__item--current");
    bullets[count].classList.add("bullets__button--active");
  };
};

const moveSlide = shiftSlides();

buttonNext.addEventListener("click", () => {
  moveSlide(Step.NEXT);
});

buttonPrev.addEventListener("click", () => {
  moveSlide(Step.PREV);
});

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    moveSlide(NULL, index);
  });
});
