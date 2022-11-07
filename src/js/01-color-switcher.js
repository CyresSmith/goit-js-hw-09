const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const addBodyBackgroundColor = () => refs.body.setAttribute('style', `background-color:${getRandomHexColor()}`);

let intervalID;

const toggleBodyBackgroundColorChenge = (e) => {

  switch (e.target) {  

    case refs.startBtn:
      refs.startBtn.disabled = true;
      intervalID = setInterval(addBodyBackgroundColor, 1000)
      break;
    
    case refs.stopBtn:
      refs.startBtn.disabled = false;
      clearInterval(intervalID)
      break;
  }
};

refs.body.addEventListener('click', toggleBodyBackgroundColorChenge);