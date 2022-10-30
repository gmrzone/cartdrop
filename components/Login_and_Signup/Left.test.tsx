import { render, screen } from '@testing-library/react';
import * as useMobile from '../hooks/useIsMobile';
import Left from './Left';

jest.mock('../hooks/useIsMobile');

const mockedUseMobile = useMobile.default as jest.Mock;

describe('Login Left Section testing', () => {
    // eslint-disable-next-line jest/no-commented-out-tests
    // it("RenderCheck Vertical Logo", () => {
    //     render(<Left type="login" />);
    //     const verticalLogo = screen.getByTitle("logo-vertical");
    //     expect(verticalLogo).toBeInTheDocument();
    //     expect(verticalLogo).toHaveAttribute("href", "/");
    // });

    it('RenderCheck with type login', () => {
        render(<Left type="login" />);
        expect(screen.getByText(/Login with/i)).toBeInTheDocument();
    });

    it('RenderCheck with type signup', () => {
        render(<Left type="signup" />);
        expect(screen.getByText(/Signup with/i)).toBeInTheDocument();
    });

    describe('Testing Left Component with useMobile = False', () => {
        beforeAll(() => {
            mockedUseMobile.mockReturnValue(false);
        });
        it('RenderCheck', () => {
            render(<Left type="login" />);
            // useMobile is false so social-login icon should be in left COmponent
            expect(screen.getByTitle('social-login')).toBeInTheDocument();
            // useMobile is false so left side blue blob should be in left COmponent
            expect(screen.getByTitle('desktop-left-blob')).toBeInTheDocument();
        });
    });

    describe('Testing Left Component with useMobile = True', () => {
        beforeAll(() => {
            mockedUseMobile.mockReturnValue(true);
        });

        it('RenderCheck', () => {
            render(<Left type="login" />);
            // useMobile is true so social-login icon should not be in left COmponent
            expect(screen.queryByTitle('social-login')).not.toBeInTheDocument();
            // useMobile is true so left side blue blob should not be in left COmponent
            expect(screen.queryByTitle('desktop-left-blob')).not.toBeInTheDocument();
        });
    });
});
