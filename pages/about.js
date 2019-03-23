import Home from "../layouts/Home";
import PageItem from "../components/PageItem";

export default () => (
  <div className="wrapper">
    <Home>
      <div className="page page-about">
        <PageItem label="about" />
      </div>
    </Home>
  </div>
);
