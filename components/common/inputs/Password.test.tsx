import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import Password from "./Password";

describe("Password Component Test", () => {
    it("RenderCheck", () => {
        render(<Password type="password" label="Password test" />);
        expect(screen.getByText("Password test")).toBeInTheDocument();
        expect(screen.getByTitle("input")).toBeInTheDocument();
        expect(screen.getByTitle("password-toggler")).toBeInTheDocument();
    });

    it("TransitionStyleTest", () => {
        render(<Password type="password" label="Password test" />);
        const input = screen.getByTitle("input");
        const label = screen.getByText("Password test");

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

    it("PasswordToggletTest", () => {
        render(<Password type="password" label="Password test" />);
        const toggler = screen.getByTitle("password-toggler");
        const input = screen.getByTitle("input");

        user.type(input, "TestText");

        expect(input).toHaveAttribute("type", "password");

        user.click(toggler);

        expect(input).toHaveAttribute("type", "text");
    });
});
