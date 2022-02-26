import { render, screen } from "@testing-library/react";
import SecondaryButton from "./SecondaryButton";

describe("ButtonTest", () => {
    it("Render Check With Icon, Loading and not disables", () => {
        render(<SecondaryButton text="test button" icon="temp-icon" loading={true} type="button" />);
        expect(screen.getByText("test button")).toBeInTheDocument();
        expect(screen.getByTitle("button-icon")).toBeInTheDocument();
        expect(screen.getByTitle("loading-icon")).toBeInTheDocument();
        expect(screen.getByRole("button").classList).toContain("border-main");
    });

    it("RenderCheck for Disabled Button Without Icon and Loading", () => {
        render(<SecondaryButton text="test button1" disable={true} type="button" />);
        const button = screen.getByRole("button");
        expect(screen.queryByTitle("button-icon")).not.toBeInTheDocument();
        expect(screen.queryByTitle("loading-icon")).not.toBeInTheDocument();
        // expect(button.classList).toContain("bg-gray-400");
        // expect(button.classList).toContain("cursor-not-allowed");
        // expect(button.classList).toContain("border-none");
        // expect(button.classList).not.toContain("border-main");
        expect(button).toHaveClass("bg-gray-400 cursor-not-allowed border-none");
        expect(button).not.toHaveClass("border-main");
    });
});
