import { NextPage } from "next";
import LogoVertical from "./Logo";
import SocialLoginDesktop from "./SocialLoginDesktop";
import SocialLoginMobile from "./SocialLoginMobile";
import { useEffect, useState } from 'react'
import useIsMobile from "../hooks/useIsMobile";
const LoginLeft: NextPage = () => {
    const isMobile = useIsMobile()
    useEffect(() => {
        const updateMedia = () => {
            const isMobile = window.matchMedia('(max-width: 992px)')
        }
        
    }, [])
    
    return (
        <div className="w-full ipad:w-1/2 h-full relative bg-main ipad:bg-transparent">
            <div className="w-full h-full absolute overflow-hidden hidden ipad:block">
                <div className="afzal absolute bg-main top-0 h-full w-full ipad:w-6/12"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center w-full h-full space-y-32">
                <LogoVertical />
                {!isMobile && <SocialLoginDesktop type="login" />}
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
    );
};

export default LoginLeft;
