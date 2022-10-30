import { render, screen } from '@testing-library/react';
import SignupForm from './SignupForm';
// import * as useMobile from "../hooks/useIsMobile";

jest.mock('../hooks/useIsMobile');
// const mockedUseMobile = useMobile.default as jest.Mock;

describe('SignupFormTest', () => {
    it('RenderCheck', () => {
        render(<SignupForm />);

        // There should be four inputs for signup form one for username and one for email and two for password and confirm password
        expect(screen.getAllByRole('textbox')).toHaveLength(3); // textbox for input type text and email (2)
        expect(screen.getAllByTitle('input')).toHaveLength(2); // title input for input type password for password and confirm password
        expect(screen.getByRole('button').textContent).toBe('Signup');
    });

    // eslint-disable-next-line jest/no-commented-out-tests
    // describe("Desktop Test (useMobile set to false)", () => {
    //     beforeAll(() => {
    //         mockedUseMobile.mockReturnValue(false);
    //     });

    // eslint-disable-next-line jest/no-commented-out-tests
    //     it("Secondary Button Render Check", () => {
    //         render(<SignupForm />);
    //         expect(screen.getByTitle("link-main")).toBeInTheDocument();
    //     });
    // });

    // eslint-disable-next-line jest/no-commented-out-tests
    // describe("Mobile Test (useMobile set to true)", () => {
    //     beforeAll(() => {
    //         mockedUseMobile.mockReturnValue(true);
    //     });

    // eslint-disable-next-line jest/no-commented-out-tests
    //     it("Secondary Button Render Check", () => {
    //         render(<SignupForm />);
    //         expect(screen.queryByTitle("link-main")).not.toBeInTheDocument();
    //     });
    // });
});
