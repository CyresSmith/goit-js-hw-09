import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = { 
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  startBtn: document.querySelector('.button.start'),  
}

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {   
      
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {        
        resolve(Notify.success(`Fulfilled promise ${position} in ${delay}ms`));
      }
      else {
        reject(Notify.warning(`Rejected promise ${position} in ${delay}ms`));
      }
      
    }, delay);

  }).then().catch(e => e);
}

function startRenderPromises(e) {

  event.preventDefault()

  delay = Number(refs.delay.value);
  step = Number(refs.step.value);
  amount = Number(refs.amount.value);

  refs.form.reset()

  let PromisesOptionsArray = [{position: 1, delay: delay}];

  for (let i = 2; i <= amount; i++) {
    PromisesOptionsArray.push({position: i, delay: delay += step,})    
  }

  PromisesOptionsArray.forEach(element => {
    createPromise(element.position, element.delay);
  });  
}

refs.startBtn.addEventListener('click', startRenderPromises);