import { describe, it, expect } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../../../components/Header/Header.component";
import HeaderMobileNavMenuComponent from "../../../components/Header/HeaderMobileNavMenu/HeaderMobileNavMenu.component";

describe("Testing Header component", () => {
  it("should open mobile menu when clicking hamburger button", () => {
    render(<Header />);

    const hamburgerButton = screen.getByAltText("Hamburger menu icon");

    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    fireEvent.click(hamburgerButton);

    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
  });

  it("should close mobile menu when clicking hamburger button", () => {
    
    const mockSetMobileMenuStatus = vi.fn();

    render(
      <HeaderMobileNavMenuComponent
        setMobileMenuStatus={mockSetMobileMenuStatus}
      />
    );

    const closeButton = screen.getByRole("button", { name: /zamknij menu/i });
    fireEvent.click(closeButton);

    expect(mockSetMobileMenuStatus).toHaveBeenCalledTimes(1);
    expect(mockSetMobileMenuStatus).toHaveBeenCalledWith(false);
  });
});
