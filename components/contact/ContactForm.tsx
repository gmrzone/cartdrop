import { NextPage } from 'next';
import Input from '../common/inputs/Input';
import TextArea from '../common/inputs/TextArea';
import MainButton from '../common/buttons/MainButton';
import SecondaryButton from '../common/buttons/SecondaryButton';
const ContactForm: NextPage = () => {
    return (
        <form className="w-full max-w-2xl mx-auto px-3 py-6 mobile-sm:px-4 mobile-lg:px-8 mobile-lg:py-8 ipad:px-10 ipad:py-10 desktop:px-14 desktop:py-14 bg-white space-y-8 rounded-lg shadow-drop-down z-10 relative">
            <Input type="text" label="NAME" />
            <Input type="email" label="EMAIL" />
            <TextArea label="MESSAGE" />
            <div className="flex space-x-12 px-12">
                <MainButton text="Send" fullWidth={true} type="submit" />
                <SecondaryButton text="Reset" fullWidth={true} type="reset" />
            </div>
        </form>
    );
};

export default ContactForm;
