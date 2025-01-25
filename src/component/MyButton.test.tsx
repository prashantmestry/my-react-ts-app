import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MyButton from "./MyButton";

test("Button renders with label and responds to click", () => {
  const handleClick = jest.fn();
  render(<MyButton onClick={handleClick} label="Click Her" />);

  const button = screen.getByText(/click her/i);
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
