import RestaurantCard from  "../RestaurantCard"
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json"
import { withPromotedLabel } from "../RestaurantCard"
import  PROMOTED_DATA  from "./../mocks/withPromotedLabelMock.json";

it("should render RestaurantCard component with props data",()=>{
     render(<RestaurantCard  resData={MOCK_DATA}/>);
     const resName=screen.getByText("KFC");
     expect(resName).toBeInTheDocument();
});

const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

it("should render RestaurantCard component with prmoted label",()=>{
     render(<RestaurantCardPromoted resData={PROMOTED_DATA}/>);
     const promotedLabel=screen.getByText("Promoted")
     expect(promotedLabel).toBeInTheDocument();
})





