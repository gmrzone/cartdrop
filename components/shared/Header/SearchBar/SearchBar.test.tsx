import SearchBar from "./index";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("SearchBarTest", () => {
    it("RenderCheck", () => {
        render(<SearchBar />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getByTitle("search-icon")).toBeInTheDocument();
    });

    it("TransitionStyleTest", () => {
        render(<SearchBar />);
        const search = screen.getByTitle("search");

        // Default Style (SeacrhBar Not expended and un focused)
        expect(search.classList).toContain("md:w-12");
        expect(search.classList).not.toContain("md:w-72");
        expect(search.classList).not.toContain("ipad:w-80");
        expect(search.classList).not.toContain("desktop-large:w-96");

        user.click(search);

        // After Click search bar is expended and focused
        expect(search.classList).toContain("md:w-72");
        expect(search.classList).toContain("ipad:w-80");
        expect(search.classList).toContain("desktop-large:w-96");
        expect(search.classList).not.toContain("md:w-12");
        expect(screen.getByRole("textbox")).toHaveFocus();
    });
});
