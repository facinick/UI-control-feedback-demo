import { render } from "react-dom";
import * as React from "react";
import "../styles/controlfeedback.css";
interface Props {
  childred?: JSX.Element;
}
interface State {
  icon: "play" | "pause" | "";
}
export class ControlFeedback extends React.Component<Props, State> {
  ANIMATION_DURATION_MS = 5;
  animationTimeout: NodeJS.Timeout = null as unknown as NodeJS.Timeout;
  feedbackDiv: HTMLDivElement | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      icon: ""
    };
  }

  animate = (icon: "play" | "pause") => {
    this.feedbackDiv?.classList.remove("animate");
    this.setState({ icon }, () => {
      clearTimeout(this.animationTimeout);
      this.animationTimeout = setTimeout(() => {
        this.feedbackDiv?.classList.add("animate");
      }, this.ANIMATION_DURATION_MS);
    });
  };

  setFeedbackDiv = (element: HTMLDivElement) => {
    if (element && !this.feedbackDiv) {
      this.feedbackDiv = element;
    }
  };

  render = (): JSX.Element => {
    return (
      <div
        ref={this.setFeedbackDiv}
        className={"control-feedback"}
        id={this.state.icon}
      ></div>
    );
  };
}
