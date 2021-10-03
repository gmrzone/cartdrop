import { NextPage } from "next";

const HeroPlain: NextPage = () => {
    return <div className="bg-main h-hero-mobile-sm mobile-bg:h-hero-mobile-bg ipad:h-hero-ipad desktop:h-hero-desktop"></div>;
};

export default HeroPlain;
