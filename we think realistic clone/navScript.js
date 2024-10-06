
let previousScrollPosition = 0;
let topFlag=false;
let downFlag=false;

let navAnimation=gsap.timeline({paused: true})
navAnimation.to("nav",{
    top: -200,
    duration: 1,
    paddingBottom: "0rem",
    paddingTop: "0rem",
    ease: "expo.out"
});

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
    if(currentScrollPosition > 10){
        if (currentScrollPosition > previousScrollPosition) {
            if(downFlag===false){
                navAnimation.play()
                gsap.to(".navbar-brand, .nav-link",
                    {
                        fontSize: "1.5rem"          
                    }
                )
                downFlag=true
                topFlag=false
            }
        }
        
        else{
            if(downFlag===true || topFlag===false){
                navAnimation.reverse()
                if (previousScrollPosition < 250){
                    gsap.to(".navbar-brand, .nav-link",
                        {
                            fontSize: "2rem"           
                        }
                    )
                    topFlag=true
                }
                else{
                    gsap.to("nav",{
                        top: 0,
                        duration: 0.4,
                        paddingBottom: "1rem",
                        paddingTop: "1rem"
                    });
                }
                downFlag=false
            }
        }
    }

    previousScrollPosition = currentScrollPosition;
});