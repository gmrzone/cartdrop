import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

it("HeroRenderCheck", () => {
    render(<Hero />);
    expect(screen.getByTitle("hero-main")).toBeInTheDocument();
    expect(screen.getByTitle("hero-text")).toBeInTheDocument();
    expect(screen.getByText(/(\d){1,2}%/)).toBeInTheDocument();
});
