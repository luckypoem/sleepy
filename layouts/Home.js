import { seo } from '../sleepy.config';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({children}) =>
  <div className="layout layout-home">
    <Head title={seo.title} />
    <Header />
      {children}
    <Footer />
  </div>