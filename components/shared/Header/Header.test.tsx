/* eslint @next/next/no-img-element: 0 */ // Disable eslint rule to use img tag in this file
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "./index";
import useMobile from "../../hooks/useIsMobile";
import Image from "next/image";

// Mock image
jest.mock("../../../public/default_profilepic.png", () => ({
    DefaultProfile: "test-image",
}));

// Mock next/image
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        return <img {...props} alt={props.alt} />;
    },
}));

// Mock useMobile
jest.mock("../../hooks/useIsMobile", () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(false),
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
        expect(useMobile).toHaveBeenCalledTimes(1);
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
        expect(backdrop.classList).not.toContain("opacity-100");

        // Cart Sidebar default style when not open
        expect(cartSidebar.classList).toContain("hidden");
        expect(cartSidebar.classList).toContain("translate-x-full");
        expect(cartSidebar.classList).not.toContain("translate-x-0");

        user.click(screen.getByTitle("cart-icon"));

        // After user click the cart icon both cartSidebar and backdrop should remove the hidden class immidiately
        expect(backdrop.classList).not.toContain("hidden");
        expect(cartSidebar.classList).not.toContain("hidden");
        //  Opacity for backdrop should change to 100 after few ms bcoz we used setTimeout
        //  translateX for cartSideBar should change to translate-x-0 after few ms bcoz we used setTimeout
        await waitFor(() => expect(backdrop.classList).toContain("opacity-100"));
        await waitFor(() => expect(backdrop.classList).not.toContain("opacity-0"));
        await waitFor(() => expect(cartSidebar.classList).toContain("translate-x-0"));
        await waitFor(() => expect(cartSidebar.classList).not.toContain("translate-x-full"));

        user.click(screen.getByTitle("cart-close"));
        // After clicking the cart close backdrop opacity should change from 100 to zero immidiately
        expect(backdrop.classList).toContain("opacity-0");
        expect(backdrop.classList).not.toContain("opacity-100");
        // After clicking the cart close cartSidebar transition should change from 0 to full
        expect(cartSidebar.classList).toContain("translate-x-full");
        expect(cartSidebar.classList).not.toContain("translate-x-0");

        //  And then after waiting for some ms both backdrop and cartSidebar should add class hidden

        await waitFor(() => expect(backdrop.classList).toContain("hidden"));
        await waitFor(() => expect(cartSidebar.classList).toContain("hidden"));
    });

    it("Left Nav Functionality test", async () => {
        render(<Header />);
        const leftNav = screen.getByTitle("nav-left");
        const backdrop = screen.getByTitle("backdrop");
        const burgerIcon = screen.getByTitle("left-nav-opener");

        // Backdrop should be hidden at first
        expect(backdrop.classList).toContain("hidden");
        expect(backdrop.classList).toContain("opacity-0");
        expect(backdrop.classList).not.toContain("opacity-100");
        expect(leftNav.classList).toContain("-translate-x-full");

        user.click(burgerIcon);

        // After user click the burger icon backdrop should remove the hidden class immidiately
        // And leftNav shoud replace translate-x-full with translate-x-0
        expect(backdrop.classList).not.toContain("hidden");
        expect(leftNav.classList).toContain("translate-x-0");
        expect(leftNav.classList).not.toContain("-translate-x-full");
        //  Opacity for backdrop should change to 100 after few ms bcoz we used setTimeout
        await waitFor(() => expect(backdrop.classList).toContain("opacity-100"));
        await waitFor(() => expect(backdrop.classList).not.toContain("opacity-0"));

        // WNen user click backdrop leftnav should close
        user.click(backdrop);

        // When user click backdrop then immidiately change backdrop opacity to 0 from 100
        // And transition leftNav to -translate-x-full from translate-x-0
        expect(backdrop.classList).toContain("opacity-0");
        expect(backdrop.classList).not.toContain("opacity-100");
        expect(leftNav.classList).toContain("-translate-x-full");
        expect(leftNav.classList).not.toContain("translate-x-0");

        // Then hide the backdrop after som ms as we used set timeout
        await waitFor(() => expect(backdrop.classList).toContain("hidden"));
    });
});
