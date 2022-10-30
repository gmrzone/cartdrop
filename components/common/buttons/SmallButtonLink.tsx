import { NextPage } from 'next';
import Link from 'next/link';
type ExtraProps = {
    text: string;
    icon?: string;
    disable?: boolean;
    to: string;
};

const SmallButtonLink: NextPage<ExtraProps> = ({ text, icon, disable, to }) => {
    return (
        <Link
            href={to}
            className={`w-auto py-1 px-2 ipad:py-2 ipad:px-3 font-semibold rounded transition-colors duration-300 ${
                disable ? 'bg-gray-600 cursor-not-allowed bg-opacity-75' : 'bg-secondary hover:bg-main'
            }`}
            title="link-main"
        >
            {icon && <i className={`${icon} mr-2 text-white`} title="button-icon" />}
            <span className="text-white text-xs ipad:text-sm desktop:text-base">{text}</span>
        </Link>
    );
};

export default SmallButtonLink;
