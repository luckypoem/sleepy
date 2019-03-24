import React from "react";
import { baidutongji } from "../sleepy.config";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (baidutongji) {
      window._hmt = window._hmt || [];
      const hm = document.createElement("script");
      hm.src = `https://hm.baidu.com/hm.js?${baidutongji}`;
      const s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    }
  }

  render() {
    return null;
  }
}
