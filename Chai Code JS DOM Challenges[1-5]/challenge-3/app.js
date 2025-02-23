/**
 * Write your challenge solution here
 */
const inputName = document.getElementById('nameInput');
const inputTitle = document.getElementById('jobInput');
const inputAge = document.getElementById('ageInput');
const inputBio = document.getElementById('bioInput');

let displayName = document.getElementById('nameDisplay');
let displayJob = document.getElementById('jobDisplay');
let displayAge = document.getElementById('ageDisplay');
let displayBio = document.getElementById('bioDisplay');

inputName.addEventListener('input', () => {
    displayName.innerText = inputName.value;
})
inputTitle.addEventListener('input', () => {
    displayJob.innerText = inputTitle.value;
})
inputAge.addEventListener('input', () => {
    displayAge.innerText = inputAge.value;
})
inputBio.addEventListener('input', () => {
    displayBio.innerText = inputBio.value;
})