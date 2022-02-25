import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Login from "./index";
import useMobile from "../hooks/useIsMobile";

jest.mock("../hooks/useIsMobile", () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(true),
}));

describe("LoginFormTest", () => {
    it("RenderCheck", () => {
        render(<Login />);
        expect(screen.getByTitle("logo-vertical")).toBeInTheDocument();
        expect(useMobile).toHaveBeenCalled();
    });
});
