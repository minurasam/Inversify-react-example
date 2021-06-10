import * as React from "react";
import { resolve } from "inversify-react";
import { IProvider } from "./providers";

export class Hello extends React.Component {
  @resolve("nameProvider") private readonly nameProvider: IProvider<string>;

  render() {
    return <h1>Hello {this.nameProvider.provide()}!</h1>;
  }
}
