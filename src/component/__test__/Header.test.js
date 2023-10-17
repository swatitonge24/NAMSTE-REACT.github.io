import { BrowserRouter } from "react-router-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import aapStore from "../utils/aapStore";
import Header from "../Header";
import "@testing-library/jest-dom";




it("Should render Header component with login button",()=>{
    render(
<BrowserRouter>
            <Provider store={aapStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});
it("Should render Header component with 🛒 item 0",()=>{
    render(
<BrowserRouter>
            <Provider store={aapStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartItem=screen.getByText("🛒(0 items" );
    expect(cartItem).toBeInTheDocument();
});
it("Should change Login button to Logout on click",()=>{
    render(
<BrowserRouter>
            <Provider store={aapStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByText("button" ,{name:Login});
    fireEvent.click(loginButton);
    const logoutButton =screen.getByText("button",{name:Logout})
    expect(logoutButton).toBeInTheDocument();
});