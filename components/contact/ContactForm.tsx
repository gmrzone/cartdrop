import { NextPage } from "next";
import Input from "../common/inputs/Input";
import TextArea from "../common/inputs/TextArea";
import MainButton from "../common/buttons/MainButton";
import SecondaryButton from "../common/buttons/SecondaryButton";
const ContactForm: NextPage = () => {
    return (
        <form className="w-full max-w-2xl mx-auto p-14 bg-white space-y-8 rounded-lg shadow-drop-down">
            <Input type="text" label="NAME" />
            <Input type="email" label="EMAIL" />
            <TextArea label="MESSAGE" />
            <div className="flex space-x-12 px-12">
                <MainButton text="Send" fullWidth={true} />
                <SecondaryButton text="Reset" fullWidth={true} />
            </div>
        </form>
    );
};

export default ContactForm;
