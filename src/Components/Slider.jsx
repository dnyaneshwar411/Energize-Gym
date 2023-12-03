import React from 'react'

export default function Slider({ classes }) {
    return (
        <div className={classes}>
            {[1, 2, 3, 4, 5].map((num) => (<b key={num}><span className="ext-[12px] md:text-[]">ENERGIZE</span><span><ion-icon name="flash-outline"></ion-icon></span></b>))}
        </div>
    )
}