import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ProfileDropdown from "./ProfileDropDown";

it("ContentTest", () => {
    render(<ProfileDropdown profileDropdownActive={true} />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/sign-up/i)).toBeInTheDocument();
});
