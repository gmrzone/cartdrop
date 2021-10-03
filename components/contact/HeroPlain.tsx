import { NextPage } from "next";
import ContactForm from "./ContactForm";

const HeroPlain: NextPage = () => {
    return (
        <div className="bg-main h-72 mobile-bg:h-96 ipad:h-hero-mobile-sm desktop:h-hero-mobile-bg relative mb-64">
            <div className="text-center py-4 ipad:py-6 desktop:py-8">
                <h1 className="text-background">CONTACT US</h1>
            </div>
            <ContactForm />
        </div>
    );
};

export default HeroPlain;
