const timer = setInterval(frame, 10);
let distance = 0;

function frame() {
  const itemRelative = document.querySelector('.item-relative');
  distance += 2;
  itemRelative.style.left = distance + 'px';
  if (distance >= 300) {
    clearInterval(timer);
  }
}
