import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

test("renders Navbar", () => {
  render(<App />);
  const linkElement = screen.getByText("SCAMAZON");
  expect(linkElement).toBeInTheDocument();
});
test("renders Fitness card", () => {
  render(<App />);
  const linkElement = screen.getByText("Fitness");
  expect(linkElement).toBeInTheDocument();
});
test("renders Entertainment card", () => {
  render(<App />);
  const linkElement = screen.getByText("Entertainment");
  expect(linkElement).toBeInTheDocument();
});

test("renders Gaming card", () => {
  render(<App />);
  const linkElement = screen.getByText("Gaming");
  expect(linkElement).toBeInTheDocument();
});

test("renders Pets card", () => {
  render(<App />);
  const linkElement = screen.getByText("Pets");
  expect(linkElement).toBeInTheDocument();
});

test("renders Medical card", () => {
  render(<App />);
  const linkElement = screen.getByText("Medical");
  expect(linkElement).toBeInTheDocument();
});
test("renders Lifestyle card", () => {
  render(<App />);
  const linkElement = screen.getByText("Lifestyle");
  expect(linkElement).toBeInTheDocument();
});
