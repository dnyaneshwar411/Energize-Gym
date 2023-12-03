import { useEffect, useRef } from "react";

export default function Trainer({ trainer }) {
    const container = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                container.current.classList.add('image-pop-out');
                observer.unobserve(entry.target);
            }
        }, { root: null, rootMargin: "0px", threshold: 0.8 });
        observer.observe(container.current)
        return () => { observer.disconnect(); }
    }, [container]);
    return (
        <div ref={container} className="trainer w-1/4 min-w-[250px] relative aspect-[9/16] text-center border-[#222] border-[15px]">
            <img src={trainer.img} alt="Energize gym Trainer" className="absolute image-pop-out w-full h-full object-cover scale-[0.01]" style={{ transitionDelay: `${100 * trainer.id}ms` }} />
            <div className="trainer-content overflow-y-hidden opacity-100 w-full absolute bottom-0 z-10 p-4">
                <h4 className="translate-y-full">{trainer.name}</h4>
                <div className="transform-on-hover">
                    <div className="socials mt-4 transform-on-hover sm:translate-y-full opacity-0">
                        {['logo-instagram', 'logo-facebook', 'logo-twitter'].map((social, index) => (<a href="youtube.com" key={index} ><ion-icon name={social} className='text-slate-400 text-[2px]'></ion-icon></a>))}
                    </div>
                </div>
            </div>
        </div>
    )
}