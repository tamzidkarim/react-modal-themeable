import React from "react";
import { cleanup } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
