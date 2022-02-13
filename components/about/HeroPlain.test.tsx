import { render } from "@testing-library/react"
import HeroPlain from './HeroPlain'


it("HeroPlainRenderCheck", () => {
    const { getByText } = render(<HeroPlain />)
    expect(getByText("ABOUT US")).not.toBeNull()
})