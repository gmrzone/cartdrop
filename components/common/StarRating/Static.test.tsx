import { render, screen } from "@testing-library/react";
import StaticStarRating from "./Static";

describe("Static Star Rating Test", () => {
    it("Render Check", () => {
        render(<StaticStarRating rating={3} />);
        expect(screen.getByTitle("star-main")).toBeInTheDocument();
        expect(screen.getAllByRole("radio")).toHaveLength(5); //There are total 5 stars
    });

    it("Star Icons Test if the Rating is 5, fa-star = Full Star and fa-star-half-alt = Half Star", () => {
        render(<StaticStarRating rating={5} />);
        // Rating is 5 so all star should be full star
        expect(screen.getByTitle("star-icon-1").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-1").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-2").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-2").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-3").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-3").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-4").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-4").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-5").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-5").classList).toContain("fas");
    });

    it("Star Icons Test if the Rating is 4, fa-star = Full Star and fa-star-half-alt = Half Star", () => {
        render(<StaticStarRating rating={4} />);
        // Rating is 4 so first four star should be full star and the last star should be disabled
        expect(screen.getByTitle("star-icon-1").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-1").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-2").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-2").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-3").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-3").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-4").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-4").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-5").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-5").classList).toContain("far");
    });

    it("Star Icons Test if the Rating is 3.5, fa-star = Full Star and fa-star-half-alt = Half Star", () => {
        render(<StaticStarRating rating={3.5} />);
        // Rating is 3.5 so First 3 star should be full abd fourth star should be half and rest should be disabled
        expect(screen.getByTitle("star-icon-1").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-1").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-2").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-2").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-3").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-3").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-4").classList).toContain("fa-star-half-alt");
        expect(screen.getByTitle("star-icon-4").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-5").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-5").classList).toContain("far");
    });

    it("Star Icons Test if the Rating is 2.8, fa-star = Full Star and fa-star-half-alt = Half Star", () => {
        render(<StaticStarRating rating={2.8} />);
        // Reting is 2.8 so first three star should be full and rest should be disabled
        expect(screen.getByTitle("star-icon-1").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-1").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-2").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-2").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-3").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-3").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-4").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-4").classList).toContain("far");

        expect(screen.getByTitle("star-icon-5").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-5").classList).toContain("far");
    });

    it("Star Icons Test if the Rating is 0.5, fa-star = Full Star and fa-star-half-alt = Half Star", () => {
        render(<StaticStarRating rating={0.5} />);
        // Rating is 0.5 so first star should be half and rest should be disables
        expect(screen.getByTitle("star-icon-1").classList).toContain("fa-star-half-alt");
        expect(screen.getByTitle("star-icon-1").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-2").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-2").classList).toContain("far");

        expect(screen.getByTitle("star-icon-3").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-3").classList).toContain("far");

        expect(screen.getByTitle("star-icon-4").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-4").classList).toContain("far");

        expect(screen.getByTitle("star-icon-5").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-5").classList).toContain("far");
    });

    it("Star Icons Test if the Rating is 0.4, fa-star = Full Star and fa-star-half-alt = Half Star", () => {
        render(<StaticStarRating rating={0.0} />);
        // Rating is 0.0 so all stars should be disables
        expect(screen.getByTitle("star-icon-1").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-1").classList).toContain("far");

        expect(screen.getByTitle("star-icon-2").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-2").classList).toContain("far");

        expect(screen.getByTitle("star-icon-3").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-3").classList).toContain("far");

        expect(screen.getByTitle("star-icon-4").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-4").classList).toContain("far");

        expect(screen.getByTitle("star-icon-5").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-5").classList).toContain("far");
    });

    it("Star Icons Test if the Rating is 2.7, fa-star = Full Star and fa-star-half-alt = Half Star", () => {
        render(<StaticStarRating rating={2.7} />);
        // Rating is 2.7 there should be 2 full star and 1 half star and rest disables
        expect(screen.getByTitle("star-icon-1").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-1").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-2").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-2").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-3").classList).toContain("fa-star-half-alt");
        expect(screen.getByTitle("star-icon-3").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-4").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-4").classList).toContain("far");

        expect(screen.getByTitle("star-icon-5").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-5").classList).toContain("far");
    });

    it("Star Icons Test if the Rating is 4.2, fa-star = Full Star and fa-star-half-alt = Half Star", () => {
        render(<StaticStarRating rating={4.2} />);
        // Rating is 4.2 there should be 4 full star 1 disabled star
        expect(screen.getByTitle("star-icon-1").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-1").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-2").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-2").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-3").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-3").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-4").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-4").classList).toContain("fas");

        expect(screen.getByTitle("star-icon-5").classList).toContain("fa-star");
        expect(screen.getByTitle("star-icon-5").classList).toContain("far");
    });
});
