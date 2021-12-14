const circle1 = document.querySelector('#circle1');

circle1.addEventListener('mouseenter', () => {
  if (!circle1.classList.contains('hover')) {
    circle1.classList.add('hover');
  }
});

circle1.addEventListener('mouseleave', () => {
  if (circle1.classList.contains('hover')) {
    circle1.classList.remove('hover');
  }
});
const circle2 = document.querySelector('#circle2');

circle2.addEventListener('mouseenter', () => {
  if (!circle2.classList.contains('hover')) {
    circle2.classList.add('hover');
  }
});

circle2.addEventListener('mouseleave', () => {
  if (circle2.classList.contains('hover')) {
    circle2.classList.remove('hover');
  }
});
