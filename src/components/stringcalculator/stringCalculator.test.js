import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./stringCalculator";
import "@testing-library/jest-dom";

describe("StringCalculator Component", () => {
  test("renders input and button", () => {
    render(<StringCalculator />);
    expect(screen.getByPlaceholderText("Enter numbers")).toBeInTheDocument();
    expect(screen.getByText("Calculate")).toBeInTheDocument();
  });

  test("returns 0 for empty input", () => {
    render(<StringCalculator />);
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 0")).toBeInTheDocument();
  });

  test("calculates sum with commas", () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1,2,3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("calculates sum with newlines", () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1\n2,3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });
  /*
  test("handles single custom delimiter", () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "//;\n1;2;3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  test("handles multiple custom delimiters", () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "//[*][%]\n1*2%3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });*/

  test("handles newline as valid delimiter", () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1,\n" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 1")).toBeInTheDocument();
  });

  test("ignores numbers greater than 1000", () => {
    render(<StringCalculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "2,1001" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(screen.getByText("Result: 2")).toBeInTheDocument();
  });

  test("alerts for negative numbers", () => {
    window.alert = jest.fn();
    render(<StringCalculator />);
    fireEvent.change(screen.getByPlaceholderText("Enter numbers"), {
      target: { value: "1,-2,3" },
    });
    fireEvent.click(screen.getByText("Calculate"));
    expect(window.alert).toHaveBeenCalledWith("Negatives not allowed: -2");
  });
});
