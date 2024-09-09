const birthday= '25 Dec 2024'
const daysElement= document.getElementById('days')
const hoursElement= document.getElementById('hours')
const minsElement= document.getElementById('mins')
const secondsElement= document.getElementById('seconds')

function countDown(){
    const birthdate= new Date(birthday)
    const currentDate= new Date()
    let diff= (birthdate-currentDate)/1000
    let days= Math.trunc(diff/3600/24)
    let hours=Math.trunc((diff/3600)%24)
    let mins=Math.trunc((diff/60)%60)
    let seconds= Math.trunc(diff%60)
    daysElement.innerText=formatTime(days)
    hoursElement.innerText=formatTime(hours)
    minsElement.innerText=formatTime(mins)
    secondsElement.innerText=formatTime(seconds)
    

}
function formatTime(time){
    return time<10 ? `0${time}`: time
}
setInterval(countDown,1000)
