import { ReactNode } from "react";
import { NextPage } from "next";
interface SectionProps {
    title: string;
    children: ReactNode;
}

const Section: NextPage<SectionProps> = ({ title, children }) => {
    return (
        <div className="container my-10">
            <h2 className="text-text mb-6">{title}</h2>
            {children}
        </div>
    );
};
export default Section;
