let tl=gsap.timeline({defaults:{duration:0.5}});


    tl.from("#image",{
            
        opacity:0,
        x:-100,
        delay:0.5,
        duration:1,

    }
    )
    tl.from("#about h1",{
        opacity:0,
        scale:0.5,
        delay:-0.4,
        y:50,
    })
    gsap.from("#box1,#box2,#box3",{
        opacity:0,
        y:50,
        duration:1.3,
        scrollTrigger:{
            trigger:"workslider",
            scroller:"body",
            start:"25% 10%",
            end:"40% center",
            
            scrub:1,
        }
    })
    gsap.to("#content",
    {
        backgroundColor:"black",
        duration:2,
      
        scrollTrigger:{
            trigger:"#navbar",
            scroller:"body",
            start:"top top",
            end:"85% top",
            scrub:1,
            markers:true,
            toggleActions:"play none none reverse"
        }
    })
    gsap.to("#about",
    {
     
        duration:2,
      color:"wheat",
        scrollTrigger:{
            trigger:"#navbar",
            scroller:"body",
            start:"top top",
            end:"85% top",
            scrub:1,
            markers:true,
            toggleActions:"play none none reverse"
        }
    })
    gsap.to("#navbar",
    {
     
        duration:2,
      backgroundColor:"#e6ffff",
      height:"50px",
      opacity:1,
        scrollTrigger:{
            trigger:"#navbar",
            scroller:"body",
            start:"top top",
            end:"85% top",
            scrub:1,
            
            toggleActions:"play none none reverse"
        }
    })
    gsap.from("#certi",
    {

        opacity:0,
        x:-50,
        scale:0.5,
        duration:2,
        scrollTrigger:{
            trigger:"#navbar",
            scroller:"body",
            start:"top top",
            end:"85% top",
            scrub:1,
            
            toggleActions:"play none none reverse"
        }
    })
    


    