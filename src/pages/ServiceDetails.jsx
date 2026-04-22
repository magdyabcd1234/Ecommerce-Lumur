import React,{ useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PageBanner from '../components/ui/PageBanner';
import { useParams } from 'react-router-dom';

import services from "../assets/Data/Services.json"


gsap.registerPlugin(ScrollTrigger);

import galleryImage1 from "/images/Gallery/gallery-image-05.jpg"
import galleryImage2 from "/images/Gallery/gallery-image-06.jpg"
import galleryImage3 from "/images/Gallery/gallery-image-08.jpg"
import MainBtn from '../components/ui/Buttons/MainBtn';
import { Mail, MapPin, Phone } from 'lucide-react';

const ServiceDetails = () => {
    const serviceDetailsRef = useRef();

    const { id } = useParams();

    const service = services.find((item) => item.id === Number(id));

    if(!service) return <p>Service not found</p>

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mainImage = serviceDetailsRef.current.querySelector(".main-image");
            const title = serviceDetailsRef.current.querySelector(".main-title");
            const paras = serviceDetailsRef.current.querySelectorAll(".para");
            const galleryImgs = serviceDetailsRef.current.querySelectorAll(".gallery-img");
            const bottomImage = serviceDetailsRef.current.querySelector(".bottom-image");
            const formTitle = serviceDetailsRef.current.querySelector(".form-title");
            const form = serviceDetailsRef.current.querySelector(".contact-form");
            const inputs = serviceDetailsRef.current.querySelectorAll(".input-wrapper");
            const contactItems = serviceDetailsRef.current.querySelectorAll(".contact-item");
            const button = serviceDetailsRef.current.querySelectorAll(".submit-btn");

                if(mainImage){
                    gsap.from(mainImage,{
                        scale: 1.1,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: mainImage,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                
                if(title){
                    gsap.from(title,{
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: title,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                paras.forEach((para) => {
                    gsap.from(para,{
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: para,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    })
                })

                if(galleryImgs.length){
                    gsap.from(galleryImgs,{
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: galleryImgs[0],
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                if(bottomImage){
                    gsap.from(bottomImage,{
                        scale: 1.05,
                        opacity: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: bottomImage,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                if(formTitle){
                    gsap.from(formTitle,{
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: formTitle,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                if(inputs.length){
                    gsap.from(inputs,{
                        y: 25,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: form,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                if(contactItems.length){
                    gsap.from(contactItems,{
                        x: 40,
                        opacity: 0,
                        stagger: 0.2,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: contactItems[0],
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                if(button){
                    gsap.from(button,{
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        delay: 0.4,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: button,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }


        }, serviceDetailsRef);

        return () => ctx.revert();
    },[]);

  return (
    <>
       <PageBanner 
        title="Services Details"
        currentPage="Services Details"
        productName={service.title}
    />

    <div ref={serviceDetailsRef} className="container mx-auto px-4 py-[8%]">
        <div className="section-container gap-10 lg:gap-14 items-start!">
            <div className="w-full lg:w-[70%] content">
                <img
                    src={service.image}
                    alt={service.title} 
                    className='main-image w-full h-full object-cover rounded'
                />

                <h3 className="main-title text-3xl lg:text-4xl font-semibold pt-8 pb-5">{service.title}</h3>
                <p className="text-paragraph pb-8 pera">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum, sapiente rerum eius 
                    nulla aliquam? Pariatur, ea totam delectus commodi veritatis voluptatem animi laboriosam 
                    minus!
                </p>

                <div className="gallery centered-row justify-between flex-col lg:flex-row gap-3 w-full h-auto lg:h-90">
                    <div className="image group overflow-hidden rounded-sm h-full w-full gallery-img">
                        <img src={galleryImage1} alt="gallery-image" className='section-image group-hover:scale-110 transition-all duration-300' />
                    </div>
                    <div className="image group overflow-hidden rounded-sm h-full w-full gallery-img">
                        <img src={galleryImage2} alt="gallery-image" className='section-image group-hover:scale-110 transition-all duration-300' />
                    </div>
                </div>

                <div className="text-paragraph pera py-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit, quibusdam porro saepe 
                    ad consequatur corrupti beatae eaque rem modi, quo nihil ab quam ducimus fuga architecto, 
                    excepturi deserunt. Repellat esse error deserunt sed iste!
                </div>

                <div className="text-paragraph pera pb-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eius quod iste similique 
                    rerum odit at molestiae ipsam eum nostrum. Beatae nostrum voluptates facere. Minima sequi atque,
                     inventore quidem voluptates, quibusdam hic consequuntur saepe laboriosam asperiores placeat odit 
                     provident quis libero voluptas? Aliquam, quos aliquid.
                </div>

                <div className="h-auto lg:h-150">
                    <img src={galleryImage3} alt="gallery-image" className='section-image bottom-image' />
                </div>

                <p className="text-paragraph pera py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam ut ex est minus enim dicta! Invento
                re veniam consequatur voluptatibus aut minus sit eaque dolorum, blanditiis dignissimos, accusamus nemo
                 error nesciunt fugiat repudiandae sapiente similique quod, et harum vitae ratione reiciendis cumque. 
                 Sint eveniet doloremque laboriosam placeat suscipit? Nam, placeat!
                </p>
            </div>

            <div className="w-full lg:w-[30%] bg-white shadow p-5 lg:p-8 rounded-sm lg:sticky h-full top-0 right-0">
                <h4 className='form-title'>Get In Touch</h4>

                <form className='space-y-8 mt-10 contact-form'>
                    <div className="input-wrapper pb-2 relative">
                        <input type="text" placeholder='Name' className='input-box w-full outline-none' required/>
                    </div>
                    <div className="input-wrapper pb-2 relative">
                        <input type="email" placeholder='Email' className='input-box w-full outline-none' required/>
                    </div>
                    <div className="input-wrapper pb-2 relative">
                        <input type="text" placeholder='Message' className='input-box w-full outline-none' required/>
                    </div>

                    <MainBtn type='submit' text={"Get In Touch"} className='submit-btn bg-black! text-white! shadow-none! rounded-sm! mt-6'/>
                </form>

                <div className="contact-form">
                    <h3 className='text-2xl font-medium pt-8 pb-8 form-title'>Contact Info</h3>

                    <ul className="space-y-6 max-w-md">
                        <li className='flex items-start gap-4 group contact-item'>
                            <div className="p-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white transition-transform duration-300 group-hover:scale-110">
                                <MapPin size={20} />
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                <span className='font-semibold block'>
                                    United Kingdom -
                                    221B Baker Street, Office 302
                                    London, UK NW1 6XE
                                </span>
                            </p>
                        </li>

                        <li className='flex items-center gap-4 group contact-item'>
                        <div className="p-3 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110">
                                <Mail size={20} />
                            </div>
                            <p className="text-gray-700">
                                info@gmail.com
                            </p>
                        </li>

                        <li className='flex items-center gap-4 group contact-item'>
                        <div className="p-3 rounded-full bg-linear-to-r from-orange-500 to-red-500 text-white transition-transform duration-300 group-hover:scale-110">
                                <Phone size={20} />
                            </div>
                            <p className="text-gray-700">
                                +91 12345 67890
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceDetails