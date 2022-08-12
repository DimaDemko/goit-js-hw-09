import { Notify } from 'notiflix/build/notiflix-notify-aio';

const { delayValue, stepValue, amountValue, formItem } = {
  delayValue: document.querySelector("[name='delay']"),
  stepValue: document.querySelector("[name='step']"),
  amountValue: document.querySelector("[name='amount']"),
  formItem: document.querySelector('.form'),
};

formItem.addEventListener('submit', event => {
  event.preventDefault();

  let firstDelay = Number(delayValue.value);
  const delayTime = Number(stepValue.value);

  for (let index = 1; index <= amountValue.value; index++) {
    createPromise(index, firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    firstDelay += delayTime;
  }

  formItem.reset();
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}
