import React from "react";
import { seo } from "../sleepy.config";
import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Baidutongji from "../components/Baidutongji";
import { isMobile } from "../utils";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  componentDidMount() {
    this.setState(() => ({
      isMobile: isMobile()
    }));
  }

  render() {
    const { children } = this.props;
    const { isMobile } = this.state;
    return (
      <div className={`layout layout-home${isMobile ? " mobile" : ""}`}>
        <Title title={seo.title} />
        <Header />
        <div className="main">{children}</div>
        <Footer />
        <Baidutongji />
      </div>
    );
  }
}
