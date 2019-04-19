import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import mediumZoom from 'medium-zoom';
import api from '../api';
import Title from './Title';
import Gitting from '../components/Gitting';
import PageLoad from '../components/PageLoad';
import Navigation from '../components/Navigation';
import { seo } from '../sleepy.config';
import { relative, format, searchParams, getNavs, t } from '../utils';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      post: {},
      navigation: []
    };
    this.htmlRef = React.createRef();
  }

  componentDidMount() {
    searchParams('id').then(id => {
      api
        .byId(id)
        .then(data => {
          this.setState(() => ({
            id: id,
            post: data
          }));

          this.setState(() => ({
            navigation: getNavs(this.htmlRef.current)
          }));

          [...this.htmlRef.current.querySelectorAll('a')]
            .filter(item => {
              return (
                item.children.length === 1 && item.children[0].tagName === 'IMG'
              );
            })
            .map(item => {
              item.href = 'javascript:void(0);';
              return item.children[0];
            })
            .forEach(item => {
              mediumZoom(item, {
                background: 'rgba(255, 255, 255, 0.8)',
              });
            });
        })
        .catch(() => {
          Router.push('/error');
        });
    });
  }

  render() {
    const { post, navigation } = this.state;
    if (!post.id) {
      return <PageLoad />;
    }

    return (
      <div className="post-wrapper">
        <Title title={`${seo.title} | ${post.title}`} />
        <div className="post-item">
          <div
            className="content"
            style={{
              padding: 0
            }}
          >
            <Link href={`/post?id=${post.id}`}>
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
              ref={this.htmlRef}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <div className="time" title={format(post.created_at)}>
            {relative(post.created_at)}
          </div>
          <Navigation navigation={navigation} />
        </div>
        {post.locked ? (
          <div className="locked">{t('commentLocked')}</div>
        ) : (
          <Gitting id={this.state.id} />
        )}
      </div>
    );
  }
}
