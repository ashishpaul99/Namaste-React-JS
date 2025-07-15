import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

// 🧪 Mocking fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should search restaurant list for biryani text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // resCards count before search 
  const cardsBeforeSearch=screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  // 🔍 Getting the search button by role
  const searchButton = screen.getByRole("button", { name: /search/i });

  // 🔤 Getting the search input using test ID
  const searchInput = screen.getByTestId("searchInput");

  // 🔁 Simulating typing in the input
  fireEvent.change(searchInput, { target: { value: "biryani" } });

  // 🖱️ Simulating click on the search button
  fireEvent.click(searchButton);

  // ✅ Add expectation here if needed, e.g.:
    const cardsAfterSearch=screen.getAllByTestId("resCard");

    // resCards after search
    expect(cardsAfterSearch.length).toBe(2);
});
