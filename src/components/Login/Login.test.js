import {render,screen} from "@testing-library/react";


import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("Check the rendering of Login Page",()=>{

    test("should have Login from React on the screen",()=>{

        render(<Login/>)
        const el=screen.getByText("Login");
        expect(el).toBeInTheDocument();

    })

    

    // test("Should have Welcome to React on the screen",()=>{

    //     render(<MyComponent/>)
    //     const el=screen.getByText("Welcome to React");
    //     expect(el).toBeInTheDocument();
    // })

    // test("Should have Welcome to React if Button is not clicked",()=>{
    //     render(<MyComponent/>)
    //     const el=screen.getByText("Welcome to React");
    //     expect(el).toBeInTheDocument();
    // })
    // test("Should have Hi to React if Button is  clicked",async ()=>{
    //     render(<MyComponent/>)
    //     const button=await screen.findByRole("button");
    //     await userEvent.click(button);
    //     const el=await screen.findByText("Hi to React");
    //     expect(el).toBeInTheDocument();
    // })
});
