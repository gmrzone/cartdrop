import { NextPage } from "next";
import LogoVertical from "./Logo";
import SocialLogin from "./SocialLogin";
import useIsMobile from "../hooks/useIsMobile";
import Link from "next/link";

interface LeftProps {
    type: string;
}

const LeftSection: NextPage<LeftProps> = ({ type }) => {
    const isMobile = useIsMobile();

    return (
        <div className="left-main w-full ipad:w-1/2 h-full relative bg-transparent">
            {!isMobile && (
                <div className="w-full h-full absolute overflow-hidden ipad:block">
                    <div className="afzal absolute bg-main top-0 h-full w-full ipad:w-6/12"></div>
                </div>
            )}
            <div className="relative flex flex-col items-center justify-center w-full h-full space-y-16">
                <Link href="/" passHref>
                    <a>
                        <LogoVertical />
                    </a>
                </Link>
                {!isMobile && <SocialLogin type={type} />}
            </div>
            <style>{`
                .left-main {
                    min-height: 240px;
                }
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

export default LeftSection;
