import CustomSelect from './CustomSelect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('CustomSelectTesting', () => {
    const selectOptions = [
        {
            label: 'Option one',
            value: 'option-one',
        },
        {
            label: 'Option two',
            value: 'option-two',
        },
        {
            label: 'Option Three',
            value: 'option-three',
        },
        {
            label: 'Option Four',
            value: 'option-four',
        },
    ];

    it('RenderCheck', () => {
        render(<CustomSelect options={selectOptions} initialLabel={{ value: 'custom-select', label: 'Custom Select' }} />);
        expect(screen.getByText('Custom Select')).toBeInTheDocument();
        // Select Options should be hidden until the customSelect is clicked
        expect(screen.queryByTitle('select-options')).not.toBeInTheDocument();
        expect(screen.getByTitle('drop-down-icon')).toBeInTheDocument();
        // IF noting is selected then select option should be hidden
        expect(screen.queryByTitle('selected-option')).not.toBeInTheDocument();
    });

    it('DropDown Click Test', async () => {
        const user = userEvent.setup();
        render(<CustomSelect options={selectOptions} initialLabel={{ value: 'custom-select', label: 'Custom Select' }} />);
        // Get CustomSelect and click on it to open dropdown
        const customSelect = screen.getByTitle('custom-select');

        // Option One
        // Click on Custom Select to open options
        await user.click(customSelect);
        // Option should now be visible
        expect(screen.getByTitle('select-options')).toBeInTheDocument();
        // Click on options one
        await user.click(screen.getByTitle(`select-${selectOptions[0].value}`));
        expect(screen.getByTitle('selected-option')).toBeInTheDocument();
        expect(screen.getByTitle('selected-option').textContent).toBe(selectOptions[0].label);
        // After Clicking on one of the options the option dropdown will become hidden again
        expect(screen.queryByTitle('select-options')).not.toBeInTheDocument();

        // Option Two
        // Click on Custom Select to open options
        await user.click(customSelect);
        // Option should now be visible
        expect(screen.getByTitle('select-options')).toBeInTheDocument();
        // Click on options one
        await user.click(screen.getByTitle(`select-${selectOptions[1].value}`));
        expect(screen.getByTitle('selected-option')).toBeInTheDocument();
        expect(screen.getByTitle('selected-option').textContent).toBe(selectOptions[1].label);
        // After Clicking on one of the options the option dropdown will become hidden again
        expect(screen.queryByTitle('select-options')).not.toBeInTheDocument();

        // Option Three
        // Click on Custom Select to open options
        await user.click(customSelect);
        // Option should now be visible
        expect(screen.getByTitle('select-options')).toBeInTheDocument();
        // Click on options one
        await user.click(screen.getByTitle(`select-${selectOptions[2].value}`));
        expect(screen.getByTitle('selected-option')).toBeInTheDocument();
        expect(screen.getByTitle('selected-option').textContent).toBe(selectOptions[2].label);
        // After Clicking on one of the options the option dropdown will become hidden again
        expect(screen.queryByTitle('select-options')).not.toBeInTheDocument();

        // Option Four
        // Click on Custom Select to open options
        await user.click(customSelect);
        // Option should now be visible
        expect(screen.getByTitle('select-options')).toBeInTheDocument();
        // Click on options one
        await user.click(screen.getByTitle(`select-${selectOptions[3].value}`));
        expect(screen.getByTitle('selected-option')).toBeInTheDocument();
        expect(screen.getByTitle('selected-option').textContent).toBe(selectOptions[3].label);
        // After Clicking on one of the options the option dropdown will become hidden again
        expect(screen.queryByTitle('select-options')).not.toBeInTheDocument();
    });

    it('Transition Style test async', async () => {
        const user = userEvent.setup();
        render(<CustomSelect options={selectOptions} initialLabel={{ value: 'custom-select', label: 'Custom Select' }} />);

        const customSelect = screen.getByTitle('custom-select');
        const label = screen.getByText('Custom Select');
        // Default Style
        expect(label.classList).toContain('translate-x-0');
        expect(label.classList).toContain('translate-y-0');
        expect(label.classList).toContain('scale-100');
        expect(label.classList).toContain('text-gray-500');
        expect(customSelect.classList).toContain('border');

        // click the custom select to open dropdown options
        await user.click(customSelect);

        // Click on option two from the dropdown
        await user.click(screen.getByTitle(`select-option-two`));

        // After clicking any option from thedropdown the style of the label
        // Should change (it should translate to x and y direction and scale down to 80)
        expect(label.classList).toContain('-translate-x-5');
        expect(label.classList).toContain('-translate-y-7');
        expect(label.classList).toContain('scale-80');
        expect(label.classList).toContain('text-main');
        expect(customSelect.classList).toContain('border-2');
    });
});
