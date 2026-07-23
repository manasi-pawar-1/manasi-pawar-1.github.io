/*==========================================
            PORTFOLIO SCRIPT
==========================================*/

// ================= LOADER =================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1000);

});

// ================= TYPING EFFECT =================

const typing = document.querySelector(".typing");

const words = [

"Software Developer",

"Python Developer",

"Django Developer",

"Java Developer",

"MCA Student",

"Open to Internship"

];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[wordIndex];

if(!isDeleting){

typing.textContent = currentWord.substring(0,letterIndex++);

if(letterIndex > currentWord.length){

isDeleting = true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent = currentWord.substring(0,letterIndex--);

if(letterIndex < 0){

isDeleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(type,isDeleting ? 50 : 120);

}

type();

// ================= CURSOR GLOW =================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

// ================= SCROLL NAV =================

window.addEventListener("scroll",()=>{

const nav = document.querySelector(".navbar");

if(window.scrollY > 40){

nav.style.background = "rgba(8,18,34,.95)";

nav.style.boxShadow = "0 10px 35px rgba(0,0,0,.4)";

}else{

nav.style.background = "rgba(255,255,255,.06)";

nav.style.boxShadow = "none";

}

});

// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(

".project-card,.skill-card,.about-card,.timeline-item,.certificate-card"

);

window.addEventListener("scroll",reveal);

function reveal(){

const trigger = window.innerHeight - 120;

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.classList.add("active");

}

});

}

reveal();

// ================= COUNTER =================

const counters = document.querySelectorAll(".about-info h1");

let started = false;

window.addEventListener("scroll",()=>{

const section = document.querySelector(".about");

if(!section) return;

const top = section.offsetTop - 350;

if(window.scrollY > top && !started){

started = true;

counters.forEach(counter=>{

const target = parseInt(counter.innerText);

let count = 0;

const update = ()=>{

count++;

counter.innerText = count + "+";

if(count < target){

requestAnimationFrame(update);

}

}

update();

});

}

});

// ================= ACTIVE LINK =================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(sec=>{

const top = window.scrollY;

if(top >= sec.offsetTop - 150){

current = sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") == "#" + current){

link.classList.add("active");

}

});

});

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

// ================= SMOOTH BUTTON ANIMATION =================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform = "translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform = "translateY(0) scale(1)";

});

});

// ================= PROJECT CARD HOVER =================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

card.style.background =

`radial-gradient(circle at ${x}px ${y}px,

rgba(79,140,255,.18),

rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});

// ================= CONTACT FORM =================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

// ================= YEAR =================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =

`© ${year} Manasi Pawar | All Rights Reserved`;

}