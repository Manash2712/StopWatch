// const fun = setInterval(func, 1000);
let intervalId = null;
dt = document.querySelector(".time");
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
function displayTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
            ? "0" + milliseconds
            : milliseconds;
    dt.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("start").addEventListener("click", () => {
    if (intervalId !== null) {
        // this if block will will stop the code from breaking when start is pressed twice continuously
        clearInterval(intervalId);
    }
    intervalId = setInterval(displayTime, 10);
    // console.log(a);
});

document.getElementById("pause").addEventListener("click", () => {
    // console.log(a);
    clearInterval(intervalId);
    intervalId = null;
});

document.getElementById("reset").addEventListener("click", () => {
    // console.log(a);
    clearInterval(intervalId);
    intervalId = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    dt.innerHTML = "0 : 0 : 0 : 0";
});

let btns = document.querySelectorAll(".button");

btns.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.boxShadow =
            "inset -2px -2px 1px rgb(0, 0, 0, 0.652), inset 2px 2px 1px rgb(0, 0, 0, 0.652)";
        setTimeout(() => {
            element.style.boxShadow = "";
        }, 200);
    });
});
