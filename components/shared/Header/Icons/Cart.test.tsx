import { render, screen } from "@testing-library/react";
import CartIcon from "./Cart";
import user from "@testing-library/user-event";

describe("CartIconTest", () => {
    const toggleCartSidebar = jest.fn();
    const classes = "w-7 h-7 mobile-bg:w-8 mobile-bg:h-8";

    it("RenderCheck", () => {
        render(<CartIcon toggleCartSidebar={toggleCartSidebar} classes={classes} />);
        expect(screen.getByTitle("cart-icon")).toBeInTheDocument();
    });

    it("ClickTest", () => {
        render(<CartIcon toggleCartSidebar={toggleCartSidebar} classes={classes} />);
        user.click(screen.getByTitle("cart-icon"));
        expect(toggleCartSidebar).toHaveBeenCalledTimes(1);
    });
});
