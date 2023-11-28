import React from 'react'
import './home.css'
import Slider from '../Components/Slider';
import heroMain from '/assets/img/hero-main.png'
import heroWoman from '/assets/img/hero-woman.png'

export default function Home() {
    const carouselItems = [];
    for (let i = 0; i < 5; i++) {
        carouselItems.push('<span className="">ENERGIZE</span><span><ion-icon name="flash-outline"></ion-icon></span>')
    }

    return (
        <>
            <div className="container-css flex flex-col gap-2 py-[30px] lg:flex-row">
                <div className="py-[48px] lg:w-1/2 w-full bg-slate950 secondary-font text-center lg:text-left">
                    <span className="tagline inline-block max-w-[30ch] text-[24px] sm:text-[32px] text-slate-500">MAKE YOUR MOVE, MAKE YOUR MARK, MAKE YOUR BODY</span>
                    <div className="text-[48px] sm:text-[80px] text-[#90FF00]">ENERGIZE YOUR LIFE</div>
                    <p className='mt-8 mb-6 mx-auto lg:mx-0'>To empower individuals to lead healthier, more energized lives through personalized fitness experiences.</p>
                    <ion-icon name="arrow-forward-outline" className="rotate-45"></ion-icon>
                </div>
                <div className="py-[32px] lg:w-1/2 w-full max-h-fit relative">
                    <img src={heroMain} alt="dym boy flexing muscles" className="img-shadow max-content-width mx-auto my-4" />
                    <img src={heroWoman} alt="woman working out" className="absolute top-[70%] left-1/2" />
                </div>
            </div>
            <div className="my-[32px] slider-gutter rotate-[1.5deg] translate-y-[70px]">
                {[1, 2].map((num) => <Slider key={num} classes={`slider text-black border-t-[10px] border-b-[10px] bg-[#fff] border-gray-800`} />)}
            </div>
            <div className="slider-gutter rotate-[-1deg]">
                {[1, 2].map((num) => <Slider key={num} classes={`slider slider-2 text-black border-t-[10px] border-b-[10px] bg-[#90FF00] border-gray-800`} />)}
            </div>
        </>
    )
}