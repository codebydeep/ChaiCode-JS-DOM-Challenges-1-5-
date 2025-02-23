/**
 * Write your challenge solution here
 */
const text = document.getElementById('mainHeading');
function changeColor(color){
    text.style.color = color;
}

const redBtn = document.getElementById('redButton');
redBtn.addEventListener('click', () => {
    changeColor('red');
})

const greenBtn = document.getElementById('greenButton');
greenBtn.addEventListener('click', () => {
    changeColor('green');
})

const blueBtn = document.getElementById('blueButton');
blueBtn.addEventListener('click', () => {
    changeColor('blue');
})


const purpleBtn = document.getElementById('purpleButton');
purpleBtn.addEventListener('click', () => {
    changeColor('purple');
})


const resetBtn = document.getElementById('resetButton');
resetBtn.addEventListener('click', () => {
    changeColor('black');
})