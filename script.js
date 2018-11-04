
function initCalendar() {
    var container = document.getElementsByClassName("calendarContainer")[0]

    for(var i = 1; i <= 24; i++) {
        var date = new Date()
        date.setMonth(10)
        date.setDate(i)

        var divDay = document.createElement("div")
        divDay.setAttribute('data', date)
        divDay.setAttribute('onclick', 'checkDivDay(this)')

        divDay.innerHTML = "<p class='dayNumber'>"+i+"</p>"
        divDay.className = "calendarDay"
        container.appendChild(divDay)

        divDay.style.backgroundColor = '#bccce5';
    }
}   

function checkDivDay(element) {
    var selectedDate = new Date(element.getAttribute('data'))
    var currentDate = new Date()

    if(selectedDate.getMonth() == currentDate.getMonth() && selectedDate.getDate() <= currentDate.getDate()) {
        element.style.transition = "all .2s ease"
        element.style.backgroundImage = "url('./img/surprise/"+ selectedDate.getDate() +".gif')";
        element.style.backgroundSize = "cover"
    } else {
        alert("Don't rush!")
    }
}