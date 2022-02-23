import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer Test", () => {
    const footerData = [
        {
            id: 1,
            name: "Login",
            link: "/login",
        },
        {
            id: 2,
            name: "Signup",
            link: "/signup",
        },
        {
            id: 3,
            name: "Become a seller",
            link: "/become-a-seller",
        },
        {
            id: 4,
            name: "Blog",
            link: "/blog",
        },
        {
            id: 5,
            name: "Featured Products",
            link: "/featured",
        },
        {
            id: 6,
            name: "Careers",
            link: "/careers",
        },
        {
            id: 7,
            name: "About",
            link: "/about",
        },
        {
            id: 8,
            name: "Contact",
            link: "/contact",
        },
        {
            id: 9,
            name: "Privacy",
            link: "/privacy",
        },
        {
            id: 10,
            name: "Terms",
            link: "/terms",
        },
    ];
    it("Render Check", () => {
        render(<Footer />);
        expect(screen.getByTitle("footer-logo")).toBeInTheDocument();
        expect(screen.getByTitle("footer-links")).toBeInTheDocument();
        expect(screen.getByTitle("footer-social")).toBeInTheDocument();
        expect(screen.getByTitle("footer-bottom")).toBeInTheDocument();
    });

    it("Footer Link Test", () => {
        render(<Footer />);
        footerData.forEach((x) => {
            expect(screen.getByText(x.name)).toHaveAttribute("href", x.link);
        });
    });
});
