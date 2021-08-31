import { NextPage } from "next";
import Link from "next/link";
type ExtraProps = {
    text: string;
    icon?: string;
    disable?: boolean;
    to: string;
};

const SmallButtonLink: NextPage<ExtraProps> = ({ text, icon, disable, to }) => {
    return (
        <Link href={to}>
            <a
                className={`w-auto py-1 px-2 ipad:py-2 ipad:px-3 font-semibold rounded transition-colors duration-300 ${
                    disable ? "bg-gray-600 cursor-not-allowed bg-opacity-75" : "bg-secondary hover:bg-main"
                }`}>
                {icon && <i className={`${icon} mr-2 text-white`} />}
                <span className="text-white text-xs ipad:text-sm desktop:text-base">{text}</span>
            </a>
        </Link>
    );
};

export default SmallButtonLink;
