import { NextPage } from "next";
import HeroPlain from "./HeroPlain";
import ContactForm from "./ContactForm";
const Contact: NextPage = () => {
    return (
        <div className="relative">
            <HeroPlain />
        </div>
    );
};

export default Contact;
