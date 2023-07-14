import { render, screen } from "@testing-library/react";
import { PromoBanner } from "@/app/components/promo-banner/promo-banner";

describe("Home", () => {
  describe("promo-banner", () => {
    render(<PromoBanner />);
    const myBanner = screen.getBytext("открытых филиала");
    expect(myBanner).toBeInTheDocument();
  });
});
