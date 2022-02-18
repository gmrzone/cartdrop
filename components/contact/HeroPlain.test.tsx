import { render, screen } from "@testing-library/react";
import HeroPlain from "./HeroPlain";

it("RenderCheck", () => {
    render(<HeroPlain />);
    expect(screen.getByText("CONTACT US")).toBeInTheDocument();
});
