gsap.fromTo(
    ".box",
    {
        x: 200,
        // ease: "bounce"
    },
    {
        x: -200,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "ease-in"
    }
)
gsap.fromTo(
    ".box1",
    {
        x: -200,
        // ease: "bounce"
    },
    {
        x: 200,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "ease-in"
    }
)