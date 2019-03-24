import { seo } from "../sleepy.config";
import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Baidutongji from "../components/Baidutongji";

export default ({ children }) => (
  <div className="layout layout-home">
    <Title title={seo.title} />
    <Header />
    <div className="main">{children}</div>
    <Footer />
    <Baidutongji />
  </div>
);
