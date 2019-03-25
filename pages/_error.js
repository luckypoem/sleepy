import Home from "../layouts/Home";
import PageItem from "../components/PageItem";

export default () => (
  <div className="wrapper">
    <Home>
      <div className="page page-error">
        <PageItem label="error" />
      </div>
    </Home>
  </div>
);
