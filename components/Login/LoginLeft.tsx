import { NextPage } from 'next'
import LogoVertical from './Logo'
const LoginLeft: NextPage = () => {
    return (
        <div className="w-full ipad:w-1/2 h-full relative">
            <div className="w-full h-full absolute overflow-hidden">
                <div className="afzal absolute bg-main top-0 h-full w-full ipad:w-6/12"></div>
            </div>
            <div className="relative flex flex-col items-center w-full">
                <LogoVertical />
            </div>
            <style>{`

                @media (min-width: 992px){
                    .afzal {
                        border-bottom-right-radius: 50%;
                        border-top-right-radius: 50%;
                        transform: scale(3);
                    }

                }


            `}</style>
        </div>
    )
}

export default LoginLeft