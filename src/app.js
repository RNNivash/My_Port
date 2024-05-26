const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

const blog = document.getElementById('blog')
const online = document.getElementById('online')
const attendance = document.getElementById('attendance')
const investment = document.getElementById('investment')
const weather = document.getElementById('weather')

blog.addEventListener('click', () => {
    window.open('https://github.com/RNNivash/Chat_Nests', '_blank')
})

finger.addEventListener('click', () => {
    window.open('https://github.com/RNNivash/Finger-Dasher', '_blank')
})

online.addEventListener('click', () => {
    window.open('https://github.com/RNNivash/Eatry.git', '_blank')
})

attendance.addEventListener('click', () => {
    window.open('https://github.com/RNNivash/Smart_attendance_system', '_blank')
})

weather.addEventListener('click', () => {
    window.open('https://github.com/RNNivash/Sky_scope', '_blank')
})

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)

