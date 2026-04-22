import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageBanner from '../components/ui/PageBanner'

gsap.registerPlugin(ScrollTrigger);

import faqImage1 from "/images/Faqs/faq-image-01.jpg"
import faqImage2 from "/images/Faqs/faq-image-02.jpg"
import FAQItem from '../components/ui/FAQItem';
import MainBtn from '../components/ui/Buttons/MainBtn';

import work from "../assets/Data/Work.json"
import WorkCard from '../components/ui/Cards/WorkCard';

// import FAQItem from "../"

const Faqs = () => {
    const faqRef = useRef();
    const workRef = useRef();
    const headingRef = useRef();
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    useEffect(() => {
        if(!faqRef.current) return;

        const ctx = gsap.context(() => {
            const images = faqRef.current.querySelector(".faq-image");
            const faqs = faqRef.current.querySelectorAll(".faq-content");


                if (images) {
                    gsap.from(images,{
                        x: -50,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger:{
                            trigger: images,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    });
                }

                if (faqs.length > 0) {
                    gsap.from(faqs,{
                        x: 50,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger:{
                            trigger: faqs[0],
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    });
                }
            

        }, faqRef);

        return () => ctx.revert();
    },[]);

    useEffect(() => {
        if(!headingRef.current) return;

        const ctx = gsap.context(() => {
            const headingItems = headingRef.current.querySelectorAll(".content > *");

              
                    gsap.from(headingItems,{
                        y: 30,
                        opacity: 0,
                        stagger: 0.2,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger:{
                            trigger: headingRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    });
        }, headingRef);

        return () => ctx.revert();
    },[]);


  return (
    <>
    <PageBanner
            title="Faq's"
            currentPage="Faq's"
        />

        <div ref={faqRef} className="container py-[8%] mx-auto px-4 section-container items-center! gap-10 lg:gap-14">
        <div className="faq-image w-full lg:w-1/2 centered-row sm:flex-row flex-col gap-5 h-auto sm:h-90 xl:h-120">
            <img src={faqImage1} alt="faq-image" className='section-image rounded-sm'/>
            <img src={faqImage2} alt="faq-image" className='section-image rounded-sm'/>
        </div>

            <div className="faq-content w-full lg:w-1/2">
                <FAQItem 
                    question="What are the execution terms?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium unde quae officiis, dignissimos sit quis adipisci voluptas consectetur explicabo blanditiis illo, quidem delectus."
                    isOpen={openIndex === 0}
                    onClick={() => toggleFAQ(0)}
                />

                <FAQItem 
                    question="How do I choose an architect?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque nihil aspernatur! Voluptates ad laboriosam in, iure dolore facilis dolor dolorem doloremque fugiat iusto. Ducimus nulla."
                    isOpen={openIndex === 1}
                    onClick={() => toggleFAQ(1)}
                />

                    <FAQItem 
                    question="Where to meet for the project review?"
                    answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi praesentium necessitatibus perspiciatis, laudantium dolor obcaecati explicabo ab dolores est. Deleniti eius libero quisquam, minus sunt porro deserunt? Eveniet excepturi animi similique quis iusto, tenetur."
                    isOpen={openIndex === 2}
                    onClick={() => toggleFAQ(2)}
                />

                    <FAQItem 
                    question="How much does a consultation cost?"
                    answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque non magni est fugiat impedit ducimus autem nostrum, eum enim quae placeat perferendis ipsam laborum."
                    isOpen={openIndex === 3}
                    onClick={() => toggleFAQ(3)}
                    />
            </div>
        </div>

        <div ref={headingRef} className="bg-light-yellow py-[8%]">
            <div className="container mx-auto px-4 section-container">
            <div className="text-center w-full content">
                <span className="title-span">design studio</span>
                  <h2 className="heading-1 mb-5">
                <span className="text-coffee">Our services make your home </span> <br />
                comfortable and cozy
                 </h2>
                 <MainBtn text={"Read More"} className='bg-black! text-white!' />
                 </div>
            </div>
        </div>

        <div ref={workRef} className="works container mx-auto px-4 py-[8%]">
            <div className="w-full mb-10 content">
            <span className="title-span">Our Work</span>
                  <h2 className="heading-1 mb-5">
                    Every idea is
                <span className="text-coffee"> possible </span> <br />
                 </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10 work-grid">
                {work.slice(0,3).map((work) => (
                    <WorkCard 
                        key={work.id}
                        id={work.id}
                        number={work.number}
                        title={work.title}
                        image={work.image}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default Faqs

