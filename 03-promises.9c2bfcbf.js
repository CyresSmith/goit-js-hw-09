var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r("i37YJ");var n=r("iQIUW");const i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),startBtn:document.querySelector(".button.start")};let l=[];function u(e){e.forEach((e=>{const{PromisePosition:t,PromiseDelay:o}=e;var r,i;r=t,i=o,new Promise(((e,t)=>{setTimeout((()=>{Math.random()>.3?e(n.Notify.success(`Fulfilled promise ${r} in ${i}ms`)):t(n.Notify.failure(`Rejected promise ${r} in ${i}ms`))}),i)})).then().catch((e=>e))}))}i.form.addEventListener("input",(function(){let e=Number(i.delay.value),t=Number(i.step.value),o=Number(i.amount.value);l=[{PromisePosition:1,PromiseDelay:e}];for(let r=2;r<=o;r++)l.push({PromisePosition:r,PromiseDelay:e+=t})}));i.startBtn.addEventListener("click",(()=>{event.preventDefault(),u(l),i.form.reset()}));
//# sourceMappingURL=03-promises.9c2bfcbf.js.map
