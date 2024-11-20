// script that collects date inputs and displays it in it's respective spot on the webpage

function storeDates() {
    let date1 = document.getElementById('check-in').value
    let date2 = document.getElementById('check-out').value
    let numPeople = document.getElementById('party-size').value

    console.log(date1, date2, numPeople)
    if (date1.length == 10 && date2.length == 10 && numPeople != 'Party Size') {
        setItems(date1, date2, numPeople)
    }

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page)

    if (page == 'lodging.html') {
        updateHTML()
    } 

    if (page == 'transportation.html') {
        updateHTML2()
    } 
}

function setItems(input1, input2, input3) {
    localStorage.setItem("checkIn", input1)
    localStorage.setItem("checkOut", input2)
    localStorage.setItem("partySize", input3)
}

function updateHTML() {
    let checkIn = localStorage.getItem("checkIn")
    let checkOut = localStorage.getItem("checkOut")
    let partySize = localStorage.getItem("partySize")

    let checkInDis = document.getElementById('result-check-in')
    let checkOutDis = document.getElementById('result-check-out')
    let partySizeDis = document.getElementById('result-party-size')

    checkInDis.innerHTML = `Check-In Date: ${checkIn[5]}${checkIn[6]}/${checkIn[8]}${checkIn[9]}/${checkIn[0]}${checkIn[1]}${checkIn[2]}${checkIn[3]}`; 
    checkOutDis.innerHTML = `Check-Out Date: ${checkOut[5]}${checkOut[5]}/${checkOut[8]}${checkOut[9]}/${checkOut[0]}${checkOut[1]}${checkOut[2]}${checkOut[3]}`; 
    partySizeDis.innerHTML = `Party Size: ${partySize}`
}

function updateHTML2() {
    let checkIn = localStorage.getItem("checkIn")
    let checkOut = localStorage.getItem("checkOut")
    let partySize = localStorage.getItem("partySize")

    let checkInDis = document.getElementById('result-check-in')
    let checkOutDis = document.getElementById('result-check-out')
    let partySizeDis = document.getElementById('result-party-size')

    checkInDis.innerHTML = `Arrival Date: ${checkIn[5]}${checkIn[6]}/${checkIn[8]}${checkIn[9]}/${checkIn[0]}${checkIn[1]}${checkIn[2]}${checkIn[3]}`; 
    checkOutDis.innerHTML = `Departure Date: ${checkOut[5]}${checkOut[5]}/${checkOut[8]}${checkOut[9]}/${checkOut[0]}${checkOut[1]}${checkOut[2]}${checkOut[3]}`; 
    partySizeDis.innerHTML = `Party Size: ${partySize}`
}

function displayInfo() {
    let checkIn = localStorage.getItem("checkIn")
    let checkOut = localStorage.getItem("checkOut")
    let partySize = localStorage.getItem("partySize")

    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (checkIn != '' && checkOut != '' && partySize != 'Party Size' && page != 'index.html') {
        updateHTML()
    }

    else if (page == 'index.html') {
        storeDates()
    }
    
}

window.onload = function() {
    displayInfo()
    displayEventDates()
}

function randomDate() {
    start = new Date()
    end = new Date(start.getFullYear(), start.getMonth() + 1, 31)
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function displayEventDates() {
    //gets called on page load to generate dates that anywhere between 1 day to 1 month in the future

    console.log('called')

    let elements = document.getElementsByClassName("date-display")
    for (let i=0; i < elements.length; i++) {
        let newDate = randomDate().toLocaleDateString()
        elements[i].innerHTML = newDate
    }
}

