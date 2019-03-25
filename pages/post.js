import PostItem from "../components/PostItem";

const PagePost = ({ query }) => (
  <div className="page page-post">
    <PostItem query={query} />
  </div>
);

PagePost.getInitialProps = async ({ query }) => {
  return { query };
};

export default PagePost;