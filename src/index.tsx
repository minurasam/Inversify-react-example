import "reflect-metadata";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "inversify-react";
import { Hello } from "./Hello";
import { container } from "./ioc";

const App = () => (
  <Provider container={container}>
    <div>
      <Hello />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
