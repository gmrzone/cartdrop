import { render } from '@testing-library/react';
import AboutContent from './AboutContent'

it("AboutContentRenderCheck", () => {
    const { getByTitle } = render(<AboutContent />)
    const component = getByTitle("about-content")
    expect(component).not.toBeNull()
    expect(component.textContent).toContain("CARTDROP")
})