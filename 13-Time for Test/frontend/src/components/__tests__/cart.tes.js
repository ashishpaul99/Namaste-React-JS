import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";

// Mocking fetch to return restaurant menu data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  // Click on the accordion header to expand menu section "BURGERS(23)"
  const accordianHeader = screen.getByText("BURGERS(23)");
  fireEvent.click(accordianHeader);

  // Verify 23 items are rendered initially
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(23);

  // Find all "Add" buttons and ensure 23 are present
  const addButtons = screen.getAllByRole("button", { name: /add/i });
  expect(addButtons.length).toBe(23);

  // Check initial cart count in header
  const prevCartCount = screen.getByText("🛒 [0 items]");
  expect(prevCartCount).toBeInTheDocument();

  // Add two items to cart
  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[1]);

  // Verify updated cart count in header
  const cartItemCount = screen.getByText("🛒 [2 items]");
  expect(cartItemCount).toBeInTheDocument();

  // Total food items = 23 from menu + 2 added to cart
  const cartPageItems = screen.getAllByTestId("foodItems");
  expect(cartPageItems.length).toBe(25);

  // Click on "Clear Cart" button
  const clearButton = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clearButton);

  // After clearing, only the original 23 items from the menu should remain
  const updatedCartItems = screen.getAllByTestId("foodItems");
  expect(updatedCartItems.length).toBe(23);

  // Cart should show empty message
  expect(screen.getByText("🛒 Your Cart is Empty")).toBeInTheDocument();
});