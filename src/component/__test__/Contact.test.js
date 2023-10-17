import { render ,screen} from "@testing-library/react";

import "@testing-library/jest-dom";
import Contact from "../contact";


test("Should load Contact us component" ,()=>{
render(<Contact/>)
const heading =screen.getByRole("heading");
//Assertion
expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact  component" ,()=>{
    render(<Contact/>);
    const button =screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
    }
    )
    test("Should load input name inside Contact  component" ,()=>{
        render(<Contact/>);
        const inputName =screen.getByPlaceholderText("Your Name");
        //Assertion
        expect(inputName).toBeInTheDocument();
        }
        )
       
            
    

    