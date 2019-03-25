import React from 'react';
import { menus, images, seo, github } from '../sleepy.config';
import Link from 'next/link';
import stackBlurToUrl from 'stack-blur-to-url';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: props.banner || images.banner || '/static/banner.png',
      avatar: props.avatar || images.avatar || '/static/avatar.png',
      blurBanner: props.banner || images.banner || '/static/banner.png',
    };
  }

  componentDidMount() {
    stackBlurToUrl(this.state.banner, 30).then(url => {
      this.setState({
        blurBanner: url
      });
    });
  }

  componentWillUnmount() {
    window.URL.revokeObjectURL(this.state.blurBanner);
  }

  render() {
    const { banner, avatar, blurBanner } = this.state;
    return (
      <div
        className="header"
        style={{
          backgroundImage: `url(${banner})`
        }}
      >
        <div
          className="header-top"
          style={{
            backgroundImage: `url(${blurBanner})`
          }}
        >
          <div className="menus">
            {menus.map(item => (
              <div key={item.name} className="menu-item">
                <Link href={item.link}>
                  <a>{item.name}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className="github">
            <a
              href={`https://github.com/${github.owner}/${github.repo}/issues`}
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="header-center" />
        <div className="header-bottom">
          <Link href={menus[0].link}>
            <a>
              <div
                className="avatar"
                style={{
                  backgroundImage: `url(${avatar})`
                }}
              />
            </a>
          </Link>
          <div className="name">
            <div className="title">{seo.title}</div>
            <div className="description">{seo.description}</div>
          </div>
        </div>
      </div>
    );
  }
}
