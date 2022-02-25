import { render, screen } from "@testing-library/react";
import * as useMobile from "../hooks/useIsMobile";
import Right from "./Right";
import LoginForm from "../Login/LoginForm";
import SignupForm from "../Signup/SignupForm";

jest.mock("../hooks/useIsMobile");

const mockedUseMobile = useMobile.default as jest.Mock;

describe("Right Component Test", () => {
    it("Render Check with type login", () => {
        render(<Right Form={LoginForm} type="login" />);
        expect(screen.getByText("LOGIN")).toBeInTheDocument();
        expect(screen.getByTitle("login-form")).toBeInTheDocument();
    });

    it("Render Check with type signup", () => {
        render(<Right Form={SignupForm} type="signup" />);
        expect(screen.getByText("SIGNUP")).toBeInTheDocument();
        expect(screen.getByTitle("signup-form")).toBeInTheDocument();
    });

    describe("Social Login Icon tests with useMobile = False", () => {
        beforeAll(() => {
            // set useMobile return value to false
            mockedUseMobile.mockReturnValue(false);
        });

        it("Social Icons Render Check", () => {
            render(<Right Form={LoginForm} type="login" />);
            expect(screen.queryByTitle("social-login")).not.toBeInTheDocument();
        });
    });

    describe("Social Login Icon tests with useMobile = True", () => {
        beforeAll(() => {
            // set useMobile return value to true
            mockedUseMobile.mockReturnValue(true);
        });

        it("Social Icons Render Check", () => {
            render(<Right Form={LoginForm} type="login" />);
            expect(screen.getByTitle("social-login")).toBeInTheDocument();
        });
    });
});
