import { render, screen } from "@testing-library/react";
import OfferCounter from "./OfferCounter";

describe("Offer Counter Test", () => {
    it("Render Check for Day, Hour, Min and second", () => {
        const offerEndDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
        render(<OfferCounter offerEndDate={offerEndDate} />);
        expect(screen.getByTitle("offer-counter-day")).toBeInTheDocument();
        expect(screen.getByTitle("offer-counter-hour")).toBeInTheDocument();
        expect(screen.getByTitle("offer-counter-min")).toBeInTheDocument();
        expect(screen.getByTitle("offer-counter-sec")).toBeInTheDocument();
        expect(screen.getByText(/Day/)).toBeInTheDocument();
        expect(screen.getByText(/Hour/)).toBeInTheDocument();
        expect(screen.getByText(/min/i)).toBeInTheDocument();
        expect(screen.getByText(/sec/i)).toBeInTheDocument();
    });

    it("Counter Value check for Hour Min and Second", () => {
        const offerEndDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
        render(<OfferCounter offerEndDate={offerEndDate} />);
        expect(screen.getByTitle("counter-day-main").textContent).toBeTruthy();
        expect(screen.getByTitle("counter-hour-main").textContent).toBeTruthy();
        expect(screen.getByTitle("counter-min-main").textContent).toBeTruthy();
        expect(screen.getByTitle("counter-sec-main").textContent).toBeTruthy();
    });
});
