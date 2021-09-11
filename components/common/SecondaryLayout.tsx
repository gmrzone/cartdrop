import { NextPage } from "next";

const SecondaryLayout: NextPage = ({ children }) => {
    return <main className="h-full">{children}</main>;
};

export default SecondaryLayout;
