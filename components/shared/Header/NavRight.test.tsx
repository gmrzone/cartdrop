import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import NavRight from "./NavRight";

describe("NavRightTest", () => {
    const toggleCartSidebar = jest.fn();

    it("RenderCheck", () => {
        render(<NavRight toggleCartSidebar={toggleCartSidebar} />);
        expect(screen.getByTitle("profile-icon")).toBeInTheDocument();
        expect(screen.getByTitle("profile-dropdown")).toBeInTheDocument();
        expect(screen.getByTitle("cart-icon")).toBeInTheDocument();
    });

    it("ProfileIconFunctionalityTest", () => {
        render(<NavRight toggleCartSidebar={toggleCartSidebar} />);
        const profileIcon = screen.getByTitle("profile-icon");
        const profileDropDown = screen.getByTitle("profile-dropdown");
        expect(profileDropDown.classList).toContain("hidden");
        user.click(profileIcon);
        expect(profileDropDown.classList).toContain("block");
    });
});
