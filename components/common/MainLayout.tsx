import { NextPage } from "next";
import { ReactNode } from "react";
import Header from "../shared/Header";
import SearchBar from "../shared/Header/SearchBar";
import Footer from '../shared/Footer';
type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: NextPage<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <header className="py-3 bg-white relative z-30">
                <Header />
                <div className="block md:hidden container">
                    <SearchBar />
                </div>
            </header>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
