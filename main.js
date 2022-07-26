// Get DOM Elements
const modal = document.querySelector('#main-modal');
const microsoftModal = document.querySelector('.microsoft-content');
const appleModal = document.querySelector('.apple-content');
const metatModal = document.querySelector('.meta-content');

const microsoftModalBtn = document.querySelector('#microsoft-btn');
const appleModalBtn = document.querySelector('#apple-btn');
const metaModalBtn = document.querySelector('#meta-btn');

const closeMicrosoft = document.querySelector('#close-microsoft');
const closeApple = document.querySelector('#close-apple');
const closeMeta = document.querySelector('#close-meta');

// Events
microsoftModalBtn.addEventListener('click', microsoftOpenModal);
appleModalBtn.addEventListener('click', appleOpenModal);
metaModalBtn.addEventListener('click', metaOpenModal);

closeMicrosoft.addEventListener('click', closeM);
closeApple.addEventListener('click', closeA);
closeMeta.addEventListener('click', closeF);

window.addEventListener('click', outsideClick);

// Open
function microsoftOpenModal() {
    microsoftModal.style.display = 'block';
    appleModal.style.display = 'none';
    metatModal.style.display = 'none';
}
function appleOpenModal() {
    appleModal.style.display = 'block';
    microsoftModal.style.display = 'none';
    metatModal.style.display = 'none';
}
function metaOpenModal() {
    metatModal.style.display = 'block';
    microsoftModal.style.display = 'none';
    appleModal.style.display = 'none';
}

// Close
function closeM() {
    microsoftModal.style.display = 'none';
}
function closeA() {
    appleModal.style.display = 'none';
}
function closeF() {
    metatModal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        microsoftModal.style.display = 'none'; appleModal.style.display = 'none'; metatModal.style.display = 'none'; 
    }
} 
