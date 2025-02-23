/**
 * Write your challenge solution here
 */
const bulb = document.getElementById('bulb');
const bulbBase = document.getElementById('bulb-base');
const stat = document.getElementById('status');


const txtColor = (color) => {
    document.body.style.color = color;
}
const bcgColor = (color) => {
    document.body.style.backgroundColor = color;
}

const btnSwitch = document.getElementById('toggleButton');
btnSwitch.addEventListener('click', () => {
    const bodyBackground = document.body.style.backgroundColor;
    
    if(!bodyBackground || bodyBackground == 'white'){
        txtColor('white');
        bcgColor('black');
        btnSwitch.innerText = 'Turn Off';
        bulb.style.backgroundColor = 'yellow';
        bulb.style.boxShadow = `
        0 0 20px rgba(255, 255, 0, 0.8), 
        0 0 40px rgba(255, 255, 0, 0.6), 
        0 0 60px rgba(255, 255, 0, 0.4)`;
        stat.innerText = 'Status: On';
    }
    else{
        txtColor('black');
        bcgColor('white');
        btnSwitch.innerText = 'Turn On';
        bulb.style.backgroundColor = '#333';
        bulb.style.boxShadow = `0 0 0px`;
        stat.innerText = 'Status: Off';
    }
})