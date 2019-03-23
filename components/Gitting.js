import React from "react";
import Gitting from "gitting";
import { github } from "../sleepy.config";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.gittingRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props;
    if (id) {
      this.gitting = new Gitting({
        ...github,
        number: id
      });
      this.gitting.render(this.gittingRef.current);
    }
  }

  componentWillUnmount() {
    this.gitting && this.gitting.destroy && this.gitting.destroy();
  }

  render() {
    return <div ref={this.gittingRef} className="gitting" id="gitting-container" />;
  }
}
