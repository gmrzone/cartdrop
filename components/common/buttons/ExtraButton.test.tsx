import { render, screen } from "@testing-library/react";
import ExtraButton from "./ExtraButton";

describe("ButtonTest", () => {
    it("Render Check With Icon, Loading and not disables", () => {
        render(<ExtraButton text="test button" icon="temp-icon" loading={true} />);
        expect(screen.getByText("test button")).toBeInTheDocument();
        expect(screen.getByTitle("button-icon")).toBeInTheDocument();
        expect(screen.getByTitle("loading-icon")).toBeInTheDocument();
        expect(screen.getByRole("button").classList).toContain("bg-secondary");
    });

    it("RenderCheck for Disabled Button Without Icon and Loading", () => {
        render(<ExtraButton text="test button1" disable={true} />);
        const button = screen.getByRole("button");
        expect(screen.queryByTitle("button-icon")).not.toBeInTheDocument();
        expect(screen.queryByTitle("loading-icon")).not.toBeInTheDocument();
        // expect(button.classList).toContain("bg-gray-600");
        // expect(button.classList).toContain("cursor-not-allowed");
        // expect(button.classList).not.toContain("bg-secondary");
        expect(button).toHaveClass("cursor-not-allowed bg-gray-600");
        expect(button).not.toHaveClass("bg-secondary");
    });
});
