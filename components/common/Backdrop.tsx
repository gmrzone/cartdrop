import { NextPage } from "next";
import ReactDom from "react-dom";
import { LegacyRef, ReactNode } from "react";

type BackDropProps = {
    backdropRef: LegacyRef<HTMLDivElement>;
    onClick: () => void;
};
const Backdrop: NextPage<BackDropProps> = ({ backdropRef, onClick }) => {
    return ReactDom.createPortal(
        <div
            className="absolute w-screen h-screen bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 z-40 hidden"
            ref={backdropRef}
            onClick={() => onClick()}></div>,
        document.getElementById("modal") as HTMLDivElement,
    );
};

export default Backdrop;
