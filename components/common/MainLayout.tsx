import { NextPage } from "next";
import { ReactNode } from "react";
import Header from "../shared/Header";
type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: NextPage<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <header className="py-3 bg-white">
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer></footer>
        </>
    );
};

export default MainLayout;
