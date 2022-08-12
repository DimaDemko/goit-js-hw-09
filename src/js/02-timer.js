import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const { start, daysValue, hoursValue, minutesValue, secondsValue } = {
  start: document.querySelector('[data-start]'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() >= 0) {
      start.removeAttribute('disabled');
      console.log(selectedDates[0]);
    } else {
      start.setAttribute('disabled', 'disable');
      Notify.failure('Please choose a date in the future');
    }
  },
};
const inputtext = document.querySelector('#datetime-picker');
// const start = document.querySelector('[data-start]');

const fn = flatpickr(inputtext, options);
// console.log(flatpickr(inputtext, options));

start.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const timeDelta = fn.selectedDates[0] - new Date();
    start.setAttribute('disabled', 'disable');

    if (timeDelta <= 0) {
      clearInterval(intervalId);
      return;
    }
    const convertedDelta = convertMs(timeDelta);

    daysValue.textContent = addLeadingZero(convertedDelta.days);
    hoursValue.textContent = addLeadingZero(convertedDelta.hours);
    minutesValue.textContent = addLeadingZero(convertedDelta.minutes);
    secondsValue.textContent = addLeadingZero(convertedDelta.seconds);

    console.log(convertedDelta);
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
