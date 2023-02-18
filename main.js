// Login / register----------------------

const loginMenu = document.querySelector('header .active');
const loginShow = document.querySelector('.login-container');
const btnClose = document.querySelector('#btn-close');
loginMenu.addEventListener('click', () => {
    loginShow.style.clipPath = `circle(100% at 50% 50%)`;
})
btnClose.addEventListener('click', () => {
    loginShow.style.clipPath = `circle(0 at 50% 50%)`;
})

const btnToggle = document.querySelectorAll('.next-log');
const resForm = document.querySelector('#res');
btnToggle.forEach(item => {
    item.addEventListener('click', () => {
        resForm.classList.toggle('hidden');
    })
})

// Menu Toggle----------------------

const menuToggle = document.querySelectorAll('header .menu');
const menu = document.querySelector('header ul');
menuToggle.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('menu-toggle');
    })
})

// Banner Auto Slide---------------------

const banner = document.querySelector('.banner');
const images = document.querySelectorAll('.banner img');
const dots = document.querySelectorAll('.banner .nav-dot');
const prev = document.querySelector('.banner .prev');
const next = document.querySelector('.banner .next');

let slideIndex = 0;
slideShow(slideIndex);
function slideShow(n) {
    if (slideIndex > images.length - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }

    let i;
    for (i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' dot-active','');
    }
    images[slideIndex].style.display = "block";
    dots[slideIndex].className += ' dot-active';
}
dots.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        slideShow(slideIndex = index);
    })
})
prev.addEventListener('click', ()=>{
    slideShow(slideIndex -= 1);
})
next.addEventListener('click', ()=>{
    slideShow(slideIndex += 1);
})

let run;
autoSlide();
function autoSlide() {
    run = setInterval(()=>{
        slideShow(slideIndex += 1);
    }, 2000)
}
banner.addEventListener('mouseover', ()=>{
    clearInterval(run);
    run = null;
})

banner.addEventListener('mouseout', ()=>{
    autoSlide();
})

// Lazy load Optimizer

document.addEventListener("DOMContentLoaded", ()=>{
    let lazyloaderImages = document.querySelectorAll('img.lazy');
    let lazyloaderThrottleTimeout;
    lazyloaderImages.forEach(img => {
        img.style.transform = `scale(0.5)`;
    })

    function lazyload() {
        if (lazyloaderThrottleTimeout) {
            clearTimeout(lazyloaderThrottleTimeout);
        }
        lazyloaderThrottleTimeout = setTimeout(()=>{
            let scrollTop = window.pageYOffset;
            lazyloaderImages.forEach(img =>{
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.style.transform = `scale(1)`;
                    img.style.transform = `2s`;
                }
            })
            if (lazyloaderImages.length = 0) {
                document.removeEventListener('scroll', lazyload);
                document.removeEventListener('resize', lazyload);
                document.removeEventListener('orientationChange', lazyload);
            }
        }, 200)
    }
    document.addEventListener('scroll', lazyload);
    document.addEventListener('resize', lazyload);
    document.addEventListener('orientationChange', lazyload);
})


//.............. Firebase...................//

// Your web app's Firebase configuration

// const firebaseConfig = {
//     apiKey: "AIzaSyA_xwhM0e3N7y2OWRyPhaErGl-J_h35CSM",
//     authDomain: "login-with-firebase-data-a88f5.firebaseapp.com",
//     projectId: "login-with-firebase-data-a88f5",
//     storageBucket: "login-with-firebase-data-a88f5.appspot.com",
//     messagingSenderId: "733752354417",
//     appId: "1:733752354417:web:96a7a2b1daf7ac1a61ddd0"

//   };

//   // Initialize Firebase

//   firebase.initializeApp(firebaseConfig);


