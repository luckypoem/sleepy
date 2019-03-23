import Home from "../layouts/Home";
import PageItem from "../components/PageItem";

export default () => (
  <div className="wrapper">
    <Home>
      <div className="page page-friends">
        <PageItem label="friends" />
      </div>
    </Home>
  </div>
);
