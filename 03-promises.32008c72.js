var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r("i37YJ");var n=r("iQIUW");const i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),startBtn:document.querySelector(".button.start")};i.startBtn.addEventListener("click",(function(e){event.preventDefault(),delay=Number(i.delay.value),step=Number(i.step.value),amount=Number(i.amount.value),i.form.reset();let t=[{PromisePosition:1,PromiseDelay:delay}];for(let e=2;e<=amount;e++)t.push({PromisePosition:e,PromiseDelay:delay+=step});t.forEach((e=>{const{PromisePosition:t,PromiseDelay:o}=e;!function(e,t){new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?o(n.Notify.success(`Fulfilled promise ${e} in ${t}ms`)):r(n.Notify.failure(`Rejected promise ${e} in ${t}ms`))}),t)})).then().catch((e=>e))}(t,o)}))}));
//# sourceMappingURL=03-promises.32008c72.js.map