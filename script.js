function clock() {
    let hour = document.getElementById("hour"),
    minute = document.getElementById("min"),
    second = document.getElementById("second"),
    ampm = document.getElementById("mid");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var mid = "AM";

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = mid;
}

var interval = setInterval(clock, 1000)