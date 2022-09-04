import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from './TextArea';

describe('TEstingTextArea', () => {
    it('RenderCheck', () => {
        render(<TextArea label="Test Text Area" />);
        expect(screen.getByText('Test Text Area')).toBeInTheDocument();
        expect(screen.getByTitle('text-area')).toBeInTheDocument();
    });

    it('TransitionStyleTest', async () => {
        const user = userEvent.setup();
        render(<TextArea label="Test Text Area" />);
        const input = screen.getByTitle('text-area');
        const label = screen.getByText('Test Text Area');

        // Before Click
        expect(input).not.toHaveFocus();
        expect(label.classList).toContain('text-gray-500');
        expect(label.classList).toContain('translate-x-0');
        expect(label.classList).toContain('scale-100');
        expect(label.classList).toContain('translate-y-0');

        await user.click(label);

        // After Click
        expect(input).toHaveFocus();
        expect(label.classList).toContain('-translate-x-1');
        expect(label.classList).toContain('-translate-y-6');
        expect(label.classList).toContain('text-main');
        expect(label.classList).toContain('scale-80');

        // After input blur Transition should go back to normal

        fireEvent.blur(input);

        expect(label.classList).toContain('text-gray-500');
        expect(label.classList).toContain('translate-x-0');
        expect(label.classList).toContain('scale-100');
        expect(label.classList).toContain('translate-y-0');
    });
});
