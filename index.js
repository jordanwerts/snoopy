function timStop() {
    let house = document.getElementById("house").checked;
    let bed = document.getElementById("bed").checked;
    let plane = document.getElementById("plane").checked;
    if (house && bed || bed && plane || house && plane) {
        alert("Stop TIM!")
    }

}