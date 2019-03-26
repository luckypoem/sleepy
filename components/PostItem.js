import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import api from '../api';
import Title from './Title';
import Gitting from '../components/Gitting';
import PageLoad from '../components/PageLoad';
import { seo } from '../sleepy.config';
import { relative, format, searchParams, t } from '../utils';

@inject('store')
@observer
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      post: {}
    };
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
        })
        .catch(() => {
          Router.push('/error');
        });
    });
  }

  render() {
    const { post } = this.state;
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
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <div className="time" title={format(post.created_at)}>{relative(post.created_at)}</div>
          <div className="tags">
            {post.tags.map(tag => (
              <span className="tag">#{tag}</span>
            ))}
          </div>
        </div>
        {post.locked ? <div className="locked">{t('commentLocked')}</div> : <Gitting id={this.state.id} />}
      </div>
    );
  }
}
