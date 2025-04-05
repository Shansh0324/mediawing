UnicornStudio.addScene({
    elementId: "gravityCoding", // id of the HTML element to render your scene in (the scene will use its dimensions)
    fps: 100, // frames per second (0-120) [optional]
    scale: 1,
    dpi: 1, // pixel ratio [optional]
    lazyLoad: true, // will not initialize the scene until it scrolls into view
    filePath: "./effect.json",
    interactivity: {
      // [optional]
      mouse: {
        disableMobile: true, // disable touch movement on mobile
      },
    },
  })
    .then((scene) => {
      // scene is ready
      // To remove a scene, you can use:
      // scene.destroy()
    })
    .catch((err) => {
      console.error(err);
    });


// Blob movement effect

var videoContainer = document.querySelector(".section-2");
var blob = document.querySelector("#blob");

videoContainer.addEventListener("mousemove", function(details){
  blob.style.transform = `translate(${details.clientX * 0.5}px, ${details.clientY * 0.3}px)`
})


// GSAP Code for section 2

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
 
  var part1 = gsap.timeline({
    scrollTrigger:{
      trigger: "#section2-1",
      start:"10% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part1.to("#top-nav-sec2",{
    backgroundColor: "#fd7024"
  }, 'a')
  .from("#section2-1 h1, #section2-1 p, #section2-1 img",{
    opacity: 0,
    y: -850,
  }, 'a')
  .to("#section2-1 h1, #section2-1 p, #section2-1 img",{
    opacity:0,
    y:850,
  })


  var part2 = gsap.timeline({
    scrollTrigger:{
      trigger: "#section2-2",
      start:"10% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part2.to("#top-nav-sec2-1",{
    backgroundColor: "#fd7024"
  }, 'b')
  .from("#section2-2 h1, #section2-2 p, #section2-2 img",{
    opacity: 0,
    y: -850,
  }, 'b')
  .to("#section2-2 h1, #section2-2 p, #section2-2 img",{
    opacity:0,
    y:850,
  })


  var part3 = gsap.timeline({
    scrollTrigger:{
      trigger: "#section2-3",
      start:"10% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part3.to("#top-nav-sec2-2",{
    backgroundColor: "#fd7024"
  }, 'c')
  .from("#section2-3 h1, #section2-3 p, #section2-3 img",{
    opacity: 0,
    y: -850,
  }, 'c')
  .to("#section2-3 h1, #section2-3 p, #section2-3 img",{
    opacity:0,
    y:850,
  })


  var part4 = gsap.timeline({
    scrollTrigger:{
      trigger: "#section2-4",
      start:"10% 100%",
      end:"90% 0%",
      scrub: true,
      // markers: true,
      duration: 1,
    }
  });
  part4.to("#top-nav-sec2-3",{
    backgroundColor: "#fd7024"
  }, 'c')
  .from("#section2-4 h1, #section2-4 p, #section2-4 img",{
    opacity: 0,
    y: -850,
  }, 'c')
  .to("#section2-4 h1, #section2-4 p, #section2-4 img",{
    opacity:0,
    y:850,
  })


 });

 //Section 3 animation
 
 var section3 = document.querySelector(".section3");
 var s3value = document.querySelectorAll(".svalue");

section3.addEventListener("mousemove",function(data){
    s3value.forEach((elem)=>{
      const position = elem.getAttribute("value");

      var x = (window.innerWidth - data.clientX * position)/50;
      var y = (window.innerHeight - data.clientY * position)/50;

      // console.log(x,y);
      elem.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
})

//  Section3 gsap animation

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  var part5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      start: "50% 100%",
      end: "50% 70%",
      scrub: true,
      // markers: true, // Remove this in production
    }
  });

  part5
    .from(".pract-lft-section3, .your-lft-section3, #arrow", {
      y: 200,
    }, 'd')
    .to("#star1,#star2", {
      width : "5vw",
    }, 'd')
    .to("#star2", {
      marginRight : "2vw",
    }, 'd')
});

// Initialize Lenis
// const lenis = new Lenis();

// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// gsap.registerPlugin(ScrollTrigger);

// document.querySelectorAll(".elem").forEach(elem => {
//   let image = elem.querySelector("img");
//   let tl = gsap.timeline();

//   let xTransform = gsap.utils.random(-100, 100);

//   tl.set(image, {
//       transformOrigin: `${xTransform < 0 ? 0 : "100%"}`
//   },"start")
//   .to(image, {
//       scale: 0,
//       ease: "none",
//       scrollTrigger: {
//           trigger: image,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//       }
//   }, "start")
//   .to(elem,{
//     xPercent: xTransform,
//     ease: "none",
//     scrollTrigger: {
//       trigger: image,
//       start: "top bottom",
//       end: "bottom top",
//       scrub: true,
//     }
//   })
// });

// main-1 section animation
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    // markers:true,
    pin:true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
},'a')
tl.to("#row-div-2",{
    marginTop: "5%"
},'a')
tl.to("#row-div-3",{
    marginTop: "-2%"
},'a')
tl.to("#row-div-4",{
    marginTop: "-8%"
},'a')
tl.to("#row-div-5",{
    marginTop: "-10%"
},'a')
tl.to(".overlay-div h1",{
    opacity: "1",
    delay: 0.2,
},'a')
tl.to(".overlay-div",{
    backgroundColor: "#000000b4",
},'a')
tl.to(".scrolling",{
    width: "100%",
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop: 0
})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl3.to(".content-2 .text-area-hover h1",{
    width:"100%",
})
tl3.to(".content-2 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-4",
        start:"50% 50%",
        end: "200% 50%",
        pin: true,
        // markers: true,
        scrub: 1,
    },  
});
tl4.to(".c-one",{
    marginTop: "-25%",
    opacity:"1",
}, 'sct-1')
tl4.to(".c-two",{
    opacity:"1",
}, 'sct-2')
tl4.to(".c-one",{
    marginTop: "-100",
    opacity:"0",
}, 'sct-2')
tl4.to(".c-three",{
    opacity:"1",
}, 'sct-3')
tl4.to(".c-two",{
    opacity:"0",
}, 'sct-3')
tl4.to(".c-one",{
    marginTop:"-180%",
}, 'sct-3')
tl4.to(".c-one",{
    marginTop:"-230%",
}, 'sct-4')
tl4.to(".c-three",{
    opacity:"0",
}, 'sct-4')
tl4.to(".cir-part-4",{
    marginLeft:"100%",
    rotate: 360
}, 'sct-4')


let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-5",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl5.to(".part-5 .text-area-hover h1",{
    width:"100%",
})
tl5.to(".part-5 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})


let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-6",
        start:"0% 70%",
        end: "15% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl6.to(".rounded-div-wrapper-6",{
    height:"0%",
    marginTop: 0,
})

let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-7",
        start:"50% 50%",
        end: "300% 50%",
        pin:true,
        // markers: true,
        scrub: 1,
    },  
});
tl7.to("#demo",{
    bottom:"7%",
})
tl7.to(".our-work-txt-div",{
    height:"60vh",
}, 'height')
tl7.to(".our-work-txt",{
    height:"60vh",
}, 'height')
tl7.to("#our",{
    left:"0%",
}, 'height')
tl7.to("#work",{
    right:"0%",
}, 'height')
tl7.to(".scroll-img",{
    marginTop:"-300%",
})


document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  if (event.key === "F12" || 
      (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) || 
      (event.ctrlKey && event.key === "U")) {
      event.preventDefault();
  }
});


function navigateTo(page) {
  window.location.href = page;
}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        return false;
    }
});