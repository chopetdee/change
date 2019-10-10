import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Change from "./change";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Render with all type of input", () => {
  act(() => {
    render(<Change money="124.67"/>, container);
  });
  expect(container.textContent).toBe("Your change is 1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies.");

  act(() => {
    render(<Change money=".99" />, container);
  });
  expect(container.textContent).toBe("Your change is 3 quarters, 2 dimes, and 4 pennies.");

  act(() => {
    render(<Change money="1.00" />, container);
  });
  expect(container.textContent).toBe("Your change is 1 1 dollar bill.");
  
  act(() => {
    render(<Change money="1.001" />, container);
  });
  expect(container.textContent).toBe("Please only put positive numbers, with no more that 2 decimals.");
  
  act(() => {
    render(<Change money="1.00a" />, container);
  });
  expect(container.textContent).toBe("Please only put positive numbers, with no more that 2 decimals.");
  
  act(() => {
    render(<Change money="1.a00" />, container);
  });
  expect(container.textContent).toBe("Please only put positive numbers, with no more that 2 decimals.");
  
  act(() => {
    render(<Change money="a1.00" />, container);
  });
  expect(container.textContent).toBe("Please only put positive numbers, with no more that 2 decimals.");
  
  act(() => {
    render(<Change money="*" />, container);
  });
  expect(container.textContent).toBe("Please only put positive numbers, with no more that 2 decimals.");
  
  act(() => {
    render(<Change money="asjklfwj92" />, container);
  });
  expect(container.textContent).toBe("Please only put positive numbers, with no more that 2 decimals.");

  
  act(() => {
    render(<Change money="-1" />, container);
  });
  expect(container.textContent).toBe("Please only put positive numbers, with no more that 2 decimals.");
  
  act(() => {
    render(<Change money="0" />, container);
  });
  expect(container.textContent).toBe("There is no change.");
  
  act(() => {
    render(<Change money="1234567.890000000" />, container);
  });
  expect(container.textContent).toBe("Your change is 12345 100 dollar bills, 1 50 dollar bill, 1 10 dollar bill, 1 5 dollar bill, 2 1 dollar bills, 3 quarters, 1 dime, and 4 pennies.");
});