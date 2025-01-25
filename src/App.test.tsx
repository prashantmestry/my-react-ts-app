import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test app", () => {
  it("title check", () => {
    render(<App />);
    const title = screen.getByText(/Hello, React100/i);
    expect(title).toBeInTheDocument();

    let btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});
