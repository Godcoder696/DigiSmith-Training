gsap.registerPlugin(MotionPathPlugin);

let tl= gsap.timeline({repeat: -1, repeatDelay: 0.4,yoyo:true})

tl.to(
    ".circle1",
    {
        motionPath:{
            path:[
                {x:500,y:200},
                {x:-10,y:600},
                {x:700,y:200},
            ]
        },
        duration: 2,
        repeat: -1,
        yoyo:true
    }
)
tl.to(
    ".circle3",
    {
        motionPath:{
            path:[
                {x:-500,y:200},
                {x:10,y:600},
                {x:-700,y:200},
            ]
        },
        duration: 2,
        repeat: -1,
        yoyo:true
    }
)
tl.to(
    ".circle2",
    {
        y: 600,
        duration: 2,
        repeat:-1,
        yoyo: true,
        ease: "bounce"
    }
)

function playAnim() {
    tl.play();
}
function pauseAnim() {
    tl.pause();
}