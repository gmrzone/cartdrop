import HeroPlain from "./HeroPlain";
import { render, screen } from '@testing-library/react'


it("RenderCheck", () => {
    render(<HeroPlain />)
    expect(screen.getByText("ABOUT US")).toBeInTheDocument()    
})