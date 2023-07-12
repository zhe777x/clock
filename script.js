setInterval(setClock, 1000)
const Hour_hand = document.querySelector('[data-hours-hand]')
const Seconds_hand = document.querySelector('[data-seconds-hand]')
const Minutes_hand = document.querySelector('[data-minutes-hand]')
setClock()
function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(Seconds_hand, secondsRatio)
    setRotation(Hour_hand, hoursRatio)
    setRotation(Minutes_hand, minutesRatio)
}

function setRotation(element, rotation) {
    element.style.setProperty("--rotation", rotation * 360)
}
