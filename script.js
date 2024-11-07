
// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
//   console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



const crsr = document.querySelector("#cursor")
const cblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    cblur.style.left = dets.x - 200 + "px"
    cblur.style.top = dets.y - 200 + "px"
})
const h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })

})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "84px",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})

gsap.to("#main", {
    backgroundColor: "#000",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top: -25%",
        end: "top: -70%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
    // stagger:0.4 ,// userd for one by one targetting
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
    // stagger: 0.1,// userd for one by one targetting
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        markers: false,
        end: "top 65%",
        scrub: 1,
    }
})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})
gsap.from("#page4 h1", {
    y: 40,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 75%",
        scrub: 3,
    }
})