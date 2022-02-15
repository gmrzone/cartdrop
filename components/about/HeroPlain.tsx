import { NextPage } from "next";

const HeroPlain: NextPage = () => {
    return (
        <div className="bg-main h-72 mobile-bg:h-96 ipad:h-hero-mobile-sm desktop:h-hero-mobile-bg hero-secondary-container absolute left-0 right-0 z-0 top-0">
            <div className="text-center py-4 ipad:py-6 desktop:py-8">
                <h1 className="text-background">ABOUT US</h1>
            </div>
        </div>
    );
};

export default HeroPlain;
