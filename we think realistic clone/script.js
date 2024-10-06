// home section (Namaste sec) text up animation
gsap.from(
    ".navbar-brand, .nav-link, .namaste-sec h2, .namaste-sec p",
    {
        y: 70,
        duration: 0.5,
        ease: "linear",
        opacity: 0,
        stagger: 0.12,
    }
);

// Video Section Scroll trigger animation
gsap.from(
    ".video-sec video",
    {
        width: 0,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".video-sec video",
            scroller: "body",
            start: "top 100%",
            end: "top 10%",
            scrub: 1,
        }
    }
);

// Text Section Scroll trigger animation
gsap.from(
    ".text",
    {
        y: 300,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger:{
            trigger: ".text",
            scroller: "body",
            start: "top 95%"
        }
    }
);

// Scrollable Text animation
gsap.to(".scroll-txt span",
{
    transform: "translateX(-68%)",
    scrollTrigger: {
        trigger: ".scroll-txt",
        scroller: "body",
        start: "top -7%",
        end: "top -100%",
        pin: true,
        scrub: 2,
    }
}
)

// text & vdo animation
gsap.from(".txt-vdo div p",
{
    y: 100,
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".txt-vdo div p",
        scroller: "body",
        start: "top 85%",
        end: "top 70%",
        scrub: 1
    }
}
)

