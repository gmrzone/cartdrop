import { render, screen } from '@testing-library/react';
import ProfileDropdown from './ProfileDropDown';

it('ContentTest', () => {
    render(<ProfileDropdown profileDropdownActive={true} />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/sign-up/i)).toBeInTheDocument();
    expect(screen.getByTitle('profile-item-login')).toHaveAttribute('href', '/login');
    expect(screen.getByTitle('profile-item-signup')).toHaveAttribute('href', '/signup');
});
