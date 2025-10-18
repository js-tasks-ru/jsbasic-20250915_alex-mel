function initCarousel() {
  let count = 1;
  let sizeWidth = 0;
  const rightBtnArrow = document.querySelector('.carousel__arrow_right');
  const leftBtnArrow = document.querySelector('.carousel__arrow_left');
  const carousel = document.querySelector('.carousel');
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselInnerSizeImg = document.querySelectorAll('.carousel__inner .carousel__img');
  carouselInner.style.transform = `translate(${sizeWidth}px)`;
  let sizeOffsetWidth = carouselInner.offsetWidth;
  displayElement(leftBtnArrow, rightBtnArrow, count);
  carousel.addEventListener('click', function(e) {
    if (e.target.closest('.carousel__arrow_left')) {
      count--;
      displayElement(leftBtnArrow, rightBtnArrow, count);
      sizeWidth -= sizeOffsetWidth;
      if (count < 1) {
        count = 1;
        sizeWidth = 0;
      }
      carouselInner.style.transform = `translateX(-${sizeWidth}px)`;
    }
    if (e.target.closest('.carousel__arrow_right')) {
      count++;
      displayElement(leftBtnArrow, rightBtnArrow, count);
      sizeWidth += sizeOffsetWidth;

      if (count > carouselInnerSizeImg.length) {
        count = carouselInnerSizeImg.length;
        sizeWidth = sizeOffsetWidth * count;
      }
      carouselInner.style.transform = `translateX(-${sizeWidth}px)`;
    }
  });
}


function displayElement(elemLeft, elementRight, index) {
  if (index === 1) {
    elemLeft.style.display = 'none';
  } else {
    elemLeft.style.display = '';
  }
  if (index === 4) {
    elementRight.style.display = 'none';
  } else {
    elementRight.style.display = '';
  }
}
