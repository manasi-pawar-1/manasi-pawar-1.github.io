/*==========================================
        PREMIUM PARTICLE BACKGROUND
==========================================*/


const canvas = document.createElement("canvas");

canvas.id = "particles";

document.body.appendChild(canvas);


const ctx = canvas.getContext("2d");


let particles = [];

let mouse = {

x:null,
y:null,
radius:120

};


// ================= CANVAS SIZE =================


function resizeCanvas(){

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

}


resizeCanvas();


window.addEventListener("resize",resizeCanvas);


// ================= MOUSE EFFECT =================


window.addEventListener("mousemove",(e)=>{

mouse.x = e.clientX;

mouse.y = e.clientY;

});


window.addEventListener("mouseleave",()=>{

mouse.x=null;

mouse.y=null;

});



// ================= PARTICLE OBJECT =================


class Particle{


constructor(){

this.x = Math.random()*canvas.width;

this.y = Math.random()*canvas.height;


this.size = Math.random()*2.5+1;


this.speedX = Math.random()*0.6-0.3;

this.speedY = Math.random()*0.6-0.3;


}


update(){

this.x += this.speedX;

this.y += this.speedY;



if(this.x < 0 || this.x > canvas.width){

this.speedX *= -1;

}


if(this.y < 0 || this.y > canvas.height){

this.speedY *= -1;

}



if(mouse.x && mouse.y){


let dx = this.x - mouse.x;

let dy = this.y - mouse.y;


let distance = Math.sqrt(dx*dx + dy*dy);


if(distance < mouse.radius){


this.x += dx / distance * 2;

this.y += dy / distance * 2;


}



}



}



draw(){


ctx.beginPath();


ctx.arc(

this.x,

this.y,

this.size,

0,

Math.PI*2

);


ctx.fillStyle = "rgba(79,140,255,0.7)";


ctx.fill();


}



}



// ================= CREATE PARTICLES =================


function init(){


particles=[];


let number = window.innerWidth < 768 ? 45 : 100;



for(let i=0;i<number;i++){


particles.push(new Particle());


}


}


init();




// ================= CONNECT PARTICLES =================


function connect(){


for(let a=0;a<particles.length;a++){


for(let b=a;b<particles.length;b++){



let dx = particles[a].x - particles[b].x;

let dy = particles[a].y - particles[b].y;


let distance = dx*dx + dy*dy;



if(distance < 10000){


ctx.beginPath();


ctx.strokeStyle = "rgba(79,140,255,0.08)";


ctx.lineWidth = 1;


ctx.moveTo(

particles[a].x,

particles[a].y

);


ctx.lineTo(

particles[b].x,

particles[b].y

);


ctx.stroke();



}



}


}



}




// ================= ANIMATION =================


function animate(){


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);



particles.forEach(p=>{


p.update();


p.draw();



});



connect();



requestAnimationFrame(animate);


}


animate();



// ================= CANVAS STYLE =================


canvas.style.position="fixed";

canvas.style.top="0";

canvas.style.left="0";

canvas.style.width="100%";

canvas.style.height="100%";

canvas.style.pointerEvents="none";

canvas.style.zIndex="-2";