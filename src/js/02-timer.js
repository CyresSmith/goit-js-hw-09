import flatpickr from "flatpickr";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    datetimePicker: document.querySelector('[id="datetime-picker"]'),
    startBtn: document.querySelector('[data-start]'),
    resetBtn: document.querySelector('[data-reset]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    timerBox: document.querySelector('.timerBox'),
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // minDate: 'today',
    altInput: true,
    altFormat: "H:i, F j, Y",
    dateFormat: "Y-m-d",

    onOpen() {

        if (refs.days.textContent !== '00' ||
            refs.hours.textContent !== '00' ||
            refs.minutes.textContent !== '00' ||
            refs.seconds.textContent !== '00') {
            
            Notify.warning('Сountdown in works, reset it before change the date');
    }

    },

    onClose(selectedDates) {
        
        setData(selectedDates[0]);        
    },
};

let intervalID = 0;
let selectedDate;

flatpickr('input#datetime-picker', options);

const setData = (date) => {

        switch (date > new Date) {
            
            case true:            
                selectedDate = date;            
                renderСountdownTime(selectedDate);           
                Notify.info('Ready to count');                
                refs.startBtn.disabled = false;
                refs.resetBtn.disabled = false;
                break;        
        
            case false:            
                Report.warning            
                    ('Please choose a date in the future',            
                        'We don\'t have to bring back yesterday, but what happens tomorrow is up to us.', 'Okay', reset);            
                break;
            
            default:            
                break;
        }
          
}

const addLeadingZero = (value) => {

    if (String(value).length > 2) {
        return String(value)
    }

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

const reset = () => {

    refs.startBtn.disabled = true;
    refs.resetBtn.disabled = true;

    refs.days.textContent = '00';
    refs.hours.textContent = '00';
    refs.minutes.textContent = '00';
    refs.seconds.textContent = '00';
}

const renderСountdownTime = () => {

    const { days, hours, minutes, seconds } = convertMs(selectedDate - new Date);

    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
}

const toggleСountdown = (e) => {    

    if (e.target === refs.startBtn) {        
        intervalID = setInterval(renderСountdownTime, 1000);
        refs.startBtn.disabled = true;
        refs.resetBtn.disabled = false;
        Notify.success('Started');

    } else if (e.target === refs.resetBtn){
        clearInterval(intervalID);
        reset();
        Notify.warning('Сountdown reset');
    }
};

refs.timerBox.addEventListener('click', toggleСountdown)
