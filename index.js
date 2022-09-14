let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let homenum = 0
let guestnum = 0

homeEl.textContent = homenum
guestEl.textContent = guestnum


function add1() {
    let result = homenum + 1
    homeEl.textContent = result
    homenum = result
}

function add2() {
    let result = homenum + 2
    homeEl.textContent = result
    homenum = result
}

function add3() {
    let result = homenum + 3
    homeEl.textContent = result
    homenum = result
}


function addone() {
    let result = guestnum + 1
    guestEl.textContent = result
    guestnum = result
}

function addtwo() {
    let result = guestnum + 2
    guestEl.textContent = result
    guestnum = result
}

function addthree() {
    let result = guestnum + 3
    guestEl.textContent = result
    guestnum = result
}

function newgame() {
    homenum = 0
    guestnum = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}

