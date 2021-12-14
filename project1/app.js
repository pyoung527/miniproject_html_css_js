const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const sheet = window.document.styleSheets[0];

// Add event listeners
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
    sheet.insertRule('body {background-image: none; }', sheet.cssRules.length);
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
    sheet.insertRule(
      "body {background-image: url('https://media.giphy.com/media/3o6EhQuCjYJj4t1fWM/giphy-downsized-large.gif'); }",
      sheet.cssRules.length
    );
  }
});
