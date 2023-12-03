import { Classes } from "../utils/Data"
import SingleClass from "./SingleClass"
import class1 from '/assets/img/classes/class-1.jpg'
import class2 from '/assets/img/classes/class-2.jpg'
import class3 from '/assets/img/classes/class-3.webp'
export default function ClassesComponent() {
    return (
        <>
            <div id="classes" className='pb-14'>
                <h2>FITNESS CLASSES</h2>
                <div className="flex gap-[2rem] overflow-x-auto min-w-full">
                    {Classes.map(curentClass => (<SingleClass key={curentClass.id} curentClass={curentClass} />))}
                </div>
            </div>
        </>
    )
}