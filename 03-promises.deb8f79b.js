!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("fivgP");var r=n("h6c0i"),i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),startBtn:document.querySelector(".button.start")};i.startBtn.addEventListener("click",(function(e){event.preventDefault(),delay=Number(i.delay.value),step=Number(i.step.value),amount=Number(i.amount.value),i.form.reset();for(var t=[{PromisePosition:1,PromiseDelay:delay}],o=2;o<=amount;o++)t.push({PromisePosition:o,PromiseDelay:delay+=step});t.forEach((function(e){!function(e,t){new Promise((function(o,n){setTimeout((function(){Math.random()>.3?o(r.Notify.success("Fulfilled promise ".concat(e," in ").concat(t,"ms"))):n(r.Notify.failure("Rejected promise ".concat(e," in ").concat(t,"ms")))}),t)})).then().catch((function(e){return e}))}(e.PromisePosition,e.PromiseDelay)}))}))}();
//# sourceMappingURL=03-promises.deb8f79b.js.map
