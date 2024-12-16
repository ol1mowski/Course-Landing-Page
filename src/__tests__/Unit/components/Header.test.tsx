import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Header from "../../../components/Header/Header.component";
import HeaderMobileNavMenuComponent from "../../../components/Header/HeaderMobileNavMenu/HeaderMobileNavMenu.component";


const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('React Router Future Flag Warning')) return;
  originalConsoleWarn(...args);
};

const renderWithRouter = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe("Testing Header component", () => {
  it("should open mobile menu when clicking hamburger button", () => {
    renderWithRouter(<Header />);

    const hamburgerButton = screen.getByAltText("Hamburger menu icon");

    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    fireEvent.click(hamburgerButton);

    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
  });

  it("should close mobile menu when clicking hamburger button", () => {
    const mockSetMobileMenuStatus = vi.fn();

    renderWithRouter(
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
