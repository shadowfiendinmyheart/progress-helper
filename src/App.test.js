import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("test app component", () => {
  test("render headers", () => {
    render(<App />);
    // const h1Element = screen.getByText(/Hello world!!!/i);
    // expect(h1Element).toBeInTheDocument();
    // expect(h1Element).toMatchSnapshot();

    // const h2Element = screen.getByText(/Just perfect!/i);
    // expect(h2Element).toBeInTheDocument();
    // expect(h2Element).toMatchSnapshot();

    // const h3Element = screen.getByText(/Good/i);
    // expect(h3Element).toBeInTheDocument();
    // expect(h3Element).toMatchSnapshot();
  });
});
