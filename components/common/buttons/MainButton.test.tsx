import { render, screen } from "@testing-library/react";
import MainButton from "./MainButton";

describe("ButtonTest", () => {
    it("Render Check With Icon, Loading and not disables", () => {
        render(<MainButton text="test button" icon="temp-icon" loading={true} type="button" />);
        expect(screen.getByText("test button")).toBeInTheDocument();
        expect(screen.getByTitle("button-icon")).toBeInTheDocument();
        expect(screen.getByTitle("loading-icon")).toBeInTheDocument();
        expect(screen.getByRole("button").classList).toContain("bg-main");
    });

    it("RenderCheck for Disabled Button Without Icon and Loading", () => {
        render(<MainButton text="test button1" disable={true} type="button" />);
        const button = screen.getByRole("button");
        expect(screen.queryByTitle("button-icon")).not.toBeInTheDocument();
        expect(screen.queryByTitle("loading-icon")).not.toBeInTheDocument();
        expect(button.classList).toContain("bg-gray-600");
        expect(button.classList).toContain("cursor-not-allowed");
        expect(button.classList).not.toContain("bg-main");
    });
});
