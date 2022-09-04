import { render, screen } from '@testing-library/react';
import CartIcon from './Cart';
import userEvent from '@testing-library/user-event';

describe('CartIconTest', () => {
    const toggleCartSidebar = jest.fn();
    const classes = 'w-7 h-7 mobile-sm:w-8 mobile-sm:h-8';

    it('RenderCheck', () => {
        render(<CartIcon toggleCartSidebar={toggleCartSidebar} classes={classes} title="cart-icon" />);
        expect(screen.getByTitle('cart-icon')).toBeInTheDocument();
    });

    it('ClickTest', async () => {
        const user = userEvent.setup();
        render(<CartIcon toggleCartSidebar={toggleCartSidebar} classes={classes} title="cart-icon" />);
        await user.click(screen.getByTitle('cart-icon'));
        expect(toggleCartSidebar).toHaveBeenCalledTimes(1);
    });
});
