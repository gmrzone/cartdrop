import { ReactNode } from "react";
import { NextPage } from "next";
import SmallButtonLink from "../common/buttons/SmallButtonLink";
import SliderControl from "../common/SliderControl";

interface SectionProps {
    title: string;
    children: ReactNode;
    first?: boolean;
}

const Section: NextPage<SectionProps> = ({ title, children, first = false }) => {
    return (
        <div
            className={`bg-white ${
                first
                    ? "mb-5 ipad:mb-7 desktop:mb-8 pt-4 pb-2 ipad:pt-6 ipad:pb-3 desktop:pt-8 desktop:pb-4"
                    : "my-5 ipad:my-7 desktop:my-8 py-2 ipad:py-3 desktop:py-4"
            }`}>
            <div className="container relative">
                <div className="">
                    <h2 className="text-text mb-4 ipad:mb-6 desktop:mb-8">{title}</h2>
                </div>
                {children}
            </div>
        </div>
    );
};
export default Section;
