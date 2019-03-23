import Home from "../layouts/Home";
import PostItem from "../components/PostItem";

const PagePost = ({ query }) => (
  <div className="wrapper">
    <Home>
      <div className="page page-post">
        <PostItem query={query} />
      </div>
    </Home>
  </div>
);

PagePost.getInitialProps = async ({ query }) => {
  return { query };
};

export default PagePost;