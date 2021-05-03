console.log('hey ho !');

// Declare an event (on click, mouse movement...)
window.addEventListener("DOMContentLoaded", init);

/**
 * Global variables 
 */

// We set the mode chrono / time
let mode = 'chrono';
// At first, the chrono is not running
let isRunning = false;
// Initliase timer and chrono
let timer = null;
let displayTime = null;
// Initialize minute/second/millisecond
let md = mu = sd = su = msd = msu = 0;

/**
 * First function to be called as the JS file is downloaded
 */
 
function init(){
    // Event on button start
    const button = document.querySelector('.start');
    button.addEventListener('click', clickOnStart, true);
    
    // Event on button reset
    document.querySelector('.reset').addEventListener('click', clickOnReset);

    // Event on middle button to get the hour
    document.querySelector('.mode').addEventListener('click', clickOnMode);
}

/**
 * Functions to start/stop the chrono and display time
 */

// Start chrono on click
function clickOnStart(){

    // console.log('clic sur le bouton start');

    // Do nothing if we are not in chrono mode
    if(mode !== 'chrono'){
        return
    }

    // We change the state of the chrono because we clicked on the start button
    isRunning = !isRunning;
    // console.log(isRunning);

    // Launch chrono ?
    if(isRunning) {
        start();
    } else {
        stop();
    }
}


// Reset chrono on click
function clickOnReset(){
    // console.log('clic sur le bouton reset');

    // Do nothing if we are not in chrono mode
    if(mode !== 'chrono'){
        return
    }

    reset();
}

// Display actual time
function clickOnMode(){
    // console.log('afficher l\'heure');

    // Reset chrono to 0
    reset();

    // Check chrono mode
    if(mode == 'chrono') {

        // If chrono is running, we have to reset to 0
        if(isRunning) {
            stop();
            isRunning = false;
        }

        // Then we display the actual time...
        chronoTime();

        // ... and update time every seconds
        displayTime = window.setInterval(chronoTime, 1000);

        // We change the mode to Time
        mode = "time";

    } else {

        // We stop the timer chrono
        window.clearInterval(displayTime);

        // We change the mode to Chrono
        mode = "chrono";
    }

    // console.log('Mode = ' +mode );
}

/**
 * Functions to run the chrono
 */

// Click on start button (1st action) to start chrono
function start() {
    // console.log('start');
    // Update the numbers every 10ms
    timer = window.setInterval(launch, 10);
}

// Click on start button (2nd action) to stop chrono
function stop() {
    // console.log('stop');
    // Stop the update of numbers
    clearInterval(timer);
}

// We increase the milliseconds of the chrono
function launch() {
    msu ++;

    // if msu > 9  then  msu = 0 and we increase msd +1
    if(msu > 9){
        msu = 0;
        msd++
    }

    if(msd > 9){
        msd = 0;
        su++
    }    

    if(su > 9){
        su = 0;
        sd++
    } 

    if(sd > 5){
        sd = 0;
        mu++
    }   

    if(mu > 9){
        mu = 0;
        md++
    } 
    
    if(md > 5){
        md = 0;
    }  

    // console.log("Chrono : " + md + mu + ":" + sd + su + ":" + msd + msu);

    updateChrono();
}

// Reset numbers to 0
function reset() {
    md = mu = sd = su = msd = msu = 0;   
    updateChrono();
}

// Update numbers on chrono and apply style (front)
function updateChrono() {
    document.querySelector(".md").style.backgroundImage = "url(assets/img/chrono/" + md + ".png)";
    document.querySelector(".mu").style.backgroundImage = "url(assets/img/chrono/" + mu + ".png)";
    document.querySelector(".sd").style.backgroundImage = "url(assets/img/chrono/" + sd + ".png)";
    document.querySelector(".su").style.backgroundImage = "url(assets/img/chrono/" + su + ".png)";
    document.querySelector(".msd").style.backgroundImage = "url(assets/img/chrono/" + msd + ".png)";
    document.querySelector(".msu").style.backgroundImage = "url(assets/img/chrono/" + msu + ".png)";
}

// Time displayed and updated
function chronoTime() {

    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    
    // console.log(hours); // 16
    md = Math.floor(hours/10); // 1 -> ex. 16/10 = 1.6 -> we only need the "1" and Math.floor enables to get first number before comma
    mu = hours - md*10; // 6 -> ex. 16-(1*10) = 6

    sd = Math.floor(minutes/10); 
    su = minutes - sd*10;

    msd = Math.floor(seconds/10); 
    msu = seconds - msd*10;

    // we update the front
    updateChrono();
}



