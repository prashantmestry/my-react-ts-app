import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import User from "./User";

// Mocking axios module
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("fetches and displays user data", async () => {
  // Create a mock response
  const mockResponse = { data: { title: "John Doe" } };
  mockedAxios.get.mockResolvedValue(mockResponse);

  // Render the User component
  render(<User />);

  // Check if the mocked response is used in the component
  const userNameElement = await waitFor(() => screen.getByText(/John Doe/i));
  expect(userNameElement).toBeInTheDocument();
});
