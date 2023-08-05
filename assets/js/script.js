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

// Header Variables

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]')
const mobileMenu = document.querySelectorAll('[data-mobile-menu]')
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]')
const overlay = document.querySelector('[data-overlay]')
for (let i=0 ; i< mobileMenuOpenBtn.length; i++){
   
    // Mobile menu functions
    const mobileMenuCoseFunc = function (){
        mobileMenu[i].classList.remove('active');
        // overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function (){
        mobileMenu[i].classList.add('active');
        // overlay.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCoseFunc);
    // overlay.addEventListenser('click', mobileMenuCoseFunc);
}


// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-menu]')
const accordion = document.querySelectorAll('[data-accordion]')

for( let i=0 ; i<accordionBtn.length; i++){

    console.log("Hello ");
    accordionBtn[i].addEventListener('click', function (){
        const clickedBtn = this.nextElementSibling.classList.contains('active');
        for(let i=0; i<accordion.length; i++){
            if(clickedBtn){ break;}
            if (accordion[i].classList.contains('active')){
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');
            }
        }
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    });
}