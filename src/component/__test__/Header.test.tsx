import {render ,screen} from "@testing-library/react"
import Header from "../Header"

describe("Header",()=>{
    it("renders the logo correctly",() =>{
        render(<Header/>)
       // const logo = screen.getByRole("logo")
      //  expect(logo).toBeInTheDocument()
      expect(screen.getByText("início")).toBeInTheDocument();
      expect(screen.getByText("Benefícios")).toBeInTheDocument();
      expect(screen.getByText("FAQ")).toBeInTheDocument();
        
    })
})