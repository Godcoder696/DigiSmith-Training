// Assignment 1
gsap.to(
    ".box",
    {
        rotation: 360,
        repeat: -1,
        x:200,
        duration: 1,
        ease: "smooth",
        yoyo: true
    }
)

// Assignment - 2  
document.querySelector(".myButton").addEventListener("mouseover",(e)=>{
    gsap.fromTo(
        e.currentTarget,
        {
            scale: 1
        },
        {
            scale:1.5,
            duration: 1,
            repeat: 1
        }
    )
})
document.querySelector(".myButton").addEventListener("mouseleave",(e)=>{
    gsap.fromTo(
        e.currentTarget,
        {
            scale: 1.5
        },
        {
            scale:1,
            duration: 1,
            repeat: 1
        }
    )
})

// Assignment - 3
gsap.to(
    ".resp-box",
    {
        rotation: 360,
        x: 200,
        repeat: Infinity,
        duration: 2,
        yoyo: true
    }
)

// Assignment - 4
var timeline= gsap.timeline({repeat:Infinity, repeatDelay: 0.4, yoyo: true})

timeline.to(".box1",{
    x: 500,
    duration: 0.5
})
timeline.to(".box2",{
    x: 400,
    duration: 0.5
})
timeline.to(".box3",{
    x: 300,
    duration: 0.5
})

// Assigment - 5
var tl= gsap.timeline({repeat:Infinity,repeatDelay: 0.2,yoyo:true})

tl.fromTo(
    ".circle",
    {
        opacity: 0
    },
    {
        opacity: 1,
        y: 100,
        duration: 1
    }
)
tl.to(
    ".circle",
    {
        x:100,
    }
)
tl.fromTo(
    ".circle",
    {
        scale: 1,
    },
    {
        x: 100,
        scale: 2,
        ease: "bounce",
        duration: 1
    }
)