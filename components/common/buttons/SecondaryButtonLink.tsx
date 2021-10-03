import { NextPage } from "next";
import Link from "next/link";

type SecondaryProps = {
    text: string;
    icon?: string;
    disable?: boolean;
    to: string;
    fullWidth?: boolean;
};

const SecondaryButtonLink: NextPage<SecondaryProps> = ({ text, icon, disable, to, fullWidth = false }) => {
    return (
        <Link href={to} passHref>
            <a
                className={`${
                    fullWidth ? "w-full" : "w-auto"
                } py-3 px-6 font-semibold rounded-full border-2 transition-colors duration-300 text-center ${
                    disable ? "bg-gray-400 border-none cursor-not-allowed bg-opacity-75" : "border-main"
                }`}>
                {icon && <i className={`${icon} mr-2 text-main`} />}
                <span className={`${disable ? "text-gray-700" : "text-main"} whitespace-nowrap`}>{text}</span>
            </a>
        </Link>
    );
};

export default SecondaryButtonLink;
