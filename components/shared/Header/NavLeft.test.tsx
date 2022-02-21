/* eslint @next/next/no-img-element: 0 */ // Disable eslint rule to use img tag in this file
import LeftNav from "./NavLeft";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { navLeftData, NavLeftData2 } from "./data";
import exp from "constants";

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
describe("Testing Left Navbar", () => {
    const toggleLeftNav = jest.fn();

    it("Render Check", () => {
        render(<LeftNav leftNavActive={false} toggleLeftNav={toggleLeftNav} />);
        expect(screen.getByText("More")).toBeInTheDocument();
    });

    it("Nav Item test", () => {
        render(<LeftNav leftNavActive={false} toggleLeftNav={toggleLeftNav} />);
        navLeftData.concat(NavLeftData2).forEach((x, i) => {
            expect(screen.getByTitle(x.value)).toBeInTheDocument();
            expect(screen.getByTitle(x.value)).toHaveAttribute("href", x.to);
        });
    });
});
