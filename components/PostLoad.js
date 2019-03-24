import ContentLoader from "react-content-loader";

export default () => (
  <ContentLoader height={80} width={400}>
    <rect x="0" y="0" rx="3" ry="3" width="90" height="65" />
    <rect x="100" y="0" rx="3" ry="3" width="200" height="17" />
    <rect x="100" y="20" rx="3" ry="3" width="300" height="12" />
    <rect x="100" y="35" rx="3" ry="3" width="300" height="12" />
    <rect x="100" y="50" rx="3" ry="3" width="250" height="12" />
  </ContentLoader>
);
