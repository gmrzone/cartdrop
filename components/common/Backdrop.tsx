import { NextPage } from "next";
import ReactDom from "react-dom";
import { LegacyRef, ReactNode } from "react";

type BackDropProps = {
    backdropRef: LegacyRef<HTMLDivElement>;
    onClick: () => void;
};
const Backdrop: NextPage<BackDropProps> = ({ backdropRef, onClick }) => {
    return (
        <div
            className="fixed w-screen h-screen left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 z-30 hidden"
            ref={backdropRef}
            onClick={() => onClick()}></div>
    );
};

export default Backdrop;
