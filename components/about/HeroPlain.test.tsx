import HeroPlain from "./HeroPlain";
import { render } from '@testing-library/react'


it("RenderCheck", () => {
    const { getByText } = render(<HeroPlain />)
    expect(getByText("ABOUT US")).not.toBeNull()

    
})