gsap.fromTo(
    ".box",
    {
        y:-75,
    },
    {
        y:75,
        duration: 1,
        stagger: {
            repeat: -1,
            yoyo: true,
            each: 0.1,
            from: "center"
        },
    }
)