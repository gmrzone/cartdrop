import { NextPage } from 'next';
import { FocusEventHandler } from 'react'

interface InputProps {
    type: string,
    label: string
}

const TextArea: NextPage<InputProps> = ({ type, label }) => {
    const handleFocus: FocusEventHandler<HTMLTextAreaElement> = (e) => {
        e.target.classList.remove('border')
        e.target.classList.remove('text-gray-500')
        e.target.classList.add('border-main')
        e.target.classList.add('border-2')
        const span = e.target.nextSibling as HTMLSpanElement
        span.classList.remove('scale-100')
        span.classList.remove("translate-x-0")
        span.classList.remove("translate-y-0")
        span.classList.remove("text-gray-500")
        span.classList.add('-translate-x-3')
        span.classList.add("-translate-y-6")
        span.classList.add("text-main")
        span.classList.add('scale-80')


        

    }
    const handleBlur:FocusEventHandler<HTMLTextAreaElement> = (e) => {
        if (!e.target.value){
            e.target.classList.remove('border-main')
            e.target.classList.remove('border-2')
            e.target.classList.add('border')
            e.target.classList.add('text-gray-500')
            const span = e.target.nextSibling as HTMLSpanElement
            span.classList.remove('scale-80')
            span.classList.remove("text-main")
            span.classList.remove("-translate-y-6")
            span.classList.remove("-translate-x-3")
            span.classList.add('translate-x-0')
            span.classList.add("translate-y-0")
            span.classList.add("text-gray-500")
            span.classList.add('scale-100')


        }
    }
    return (
        <div className="relative w-aute px-3 h-56">
            <textarea className="absolute focus:outline-none top-0 left-0 text-xl w-full h-full py-3 px-3 border border-solid border-gray-600 font-poppins text-main rounded-normal" onFocus={handleFocus} onBlur={handleBlur} />
            <span className="absolute bg-white text-gray-500 text-xl transition-all translate-x-0 duration-300 scale-100 translate-y-0 px-1 top-3">{label}</span>
        </div>
    )
}

export default TextArea