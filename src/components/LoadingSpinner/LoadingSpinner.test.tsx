import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("Loading Spinner Tests", () => {

test("renders LoadingSpinner Component", () => {
  render(<LoadingSpinner isLoading={true} prompt="please wait" />)

  expect(screen.getByText("please wait")).toBeDefined()
  
})



})