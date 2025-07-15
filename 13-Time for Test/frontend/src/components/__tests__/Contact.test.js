import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases",()=>{
     // beforeAll(()=>{
     //      console.log("Before All");
     // })

     // beforeEach(()=>{
     //      console.log("Before Each");
     // })

     // afterAll(()=>{
     //      console.log("After All");
     // })

     // afterEach(()=>{
     //      console.log("After Each");
     // })


     it("Should load contact us component",()=>{
          render(<Contact/>)
          const heading=screen.getByRole("heading",{level:1});
          expect(heading).toBeInTheDocument();
     });

     it("Should load button inside contact component",()=>{
          render(<Contact/>);
          const button=screen.getByText("Submit");
          expect(button).toBeInTheDocument();
     });

     it("Should load input inside contact component",()=>{
     render(<Contact/>);
     // querying
          const inputName=screen.getByPlaceholderText("name")
          expect(inputName).toBeInTheDocument();
     });

     it("Should load 2 input boxes on the contact us component",()=>{
          render(<Contact/>);
          const inputBoxes=screen.getAllByRole("textbox");
          // console.log(inputBoxes.length);
          expect(inputBoxes.length).toBe(2);
     });

})





