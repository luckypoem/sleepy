import React from "react";
import { SketchPicker } from "react-color";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      bodyBg: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      }
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({ bodyBg: color.rgb });
  };

  render() {
    const { displayColorPicker, bodyBg } = this.state;
    return (
      <div className="customize">
        <div
          onClick={this.handleClick}
          className="picker"
          style={{
            backgroundColor: `rgba(${bodyBg.r}, ${bodyBg.g}, ${bodyBg.b}, ${
              bodyBg.a
            })`
          }}
        />
        {displayColorPicker ? (
          <div className="popover">
            <div className="cover" onClick={this.handleClose} />
            <SketchPicker color={bodyBg} onChange={this.handleChange} />
          </div>
        ) : null}
      </div>
    );
  }
}
