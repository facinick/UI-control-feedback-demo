import React from "react";
import "../styles/app.css";
import { ControlFeedback } from "./ControlFeedback";

class App extends React.Component<{}, { playing: boolean }> {
  controlFeedbackComponent: ControlFeedback | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      playing: false
    };
  }

  setControlFeedbackComponent = (component: ControlFeedback) => {
    if (component && !this.controlFeedbackComponent) {
      this.controlFeedbackComponent = component;
    }
  };

  onClick = () => {
    if (this.state.playing) {
      this.setState({
        playing: false
      });
      this.controlFeedbackComponent?.animate("pause");
    } else {
      this.setState({
        playing: true
      });
      this.controlFeedbackComponent?.animate("play");
    }
  };

  render(): JSX.Element {
    return (
      <div id="app">
        <button onClick={this.onClick}>
          {this.state.playing ? "PAUSE" : "PLAY"}
        </button>
        <ControlFeedback ref={this.setControlFeedbackComponent} />
      </div>
    );
  }
}

export default App;
