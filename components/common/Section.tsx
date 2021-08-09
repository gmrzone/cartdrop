import { ReactNode } from "react";
import { NextPage } from "next";
interface SectionProps {
    title: string;
    children: ReactNode;
}

const Section: NextPage<SectionProps> = ({ title, children }) => {
    return (
        <div className="container my-8 ipad:my-10 desktop:my-12">
            <h2 className="text-text mb-4 ipad:mb-6 desktop:mb-8">{title}</h2>
            {children}
        </div>
    );
};
export default Section;
