import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp/presets/all";
import * as React from "react";
import * as ReactDom from "react-dom";
import { ISpLearningAreaWebPartProps } from "./ISpLearningAreaWebPartProps";
import SpLearningAreaComponent from "./components/sp-learning-area.component";

export default class SpLearningAreaWebPart extends BaseClientSideWebPart<ISpLearningAreaWebPartProps> {
  public onInit(): Promise<void> {
    return super.onInit().then((_) => {
      // Set up PnPjs context
      sp.setup({
        spfxContext: this.context,
      });
    });
  }

  public render(): void {
    const element: React.ReactElement<ISpLearningAreaWebPartProps> =
      React.createElement(SpLearningAreaComponent, {
        description: this.properties.description,
      });

    ReactDom.render(element, this.domElement);
  }
}
