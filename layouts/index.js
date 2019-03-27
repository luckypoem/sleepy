import React from 'react';
import { inject, observer } from 'mobx-react';
import { seo } from '../sleepy.config';
import Title from '../components/Title';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Baidutongji from '../components/Baidutongji';
import { isMobile } from '../utils';

@inject('store')
@observer
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  componentDidMount() {
    this.setState(() => ({
      isMobile: isMobile()
    }));
  }

  render() {
    const { children, store } = this.props;
    const { isMobile } = this.state;
    return (
      <div
        className={`wrapper${isMobile ? ' mobile' : ''}`}
        style={{
          '--body-bg': store.bodyBg
        }}
      >
        <div className='layout'>
          <Title title={seo.title} />
          <Header />
          <div className="main">{children}</div>
          <Footer />
          <Baidutongji />
        </div>
      </div>
    );
  }
}
