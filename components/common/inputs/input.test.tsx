import Input from './Input';
import { render, fireEvent } from '@testing-library/react';

describe("Test Custom Input Functionality", () => {
    const { getByTitle } = render(<Input type='text' label='test_input'/>)
    const label = getByTitle("main-label")
    const input = getByTitle("main-input")

    it("inputRenderCheck", () => {
        expect(label).not.toBeNull()
        expect(input).not.toBeNull()
    })

    it("labelTextCheck", () => {
        expect(label.textContent).toBe("test_input")
    })
    

    describe("InputFunctionality", () => {
        expect(label.classList).toContain("scale-100")
        expect(label.classList).toContain("translate-x-0")
        expect(label.classList).toContain("translate-y-0")
        expect(label.classList).toContain("text-gray-500")
    
        fireEvent.click(label);
    
        expect(label.classList).toContain("scale-80")
        expect(label.classList).toContain("-translate-x-1")
        expect(label.classList).toContain("-translate-y-6")
        expect(label.classList).toContain("text-main")
    })
})