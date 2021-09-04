"use strict";

var slidePosition, timer;

function plusSlides(n) {
    slideShow(slidePosition += n);
    clearInterval(timer);
    timer = setInterval(() => {
        slideShow(slidePosition += 1);
    }, 2000);
}

function currentSlide(n) {
    slideShow(slidePosition = n);
}


function slideShow(num) {

    let slides = document.getElementsByClassName("container");
    let dots = document.getElementsByClassName("dots");
    if(num < 0)
        slidePosition = slides.length - 1;
    else if(num >= slides.length)
        slidePosition = 0;

    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("enable");
    }

    slides[slidePosition].style.display = "block";
    dots[slidePosition].classList.add("enable");
}

window.onload = function name(params) {
    slidePosition = 0;
    slideShow(slidePosition);

    timer = setInterval(() => {
        slideShow(slidePosition += 1);
    }, 2000);
}

