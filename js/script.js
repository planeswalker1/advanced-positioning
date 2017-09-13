const timer = setInterval(frame, 10);
let distance = 0;

console.log(window.innerWidth);
function frame() {
  const element = document.querySelector('.item-relative');
  distance += 2;
  if (window.innerWidth > 768) {
    element.style.left = distance + 'px';
    if (distance >= 300) {
      clearInterval(timer);
    }
    } else {
      element.style.top = distance + 'px';
      if (distance >= 200) {
        clearInterval(timer);
      }
    }
}
