import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a 'TO DO LIST' title", () => {
      const title = "TO DO LIST";

      render(<Header />);
      const headerTitle = screen.getByRole("heading", {
        name: title,
      });

      expect(headerTitle).toBeVisible();
    });
  });
});
