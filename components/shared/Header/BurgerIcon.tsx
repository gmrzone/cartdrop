import { NextPage } from "next";
import { MouseEventHandler } from "react";
type BurgerIconP = {
    toggleLeftNav: MouseEventHandler<HTMLDivElement>;
};
const BurgerIcon: NextPage<BurgerIconP> = ({ toggleLeftNav }) => {
    return (
        <div className="w-8 space-y-1 desktop:hidden self-center cursor-pointer mr-3" onClick={toggleLeftNav}>
            <span className="h-1 bg-main w-full block rounded"></span>
            <span className="h-1 bg-main w-full block rounded"></span>
            <span className="h-1 bg-main w-full block rounded"></span>
        </div>
    );
};

export default BurgerIcon;
