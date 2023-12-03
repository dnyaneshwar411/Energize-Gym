import React from 'react'
export default function Testimonial({ testimonial }) {
    return (
        <div className='w-1/2 min-w-[300px] snap-start px-2'>
            <div className="flex items-center gap-4">
                <img src={testimonial.img} alt="This is a person" className='w-[50px]' />
                <div>
                    <h4 className='secondary-font'>{testimonial.name}, {testimonial.age}</h4>
                    <div className="text-slate-400 text-[16px]">{testimonial.designation}</div>
                </div>
            </div>
            {/* <div className="mt-10">{testimonial.rating}</div> */}
            <p className='text-slate-400 text-[16px] mt-4'>{testimonial.description}</p>
        </div>
    )
}