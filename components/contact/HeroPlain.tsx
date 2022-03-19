import { NextPage } from 'next';

const HeroPlain: NextPage = () => {
    return (
        <div className="bg-main h-72 mobile-sm:h-96 ipad:h-hero-mobile-sm desktop:h-hero-mobile-sm hero-secondary-container absolute top-0 left-0 right-0 z-0">
            <div className="text-center py-4 ipad:py-6 desktop:py-8">
                <h1 className="text-background">CONTACT US</h1>
            </div>
        </div>
    );
};

export default HeroPlain;
