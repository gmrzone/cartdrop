import { NextPage } from 'next'
import ReactDom from 'react-dom'
import { LegacyRef, ReactNode } from 'react'


type BackDropProps = {
    backdropRef: LegacyRef<HTMLDivElement>;
}
const Backdrop: NextPage<BackDropProps> = ({ backdropRef }) => {
    return ReactDom.createPortal(
        <div className="absolute w-screen h-screen bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 z-40 hidden" ref={backdropRef}>

        </div>,
        document.getElementById('modal') as HTMLDivElement
    )

}

export default Backdrop