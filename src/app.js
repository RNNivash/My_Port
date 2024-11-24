const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

const blog = document.getElementById('blog')
const online = document.getElementById('online')
const attendance = document.getElementById('attendance')
const investment = document.getElementById('investment')
const weather = document.getElementById('weather')

blog.addEventListener('click', () => {
    window.open('https://github.com/RNNivash/Zomato_Data_Analysis', '_blank')
})

finger.addEventListener('click', () => {
    window.open('https://github.com/RNNivash/OLA_Data_Analysis', '_blank')
})

online.addEventListener('click', () => {
    window.open('https://github.com/RNNivash/Employee_Performance_Insights', '_blank')
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

