
let seconds = 0;
let minutes = 25;
let secondsDOM, minutesDOM, percentageComp, totalSec, completedSec, completed = false;
let starter = 0, resetable = false;

const single2Dble = (data) => "0" + data;

const startTimeFxn = () => {
    if (starter == 0) {
        console.log("started");
        document.getElementById('startAudio').play();
        starter = 1;



        timer();
        resetable = true;
    
    }
}
totalSec = minutes * 60 + seconds;
const timeFxn = setInterval(timer = () => {


    if (starter == 1) {

        updateDOM(seconds, minutes);

        // console.log(minutes + " : " + seconds);
        if (seconds > 0 && completed === false) {
            seconds--;
        }
        else if (completed === false) {
            seconds = 59;
            minutes--;
        }

        completedSec = minutes * 60 + seconds;
        percentage = (completedSec / totalSec) * 100;
        updateProgressBar(100 - percentage);
        // console.log(percentage);
        if (minutes < 0 && starter != 0) {
            clearInterval(timer);
           
            
            
            seconds = 0; minutes = 0;
        
            document.getElementById('alarmAudio').play();

        }
       
    }



}, 1000)


let playPauseIcon = document.getElementById("playPauseIcon");
playPauseIcon.style.color = "#2e7d32"
const playPauseFxn = () => {
    if (completed === false) {
        if (starter == 0) {
            startTimeFxn();
            playPauseIcon.innerHTML = "pause_circle_outline";
            playPauseIcon.style.color = "#ffd600"
        }
        else {
            pauseTimeFxn();

            playPauseIcon.innerHTML = "play_circle_outline";
            playPauseIcon.style.color = "#2e7d32"
        }
    }
}





const pauseTimeFxn = () => {
    console.log("Paused");

    document.getElementById('pauseAudio').play();

    starter = 0;




}
const resetTimeFxn = (min, sec) => {
  
    document.getElementById('resetAudio').play();
    seconds = sec;
    minutes = min;
    totalSec = minutes * 60 + seconds;
    updateDOM(seconds, minutes);

    playPauseIcon.innerHTML = "play_circle_outline";
    playPauseIcon.style.color = "#2e7d32"
    starter = 0;

    updateProgressBar(0);
    document.getElementById('alarmAudio').pause();

}

const updateDOM = (seconds, minutes) => {
    secondsDOM = seconds; minutesDOM = minutes;
    if (seconds < 10)
        secondsDOM = single2Dble(seconds);
    if (minutes < 10)
        minutesDOM = single2Dble(minutes);
    document.getElementById('timeDOM').innerHTML = minutesDOM + " : " + secondsDOM;
}
let progress = document.getElementById('progressBar').style;
const updateProgressBar = (percentage) => {

    progress.width = percentage + "%";
}
