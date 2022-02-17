import { render, screen } from "@testing-library/react";
import AboutContent from "./AboutContent";

it("RenderCheck", () => {
    render(<AboutContent />);
    expect(screen.getByTitle("about-content")).toBeInTheDocument();
    expect(screen.getByTitle("about-content").textContent).toContain("CARTDROP");
});
