import { useEffect, useRef, useState } from "react"

export default function SingleClass({ curentClass }) {
    const img = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                img.current.classList.add('image-snap-full');
                observer.unobserve(entry.target);
            }
        }, { root: null, rootMargin: "0px", threshold: 0.5 });
        observer.observe(img.current)
        return () => { observer.disconnect(); }
    }, [img]);
    return (
        <div ref={img} className='class relative w-1/3 min-w-[250px] border-[1px] border-[#808080] aspect-[9/14] bg-cover'>
            <img src={curentClass.img} className='image-snap w-full opacity-50 md:opacity-70 h-full object-cover' alt={curentClass.name} style={{ transitionDelay: `${100 * curentClass.id}ms` }} />
            <div className="class-info overflow-y-hidden opacity-100 w-full absolute bottom-0 z-10 p-4">
                <h3 className="translate-y-full">{curentClass.name}</h3>
                <div className="transform-on-hover translate-y-full opacity-0 text-slate-500">
                    <div className="flex w-full justify-between">
                        <span>{curentClass.schedule}</span>
                        <span>{curentClass.hours} hr / day</span>
                    </div>
                    <span><ion-icon name="person-outline"></ion-icon> {curentClass.enrolled} people enrolled</span>
                </div>
            </div>
        </div>
    )
}