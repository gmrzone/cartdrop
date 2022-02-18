import Input from "./Input";
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Input Tests", () => {
    it("RenderCheck", () => {
        render(<Input type="text" label="Test Input" />);
        expect(screen.getByText("Test Input")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("TransitionStyleTest", () => {
        render(<Input type="text" label="Test Input" />);
        const input = screen.getByRole("textbox");
        const label = screen.getByText("Test Input");
        // Before Click
        expect(input).not.toHaveFocus();
        expect(label.classList).toContain("text-gray-500");
        expect(label.classList).toContain("translate-x-0");
        expect(label.classList).toContain("scale-100");
        expect(label.classList).toContain("translate-y-0");

        user.click(label);

        // After Click
        expect(input).toHaveFocus();
        expect(label.classList).toContain("-translate-x-1");
        expect(label.classList).toContain("-translate-y-6");
        expect(label.classList).toContain("text-main");
        expect(label.classList).toContain("scale-80");

        // After input blur Transition should go back to normal

        fireEvent.blur(input);

        expect(label.classList).toContain("text-gray-500");
        expect(label.classList).toContain("translate-x-0");
        expect(label.classList).toContain("scale-100");
        expect(label.classList).toContain("translate-y-0");
    });
});
