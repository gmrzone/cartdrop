/* eslint @next/next/no-img-element: 0 */ // Disable eslint rule to use img tag in this file
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import exp from "constants";
import Header from "./index";

// Mock image
jest.mock("../../../public/default_profilepic.png", () => ({
    DefaultProfile: "test-image",
}));

// Mock next/image
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        console.log(props);
        return <img {...props} alt={props.alt} />;
    },
}));

// Mock useMobile
jest.mock("../../hooks/useIsMobile", () => ({
    __esModule: true,
    default: () => false,
}));

describe("HeaderComponentTest With Cart Sidebar and Left nav Functionality", () => {
    it("RenderTest", () => {
        render(<Header />);
        expect(screen.getByTitle("logo")).toBeInTheDocument();
        expect(screen.getByTitle("left-nav-opener")).toBeInTheDocument();
        expect(screen.getByTitle("nav-left")).toBeInTheDocument();
        expect(screen.getByTitle("nav-right")).toBeInTheDocument();
        expect(screen.getByTitle("desktop-search")).toBeInTheDocument();
        expect(screen.getByTitle("cart-sidebar")).toBeInTheDocument();
        expect(screen.getByTitle("backdrop")).toBeInTheDocument();
    });

    it("Header Logo Test", () => {
        render(<Header />);
        expect(screen.getByTitle("logo")).toHaveAttribute("href", "/");
    });

    it("Cart Functionality Test", async () => {
        render(<Header />);
        const cartSidebar = screen.getByTitle("cart-sidebar");
        const backdrop = screen.getByTitle("backdrop");
        // Backdrop should be hidden at first
        expect(backdrop.classList).toContain("hidden");
        expect(backdrop.classList).toContain("opacity-0");

        // Cart Sidebar default style when not open
        expect(cartSidebar.classList).toContain("hidden");
        expect(cartSidebar.classList).toContain("translate-x-full");

        user.click(screen.getByTitle("cart-icon"));

        // After user click the cart icon both cartSidebar and backdrop should remove the hidden class immidiately
        expect(backdrop.classList).not.toContain("hidden");
        expect(cartSidebar.classList).not.toContain("hidden");
        //  Opacity for backdrop should change to 100 after few ms bcoz we used setTimeout
        //  translateX for cartSideBar should change to translate-x-0 after few ms bcoz we used setTimeout
        await waitFor(() => expect(backdrop.classList).toContain("opacity-100"));
        await waitFor(() => expect(cartSidebar.classList).toContain("translate-x-0"));
    });

    it.todo("LEft Nav Functionality test");
});
