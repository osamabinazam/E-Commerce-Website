'use static'


// Modal Variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn =  document.querySelector('[data-modal-close]')
const modalCloseOverlay= document.querySelector('[data-modal-overlay]')

// Modal Functions
const modalCloseFunc = function(){
    modal.classList.add('closed')
}

// Modal Event Listener
modalCloseOverlay.addEventListener('click', modalCloseFunc)
modalCloseBtn.addEventListener('click', modalCloseFunc)


// Notification-Toast variables
const notificationToast = document.querySelector('[data-toast]')
const toastClosed = document.querySelector('[data-toast-close]')

// Event Listener on Notification Toast Close Button
toastClosed.addEventListener('click', function (){
    notificationToast.classList.add('closed')
});