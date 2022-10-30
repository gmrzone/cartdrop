/* eslint @next/next/no-img-element: 0 */ // Disable eslint rule to use img tag in this file
/* eslint @typescript-eslint/no-explicit-any: 0 */ // Disable eslint rule to explicit any type
import LeftNav from './NavLeft';
import { render, screen } from '@testing-library/react';
import { navLeftData, NavLeftData2 } from './data';

// Mock image
jest.mock('../../../public/default_profilepic.png', () => ({
    DefaultProfile: '/test-image',
}));

// Mock next/image
jest.mock('next/legacy/image', () => ({
    __esModule: true,
    default: (props: any) => {
        return <img {...props} alt={props.alt} />;
    },
}));
describe('Testing Left Navbar', () => {
    const toggleLeftNav = jest.fn();

    it('Render Check', () => {
        render(<LeftNav leftNavActive={false} toggleLeftNav={toggleLeftNav} />);
        expect(screen.getByText('More')).toBeInTheDocument();
    });

    it('Nav Item test', () => {
        render(<LeftNav leftNavActive={false} toggleLeftNav={toggleLeftNav} />);
        navLeftData.concat(NavLeftData2).forEach((x) => {
            expect(screen.getByText(x.name)).toBeInTheDocument();
        });
    });
});
