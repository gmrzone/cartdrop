import { render, screen } from "@testing-library/react";
import SecondaryButtonLink from "./SecondaryButtonLink";

describe("ButtonTest", () => {
    it("Render Check With Icon and not disables with href = /test1", () => {
        render(<SecondaryButtonLink text="test button" icon="temp-icon" to="/test1" />);
        const linkMain = screen.getByTitle("link-main");
        expect(screen.getByText("test button")).toBeInTheDocument();
        expect(screen.getByTitle("button-icon")).toBeInTheDocument();
        expect(linkMain).toHaveAttribute("href", "/test1");
        expect(linkMain.classList).toContain("border-main");
    });

    it("RenderCheck for Disabled Button Without Icon with href = /test2", () => {
        render(<SecondaryButtonLink text="test button1" disable={true} to="/test2" />);
        const linkMain = screen.getByTitle("link-main");
        expect(screen.queryByTitle("button-icon")).not.toBeInTheDocument();
        expect(linkMain).toHaveAttribute("href", "/test2");
        expect(linkMain.classList).toContain("bg-gray-400");
        expect(linkMain.classList).toContain("cursor-not-allowed");
        expect(linkMain.classList).not.toContain("border-main");
    });
});
