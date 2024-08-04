/*  12 hrs  = 360 deg
    1 hrs = 30deg
    h hrs = 30*h deg + 0.5*m deg

    60min = 30 deg
    1 min = 0.5 deg
    m min = 0.5*m deg

    60min = 360deg
    1 min = 6 deg
    n min = 6*n deg

    60 sec = 360 deg
    1 sec = 6 deg 
    s sec = 6*s deg
*/


let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    // Getting Hours , min , days , sec From date
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    // calculating how  much rotate with the current time
    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    // rotating line using css 
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime,999);