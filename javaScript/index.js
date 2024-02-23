function applyMobileBehavior() {
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const menuLink1 = document.getElementById('menu-link1');
  const menuLink2 = document.getElementById('menu-link2');
  const menuLink3 = document.getElementById('menu-link3');
  const navBar = document.getElementById('navbar');

  function revealMenu() {
    navBar.style.left = '0';
  }

  function removeMenu() {
    navBar.style.left = '100%';
  }

  openMenu.onclick = revealMenu;
  closeMenu.onclick = removeMenu;

  document.addEventListener('click', (event) => {
    switch (event.target) {
      case menuLink1:
      case menuLink2:
      case menuLink3:
        navBar.style.left = '100%';
        break;
      default:
    }
  });
}

const mobileQuery = window.matchMedia('(max-width: 768px)');

function handleScreenChange(event) {
  if (event.matches) {
    applyMobileBehavior();
  } else {
    document.getElementById('navbar').style.left = '0';
  }
}

handleScreenChange(mobileQuery);

mobileQuery.addEventListener('change', handleScreenChange);

const projects = [
  {
    cardName: 'Favorite Books',
    image: 'images/favorite-book.png',
    technologies: ['JavaScript', 'SPA', 'CSS3', 'HTML5'],
    cardId: 'popupbtn1',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Git-flow', 'GitHub', 'JavaScript', 'Linters', 'SPA'],
    popupDes: "Favorite Books is a user-friendly application where users can list their favorite books along with the author's name. They can conveniently remove books from the list once they've finished reading them.",
    popupDesTwo: 'This unique project stands out as a Single Page Application (SPA) created solely with vanilla JavaScript, HTML, and CSS.',
    liveLink: 'https://al-amin-khan-shakil.github.io/Favorite-Books-02/',
    sourceCode: 'https://github.com/Al-Amin-Khan-Shakil/Favorite-Books-02',
  },
  {
    cardName: 'FinanceHorizons Business Conference',
    image: 'images/business.png',
    technologies: ['CSS3', 'JavaScript', 'HTML5'],
    cardId: 'popupbtn2',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Git-flow', 'GitHub', 'JavaScript', 'Linters', 'Mobile-first Design'],
    popupDes: 'FinanceHorizons Business Conference is a dynamic website designed to showcase expertise in responsiveness. Packed with comprehensive information about the business conference, this platform invites individuals to join and participate in the event.',
    popupDesTwo: 'Built with HTML, CSS, and JavaScript, the website ensures a seamless user experience across various devices.',
    liveLink: 'https://al-amin-khan-shakil.github.io/FinanceHorizons-Business-Conference/',
    sourceCode: 'https://github.com/Al-Amin-Khan-Shakil/FinanceHorizons-Business-Conference',
  },
  {
    cardName: 'To Do List',
    image: 'images/to-do-list.png',
    technologies: ['Webpack', 'CSS3', 'JavaScript', 'HTML5'],
    cardId: 'popupbtn3',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Git-flow', 'GitHub', 'Webpack', 'JavaScript', 'Linters'],
    popupDes: 'The To-Do List application is a handy tool for users to track their daily tasks efficiently. Users can create, edit, and delete tasks as needed, ensuring a streamlined organization of their responsibilities.',
    popupDesTwo: 'Built with Webpack, JavaScript, HTML5, and CSS3, this application offers a seamless user experience.',
    liveLink: 'https://al-amin-khan-shakil.github.io/To-Do-List-02/',
    sourceCode: 'https://github.com/Al-Amin-Khan-Shakil/To-Do-List-02',
  },
  {
    cardName: 'Math Magicians',
    image: 'images/math-magicians.png',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS3', 'HTML5'],
    cardId: 'popupbtn4',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Git-flow', 'GitHub', 'JavaScript', 'React', 'Linters'],
    popupDes: 'Math Magicians is a powerful calculator application that allows users to perform various mathematical operations including addition, subtraction, division, multiplication, and percentage calculations. Additionally, users can find inspiration from quotes by great individuals about mathematics. Built with JavaScript, React, HTML5, and CSS3.',
    popupDesTwo: 'NOTE: This application prioritizes functionality over responsiveness, ensuring seamless mathematical operations.',
    liveLink: 'https://calculator-app-sawb.onrender.com',
    sourceCode: 'https://github.com/Al-Amin-Khan-Shakil/math-magicians',
  },
  {
    cardName: 'Country Canvas',
    image: 'images/country-canvas.png',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS3', 'HTML5'],
    cardId: 'popupbtn5',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Linters', 'Git-flow', 'JavaScript', 'React', 'Redux'],
    popupDes: 'Country Canvas is an innovative educational app designed to provide users with comprehensive information about countries worldwide. Users can easily browse and categorize countries by continent, and clicking on a country reveals key details.',
    popupDesTwo: "It's built using JavaScript, React, and Redux, and ensures reliability with Jest for unit testing.",
    liveLink: 'https://country-canvas.onrender.com/',
    sourceCode: 'https://github.com/Al-Amin-Khan-Shakil/country-canvas',
  },
  {
    cardName: 'Budgetify',
    image: 'images/budgetify.png',
    technologies: ['Ruby on Rails', 'CSS3', 'JavaScript', 'PostgreSQL', 'Rspec'],
    cardId: 'popupbtn6',
    popupTitle: 'Keeping track of hundreds of components',
    popupTech: ['Linters', 'Git-flow', 'PostgreSQL', 'Ruby on Rails', 'Rspec'],
    popupDes: 'Budgetify is a user-friendly web application designed to empower individuals in managing their finances effectively. Users can log in to create expenses, record payments under each expense, and easily view the total amount spent on any expense category.',
    popupDesTwo: "It's built on a robust tech stack including Ruby, Ruby on Rails, and PostgreSQL. With comprehensive testing features like RSpec and Capybara, users can trust in the reliability and accuracy of their financial data.",
    liveLink: 'https://budgetify-x0fg.onrender.com/expenses/17',
    sourceCode: 'https://github.com/Al-Amin-Khan-Shakil/budgetify',
  },
];

const workSection = document.getElementById('worksection');

for (let i = 0; i < projects.length; i += 1) {
  const fetch = workSection.innerHTML;
  let technologiesHTML = '';

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    technologiesHTML += `<li>${projects[i].technologies[j]}</li>`;
  }

  const cardId = `cardItem${i}`;

  workSection.innerHTML = `
    <div class="card item1" id="${cardId}">
      <img src='${projects[i].image}' alt="project image" class="card-img">
      <div class="card-info">
        <h3>${projects[i].cardName}</h3>
        <ul>
          ${technologiesHTML}
        </ul>
        <div class="btnbar">
          <p class="btn"><a href="#${cardId}" id=${projects[i].cardId}>See Project</a></p>
        </div>
      </div>
    </div> ${fetch}`;
}

const modalContainer = document.getElementById('popup');
const popupOn1 = document.getElementById('popupbtn1');
const popupOn2 = document.getElementById('popupbtn2');
const popupOn3 = document.getElementById('popupbtn3');
const popupOn4 = document.getElementById('popupbtn4');
const popupOn5 = document.getElementById('popupbtn5');
const popupOn6 = document.getElementById('popupbtn6');
const popUp = document.getElementById('popup-wrapper');
const popupOn = [popupOn1, popupOn2, popupOn3, popupOn4, popupOn5, popupOn6];

function openModal() {
  popUp.style.display = 'block';
}

document.addEventListener('click', (event) => {
  function modalBehavior() {
    const index = popupOn.indexOf(event.target);
    function closeModal() {
      popUp.style.display = 'none';
    }

    function showWebsite(event) {
      if (event.target === modalContainer) {
        popUp.style.display = 'none';
      }
    }

    for (let i = 0; i < 1; i += 1) {
      modalContainer.innerHTML = `
        <div id="modal">
          <div class="topsection">
            <div class="offBTN" id="popup-offbtn">&times;</div>
            <div class="bgPhoto">
              <img src="${projects[index].image}" alt="project image" class="popUp-img">
            </div>
          </div>
          <div class="bottomsection">
            <div class="components">
              <div class="compo-title">
                  <h3 class="co-title">
                      ${projects[index].popupTitle}
                  </h3>
              </div>
              <div class="compo-links">
                <div class="moblink">
                  <a href="#">${projects[index].technologies[0]}</a>
                  <a href="#">${projects[index].technologies[1]}</a>
                  <a href="#">${projects[index].technologies[2]}</a>
                </div>
                <div class="desklink">
                  <a href="#">${projects[index].popupTech[0]}</a>
                  <a href="#">${projects[index].popupTech[1]}</a>
                  <a href="#">${projects[index].popupTech[2]}</a>
                  <a href="#">${projects[index].popupTech[3]}</a>
                  <a href="#">${projects[index].popupTech[4]}</a>
                </div>
              </div>
            </div>
            <div class="pragraph">
              <p>${projects[index].popupDes}</p>
              <p>${projects[index].popupDesTwo}</p>
            </div>
            <div class="modalbtn">
              <a href="${projects[index].liveLink}" target="_blank">See live <i class="fa fa-external-link"> </i></a>
              <a href="${projects[index].sourceCode}" target="_blank">See source <i class="fa fa-github"></i> </a>
            </div>
          </div>
        </div>`;
    }

    const popupOff = document.getElementById('popup-offbtn');

    document.addEventListener('click', showWebsite);
    popupOff.onclick = closeModal;
    modalContainer.onclick = showWebsite;
  }

  switch (event.target) {
    case popupOn[0]:
    case popupOn[1]:
    case popupOn[2]:
    case popupOn[3]:
    case popupOn[4]:
    case popupOn[5]:
      modalBehavior();
      openModal();
      break;
    default:
  }
});

const mainForm = document.getElementById('formV');
const emailInput = document.getElementById('emailV');
const nameInput = document.getElementById('nameV');

const setError = (message) => {
  const errorDisplay = mainForm.querySelector('.error');

  errorDisplay.innerHTML = message;
  errorDisplay.style.display = 'block';
  errorDisplay.style.color = '#c6231b';
};

const setSuccess = () => {
  const errorDisplay = mainForm.querySelector('.error');

  errorDisplay.innerHTML = '';
  errorDisplay.style.display = 'none';
};

const validateInputs = () => {
  const emailValue = emailInput.value.trim();

  if (emailValue !== emailValue.toLowerCase()) {
    setError('The email should be in lower case');
  } else {
    setSuccess();
    mainForm.submit();
    const clientStore = {
      storeEmail: emailInput.value,
      storeName: nameInput.value,
    };
    localStorage.setItem('clientStore', JSON.stringify(clientStore));
  }
};

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

document.addEventListener('DOMContentLoaded', () => {
  const storeData = localStorage.getItem('clientStore');
  if (storeData) {
    const formData = JSON.parse(storeData);
    emailInput.value = formData.storeEmail;
    nameInput.value = formData.storeName;
  }

  const sections = document.querySelectorAll('.item');

  const handleScroll = () => {
    const bottomScreen = window.innerHeight + window.scrollY;

    sections.forEach((section) => {
      const { top } = section.getBoundingClientRect();
      const sectionTop = top + window.scrollY;

      if (bottomScreen >= sectionTop + 60) {
        section.classList.add('appear');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});