import { render, screen } from "@testing-library/react";
import SignupForm from "./SignupForm";
import * as useMobile from "../hooks/useIsMobile";

jest.mock("../hooks/useIsMobile");
const mockedUseMobile = useMobile.default as jest.Mock;

describe("LoginFormTest", () => {
    it("RenderCheck", () => {
        render(<SignupForm />);

        // There should be four inputs for signup form one for username and one for email and two for password and confirm password
        expect(screen.getAllByRole("textbox")).toHaveLength(2); // textbox for input type text and email (2)
        expect(screen.getAllByTitle("input")).toHaveLength(2); // title input for input type password for password and confirm password
        expect(screen.getByRole("button").textContent).toBe("Signup");
    });

    describe("Desktop Test (useMobile set to false)", () => {
        beforeAll(() => {
            mockedUseMobile.mockReturnValue(false);
        });

        it("Secondary Button Render Check", () => {
            render(<SignupForm />);
            expect(screen.getByTitle("link-main")).toBeInTheDocument();
        });
    });

    describe("Mobile Test (useMobile set to true)", () => {
        beforeAll(() => {
            mockedUseMobile.mockReturnValue(true);
        });

        it("Secondary Button Render Check", () => {
            render(<SignupForm />);
            expect(screen.queryByTitle("link-main")).not.toBeInTheDocument();
        });
    });
});
