import { render, screen } from "@testing-library/react";
import * as useMobile from "../hooks/useIsMobile";
import SocialLogin from "./SocialLogin";

jest.mock("../hooks/useIsMobile");

const mockedUseMobile = useMobile.default as jest.Mock;

describe("SocialLogin Test", () => {
    describe("Render Check with useMobile set to false", () => {
        beforeAll(() => {
            mockedUseMobile.mockReturnValue(false);
        });

        it("Render Check with type login", () => {
            render(<SocialLogin type="login" />);
            expect(screen.getByText("Login with")).toBeInTheDocument();
            expect(screen.queryByTitle("mobile-login-signup")).not.toBeInTheDocument();
        });

        it("Render Check with type signup", () => {
            render(<SocialLogin type="signup" />);
            expect(screen.getByText("Signup with")).toBeInTheDocument();
        });
    });

    describe("Render Check with useMobile set to true", () => {
        beforeAll(() => {
            mockedUseMobile.mockReturnValue(true);
        });

        it("Render Check with type login", () => {
            render(<SocialLogin type="login" />);
            expect(screen.getByTitle("mobile-login-signup")).toBeInTheDocument();
            expect(screen.getByText("Don't have a account?")).toBeInTheDocument();
        });

        it("Render Check with type signup", () => {
            render(<SocialLogin type="signup" />);
            expect(screen.getByText("Already have a account?")).toBeInTheDocument();
        });
    });
});
