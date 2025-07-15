import Body from "../Body";
import { render,screen,fireEvent,act} from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

  // beforeAll(()=>{
  //   console.log("Before All");
  // })

  // beforeEach(()=>{
  //   console.log("Before Each");
  // })

  it("should render body component with top rate restaurant",async ()=>{
   await act(async ()=>{
       render(<BrowserRouter> <Body/></BrowserRouter>) 
   })
   const cardsBeforeFilter=screen.getAllByTestId("resCard");
   expect(cardsBeforeFilter.length).toBe(20)

   const topRatedRestaurantButton=screen.getByRole("button",{name:"Top Rated Restaurants"});
   expect(topRatedRestaurantButton).toBeInTheDocument()

   fireEvent.click(topRatedRestaurantButton);
   
   const cardsAfterFilter=screen.getAllByTestId("resCard");
   expect(cardsAfterFilter.length).toBe(5)
})