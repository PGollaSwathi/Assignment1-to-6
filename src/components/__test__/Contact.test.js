import { render , screen} from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

test("should load heaading incontact us page" , ()=>{
    render(<ContactUs />);
    //query
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
})
test("should load button in contact us page" , ()=>{
    render(<ContactUs />);
    const button = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
})