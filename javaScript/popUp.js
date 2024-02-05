const projects = [{
  name: 'Multi-Post Stories Gain+Glory',
  technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
  source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
},
{
  name: 'Multi-Post Stories Gain+Glory',
  technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
  source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
},
{
  name: 'Multi-Post Stories Gain+Glory',
  technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
  source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
},
{
  name: 'Multi-Post Stories Gain+Glory',
  technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
  source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
},
{
  name: 'Multi-Post Stories Gain+Glory',
  technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
  source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
},
{
  name: 'Multi-Post Stories Gain+Glory',
  technologies: `
          <li>Ruby on Rails</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>`,
  source: '<p class="btn"><a href="#" onclick="openModal()">See project</a></p>',
},
];

const dynamicWorkSecton = document.getElementById('worksection');

for (let i = 0; i < projects.length; i += 1) {
  const fetch = document.getElementById('worksection').innerHTML;
  dynamicWorkSecton.innerHTML = `
    <div class="card item1">
      <div class="card-info">
        <h3>${projects[i].name}</h3>
        <ul>
          ${projects[i].technologies}
        </ul>
        <div class="btnbar">
          ${projects[i].source}
        </div>
      </div>
    </div>${fetch}`;
}

const myModal = document.getElementById('popup');

function openModal() {
  document.getElementById('popup-wrapper').style.display = 'block';
}

function closeModals() {
  document.getElementById('popup-wrapper').style.display = 'none';
}
openModal();
closeModals();

function closeModal(event) {
  if (event.target === myModal) {
    document.getElementById('popup-wrapper').style.display = 'none';
  }
}

window.addEventListener('click', closeModal);

const form = document.getElementById('formV');
const email = document.getElementById('emailV');
const myName = document.getElementById('nameV');
const errorMsg = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  const msg = [];
  const formData = {
    inEmail: email.value,
    inName: myName.value,
  };

  const lowerCaseRe = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!lowerCaseRe.test(formData.inEmail)) {
    msg.push('Use only lower case letters');
  }

  if (msg.length > 0) {
    e.preventDefault();
    errorMsg.innerText = msg.join(', ');
  }

  localStorage.setItem('nameValue', formData.inName);
  localStorage.setItem('emailValue', formData.inEmail);
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('nameValue') && localStorage.getItem('emailValue')) {
    myName.value = localStorage.getItem('nameValue');
    email.value = localStorage.getItem('emailValue');
  }
});