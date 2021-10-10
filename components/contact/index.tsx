import { NextPage } from "next";
import HeroPlain from "./HeroPlain";
import ContactForm from "./ContactForm";
const Contact: NextPage = () => {
    return (
        <div className="relative w-full h-full pt-14 pb-4 mobile-lg:pt-16 ipad:pt-20 desktop:pt-24 desktop:pb-8 desktop-large:pt-28">
            <HeroPlain />
            <ContactForm />
        </div>
    );
};

export default Contact;
