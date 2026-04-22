import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import bannerbg from "/images/Index/Banner/banner-bg.jpg";

gsap.registerPlugin(ScrollTrigger);


const Banner = () => {
    const playRef = useRef(null);
    const bannerRef = useRef(null);

    // mouse Parallax effect
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        if(playRef.current){
            playRef.current.style.transform = `translate(${x / 8}px,${y / 8}px)`
        }
    };

    const handleMouseLeave = () => {
        if(playRef.current){
            playRef.current.style.transform = "translate(0,0)"
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(playRef.current,{
                y: 50,
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top 90%",
                    toggleActions: "play reverse play reverse"
                },
            });
            
            gsap.fromTo(bannerRef.current,{
                scale: 0.6,
            },{
                scale: 1,
                scrollTrigger:{
                    trigger: bannerRef.current,
                    start:"top bottom",
                    end:"bottom top",
                    scrub: true,
                },
            }
        );
        }, bannerRef);

        return () => ctx.revert();
    },[]);

  return (
    <>
        <div className="container py-20 mx-auto px-4">
            <div
            ref={bannerRef}
            className="banner relative rounded-lg overflow-hidden bg-center bg-cover"
            style={{
                backgroundImage:`url(${bannerbg})`,
                height: "700px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            >
                <div className="overlay absolute inset-0 bg-black/20"></div>

                <div className="play-btn absolute inset-0 flex justify-center items-center">
                    <div
                        ref={playRef}
                        className="play flex border w-28 h-28 justify-center items-center border-white rounded-full text-white uppercase tracking-widest cursor-pointer"
                    >
                        Play
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner