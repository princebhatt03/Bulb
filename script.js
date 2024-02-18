let buld = document.querySelector('#buld');
let btn = document.querySelector('#btn');
let def = 1;

btn.addEventListener('click', function () {
  if (def == 1) {
    buld.style.backgroundImage = 'url(img/buld-on.gif)';
    def = 0;
  } else {
    buld.style.backgroundImage = 'url(img/buld.gif)';
    def = 1;
  }
});
