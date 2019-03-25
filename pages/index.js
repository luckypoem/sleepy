import PostList from "../components/PostList";

const PageIndex = ({ query }) => (
  <div className="page page-index">
    <PostList query={query} />
  </div>
);

PageIndex.getInitialProps = async ({ query }) => {
  return { query };
};

export default PageIndex;
