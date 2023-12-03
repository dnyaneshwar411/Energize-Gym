import React from 'react'
import './home.css'
import Slider from '../Components/Slider';
import heroMain from '/assets/img/hero-main.png'
import heroWoman from '/assets/img/hero-woman.png'
import ClassesComponent from '../Components/Classes';
import { Trainers } from '../utils/Data';
import Trainer from '../Components/Trainer';
import aboutImg from '/assets/img/about.png'
import Gallery from '../Components/Gallery';
import { Testimonials } from '../utils/Data';
import Testimonial from '../Components/Testimonial';

export default function Home() {
    const carouselItems = [];
    for (let i = 0; i < 5; i++) {
        carouselItems.push('<span className="">ENERGIZE</span><span><ion-icon name="flash-outline"></ion-icon></span>')
    }

    return (
        <>
            <div className="container-css flex flex-col-reverse gap-8 md:gap-2 py-[30px] lg:flex-row">
                <div className="py-[48px] lg:w-1/2 w-full bg-slate950 secondary-font text-center lg:text-left">
                    <span className="tagline inline-block max-w-[30ch] text-[24px] sm:text-[32px] text-slate-500">MAKE YOUR MOVE, MAKE YOUR MARK, MAKE YOUR BODY</span>
                    <div className="text-[48px] sm:text-[80px] text-[#90FF00]">ENERGIZE YOUR LIFE</div>
                    <p className='mt-8 mb-6 mx-auto lg:mx-0'>To empower individuals to lead healthier, more energized lives through personalized fitness experiences.</p>
                    <ion-icon name="arrow-forward-outline" className="rotate-45"></ion-icon>
                </div>
                <div className="py-[32px] lg:w-1/2 w-full max-h-fit relative">
                    <img src={heroMain} alt="gym boy flexing muscles" className="img-shadow max-content-width mx-auto my-4" />
                    <img src={heroWoman} alt="woman working out" className="hidden lg:block absolute left-[40%] md:left-[50%] top-[70%]" />
                </div>
            </div>
            <div className="my-[32px] slider-gutter rotate-[1.5deg] translate-y-[70px]">
                {[1, 2].map((num) => <Slider key={num} classes={`slider text-black border-t-[10px] border-b-[10px] bg-[#fff] border-gray-800`} />)}
            </div>
            <div className="slider-gutter rotate-[-1deg]">
                {[1, 2].map((num) => <Slider key={num} classes={`slider slider-2 text-black border-t-[10px] border-b-[10px] bg-[#90FF00] border-gray-800`} />)}
            </div>
            <div className="container-css">
                <div id="results" className='pb-14'>
                    <h2>POWER OF CHANGE</h2>
                    <iframe className='w-full aspect-[16/9]' src="https://www.youtube.com/embed/L4-QpckHfNo?si=Nz1CaBtKVndZ2aiy&autohide=1&showinfo=0&enablejsapi=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
                    <button className="btn-highlighter text-[12px] md:text-[16px] block max-content-width mx-auto mt-14">START YOUR CHANGE</button>
                </div>

                {/* classes */}
                <ClassesComponent />
                <div id="trainers" className='pb-28'>
                    <h2>TRAINERS</h2>
                    <div className="flex gap-[2rem] overflow-x-auto min-w-full">
                        {Trainers.map(trainer => (<Trainer key={trainer.id} trainer={trainer} />))}
                    </div>
                </div>

            </div>
            <div id="testimonials" className='pb-14 pt-2 bg-[#111]'>
                <h2>TESTIMONIALS</h2>
                <div className="container-css w-full flex gap-[32px] mt-20 overflow-x-auto snap-x snap-mandatory">
                    {Testimonials.map(testimonial => (<Testimonial key={testimonial.id} testimonial={testimonial} />))}
                </div>
            </div>
            <div className="container-css">
                <Gallery />
                <div id="about">
                    <div className="wrapper flex flex-col justify-center gap-14 lg:flex-row pt-24 pb-16 align-middle">
                        <div className='w-full max-w-[40ch] mx-auto lg:w-1/2'>
                            <h2 className='mt-10 break-all'>Who We Are</h2>
                            <p className='text-justify text-[16px]'>At Energize, we're not just a gym; we're a vibrant community committed to transforming lives through fitness and wellness. Our mission is simple: empower individuals to lead healthier, more energized lives.</p>
                            <p className='text-justify mt-4 text-[16px]'>We envision a world where everyone can unlock their full potential through physical well-being. A healthy lifestyle is the cornerstone of a fulfilling and energetic life.</p>
                            <button className="btn-primary flex align-center py-3 mt-4 text-[12px]">READ MORE </button>
                        </div>
                        <div className='w-full mx-auto lg:w-1/2'>
                            <img src={aboutImg} className='img-shadow block mx-auto mt-0 max-w-[400px]  w-11/12 lg:w-4/6 aspect-[9/13] object-cover' alt="person showing off body" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}