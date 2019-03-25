import React from 'react';
import Router from 'next/router';
import api from '../api';
import Link from 'next/link';
import Title from './Title';
import PageLoad from '../components/PageLoad';
import { menus, seo } from '../sleepy.config';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const { label } = this.props;
    api
      .byPage({
        labels: label,
        type: 'PAGE'
      })
      .then(data => {
        if (data.length) {
          this.setState(() => ({
            post: data[0]
          }));
        }
      }).catch(() => {
        Router.push('/error');
      });
  }

  render() {
    const { post } = this.state;
    const { label, children } = this.props;
    if (!post.id) {
      return <PageLoad />;
    }

    const menu = menus.find(item => item.link === `/${label}`) || {
      name: 'Not Found'
    };

    return (
      <div className="post-item">
        <Title title={`${seo.title} | ${menu.name}`} />
        <div
          className="content"
          style={{
            padding: 0
          }}
        >
          <Link href={`/${label}`}>
            <a
              className="title"
              style={{
                marginBottom: 10,
                fontSize: 18
              }}
            >
              {post.title}
            </a>
          </Link>
          <div
            className="html markdown-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          {children}
        </div>
      </div>
    );
  }
}
