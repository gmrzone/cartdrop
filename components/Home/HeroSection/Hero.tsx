import { NextPage } from 'next';

const Hero: NextPage = () => {
    return (
        <div
            className="bg-hero-image relative w-full h-hero-mobile-sm mobile-sm:h-hero-mobile-sm ipad:h-hero-ipad desktop:h-hero-desktop desktop-big:h-hero-desktop-lg bg-no-repeat bg-cover bg-clip-content bg-center flex justify-center items-center z-0"
            title="hero-main">
            <div className="bg-white py-2 px-4 sm:py-3 sm:px-6 md:py-8 md:px-10 skew-x-hero-outer-sm ipad:skew-x-hero-outer bg-opacity-50 w-9/12 md:w-10/12 max-w-7xl">
                <h1 className="skew-x-hero-inner-sm ipad:skew-x-hero-inner text-text text-center" title="hero-text">
                    <span className="text-red-600">25%</span> OFF ON FIRST ORDER USE COUPON <span className="text-main">FIRST25</span>
                </h1>
            </div>
            {/* <style>{`
            @media (min-width:1199px){
                .main-hero {
                    z-index: -1;
                }
            }            
            `}</style> */}
        </div>
    );
};

export default Hero;
