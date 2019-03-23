import Home from "../layouts/Home";
import PostList from "../components/PostList";

const PageIndex = ({ query }) => (
  <div className="wrapper">
    <Home>
      <div className="page page-index">
        <PostList query={query} />
      </div>
    </Home>
  </div>
);

PageIndex.getInitialProps = async ({ query }) => {
  return { query };
};

export default PageIndex;
