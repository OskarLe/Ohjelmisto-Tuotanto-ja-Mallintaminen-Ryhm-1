import { render } from "@testing-library/react";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

test("If it works", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
