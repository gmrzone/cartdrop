/* eslint @next/next/no-img-element: 0 */ // Disable eslint rule to use img tag in this file
/* eslint @typescript-eslint/no-explicit-any: 0 */ // Disable eslint rule to use any type
import { render, screen } from '@testing-library/react';
import TodaysDeal from './index';

jest.mock('../../../public/TV.jpg', () => {
    TVImage: 'image.jpg';
});

// Mock next/image
jest.mock('next/legacy/image', () => ({
    __esModule: true,
    default: (props: any) => {
        return <img {...props} alt={props.alt} />;
    },
}));

describe('TodaysDeal Component Test', () => {
    it('Render Check', () => {
        render(<TodaysDeal />);
        expect(screen.getByText("TODAY'S DEAL")).toBeInTheDocument();
        expect(screen.getByTitle('offer-counter')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByTitle('offer-price')).toBeInTheDocument();
        expect(screen.getByTitle('offer-mrp')).toBeInTheDocument();
        expect(screen.getByTitle('offer-discount')).toBeInTheDocument();
    });

    it('Content test', () => {
        render(<TodaysDeal />);
        expect(screen.getByRole('button').childNodes[0].textContent).toBe('Buy now');
        expect(screen.getByTitle('offer-price').textContent).toBeTruthy();
        expect(screen.getByTitle('offer-mrp').textContent).toBeTruthy();
        expect(screen.getByTitle('offer-discount').textContent).toBeTruthy();
    });
});
