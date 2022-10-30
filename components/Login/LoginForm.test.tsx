import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
// import * as useMobile from "../hooks/useIsMobile";

jest.mock('../hooks/useIsMobile');
// const mockedUseMobile = useMobile.default as jest.Mock;

describe('LoginFormTest', () => {
    it('RenderCheck', () => {
        render(<LoginForm />);
        // expect(screen.getByTitle("forgot-password")).toBeInTheDocument();
        // expect(screen.getByTitle("forgot-password")).toHaveAttribute("href", "/reset-password");
        // There should be two inputs for login form one for username and one for password
        expect(screen.getAllByRole('textbox')).toHaveLength(1); // textbox for input type text
        expect(screen.getAllByTitle('input')).toHaveLength(1); // title input for input type password
        expect(screen.getByRole('button').textContent).toBe('Login');
    });

    // eslint-disable-next-line jest/no-commented-out-tests
    // describe("Desktop Test (useMobile set to false)", () => {
    //     beforeAll(() => {
    //         mockedUseMobile.mockReturnValue(false);
    //     });

    //     // it("Secondary Button Render Check", () => {
    //     //     render(<LoginForm />);
    //     //     expect(screen.getByTitle("link-main")).toBeInTheDocument();
    //     // });
    // });

    // eslint-disable-next-line jest/no-commented-out-tests
    // describe("Mobile Test (useMobile set to true)", () => {
    //     beforeAll(() => {
    //         mockedUseMobile.mockReturnValue(true);
    //     });

    // eslint-disable-next-line jest/no-commented-out-tests
    //     it("Secondary Button Render Check", () => {
    //         render(<LoginForm />);
    //         expect(screen.queryByTitle("link-main")).not.toBeInTheDocument();
    //     });
    // });
});
