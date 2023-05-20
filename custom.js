const input = document.querySelector('.inputArea input');
const sec = document.querySelector('.sec');
const enterBtn = document.querySelector('.inputArea button');
let timer;

input.focus()

enterBtn.addEventListener('click', () => {
  interval();
});

const interval = () => {
  clearInterval(timer);

  let value = input.value * 10000;
  let secValue = value / 365 / 24 / 60 / 60;
  let secNum = 0;

  timer = setInterval(() => {
    secNum++;
    sec.innerHTML = `You're earning ${(secValue * secNum).toFixed(1)} won for ${secNum} seconds.`;
    sec.style.backgroundColor = '#B8DFD8'
  }, 1000)
}
