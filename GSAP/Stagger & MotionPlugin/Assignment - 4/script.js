
    gsap.registerPlugin(MotionPathPlugin);

gsap.to(
    ".circle",
    {
        motionPath: {
            path: [
                {x:300,y:-100},
                {x:600,y:200},
                {x:900,y:-200},
            ],
        },
        duration: 5,
        repeat:-1,
        yoyo: true,
        ease: "ease-out"
    }
)