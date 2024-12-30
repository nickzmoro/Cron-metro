let numberSecond = 0;
let numberMs = 0;
let cronSecond
let cronMs

const second = document.querySelector(".sec")
const ms = document.querySelector(".ms")

function play() {
    cronSecond = setInterval(() => {
        numberSecond++;
        second.innerHTML = numberSecond
    }, 1000);

    cronMs = setInterval(() => {
        numberMs++;
        ms.innerHTML = numberMs

        if (numberMs === 9) {
            numberMs = -1
        }
    }, 100)
}

function pause() {
    clearInterval(cronSecond);
    clearInterval(cronMs);
}

function restart() {
    numberSecond = 0;
    second.innerHTML = 0;
    ms.innerHTML = 0;
}