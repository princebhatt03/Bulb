let btn = document.querySelector('#btn');
let bulb = document.querySelector('.bulb');
let def = 1;

btn.addEventListener('click', function () {
  if (def == 1) {
    bulb.style.backgroundColor = 'yellow';
    def = 0;
  } else {
    bulb.style.backgroundColor = 'white';
    def = 1;
  }
});
