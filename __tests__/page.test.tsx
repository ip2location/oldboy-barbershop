import Home from "../src/app/page";
import { render, screen } from "@testing-library/react";


describe("Home", () => {
    it('should pass all the tests', () => {
    render(<Home/>)
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
    });
});

