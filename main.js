const monthEl = document.querySelector('.date__month .value');
const dayEl = document.querySelector('.date__day .value');
const yearEl = document.querySelector('.date__year .value');
const timeEl = document.querySelector('.datetime__time');
const ampmEl = document.querySelector('.datetime__ampm');

function setDate(now) {
  monthEl.textContent = now.getMonth() + 1;
  dayEl.textContent = now.getDate();
  yearEl.textContent = now.getFullYear();
}

function setDateTime(now) {
  const time = now.toTimeString().split(' ')[0].slice(0, 5);
  timeEl.textContent = time;
  ampmEl.textContent = now.getHours() >= 12 ? 'PM' : 'AM';
}

//  setInterval([Function], [Milliseconds])
setInterval(function () {
  const now = new Date();
  setDate(now);
  setDateTime(now);
}, 1000);
