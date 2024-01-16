var tl = gsap.timeline();

tl.from("nav h3", {
    y:-50,
    opacity:0,
    delay:0.1,
    duration:0.4,
    stagger:0.1,
})

tl.from("#page1 h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4,
})

tl.from(" #page1 img",{
    rotate:45,
    opacity:0,
    x:100,
    duration:0.3,
    stagger:0.5,
})

tl.from("#nav-btm h4", {
    y:+50,
    opacity:0,
    duration:0.5,
    stagger:0.1,
})


// scollbar of gallery 

var left = document.querySelector("#btn-sec #left");
var right = document.querySelector("#btn-sec #right");
var scrollimg = document.querySelector(".scroll-img");

left.addEventListener("click",function(){
    scrollimg.scrollBy(350,0)
})

right.addEventListener("click",function(){
    scrollimg.scrollBy(-350,0)
})



const locoScroll = new LocomotiveScroll({
  el: document.querySelector('main'),
  smooth: true, // Enable smooth scrolling
  smoothMobile: false, // Disable smooth scroll on mobile devices if needed
  multiplier: 5, 
});

