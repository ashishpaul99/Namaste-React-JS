
import {fireEvent, render,screen} from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";

it("Should render header component with login button",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>)
    const loginButton=screen.getByRole("button",{name:"Login"});
    // const loginButton=screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});

it("Should render header component with cart items 0",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
    </BrowserRouter>)

    const cartItems=screen.getByText("🛒 [0 items]")
    // using regex
    //  const cartItems=screen.getByText(/🛒 \[\d+ items\]/); // handles any count like 0, 1, etc.
     expect(cartItems).toBeInTheDocument();

})

it("Should change login button to logout on click",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
    </BrowserRouter>)
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);

    const logoutButton=screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeInTheDocument();
})

