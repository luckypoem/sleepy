import React from "react";
import Link from "next/link";
import api from "../api";
import { images, post } from "../sleepy.config";
import { relative } from "../utils";

const PostLoad = () => {
  return (
    <div className="post-item">
      <div className="poster loading" style={{ height: 80 }} />
      <div className="content">
        <div
          className="title loading"
          style={{ height: 20, marginBottom: 5, width: "80%" }}
        />
        <div className="excerpt">
          <div
            className="loading"
            style={{ height: 15, marginBottom: 5, width: "100%" }}
          />
          <div
            className="loading"
            style={{ height: 15, marginBottom: 5, width: "100%" }}
          />
          <div className="loading" style={{ height: 15, width: "50%" }} />
        </div>
      </div>
    </div>
  );
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: false,
      loadEnd: false,
      page: 1,
      loadText: "加载更多",
      posts: []
    };
  }

  componentDidMount() {
    const { query } = this.props;
    api
      .byPage({
        page: query.page || 1
      })
      .then(data => {
        this.setState(() => ({
          posts: data
        }));
      });
  }

  loadMore() {
    if (this.state.loadState) {
      return;
    }

    this.setState(() => ({
      loadState: true,
      loadText: "加载中..."
    }));

    api
      .byPage({
        page: this.state.page + 1
      })
      .then(data => {
        this.setState(prevState => ({
          loadEnd: data.length < post.pageSize,
          page: prevState.page,
          posts: [...prevState.posts, ...data]
        }));
      });
  }

  render() {
    const { posts, loadText, loadEnd } = this.state;
    if (!posts.length) {
      return (
        <div className="post-list">
          <PostLoad />
          <PostLoad />
          <PostLoad />
        </div>
      );
    }

    return (
      <div className="post-list">
        {posts.map(item => (
          <div key={item.id} className="post-item">
            <Link href={`post/?id=${item.id}`}>
              <a>
                <div
                  className="poster"
                  style={{
                    backgroundImage: `url(${item.poster ||
                      images.poster ||
                      "/static/poster.png"})`
                  }}
                />
              </a>
            </Link>
            <div className="content">
              <Link href={`post/?id=${item.id}`}>
                <a className="title">{item.title}</a>
              </Link>
              <div className="excerpt">{item.excerpt}</div>
            </div>
            <div className="time">{relative(item.created_at)}</div>
            <div className="tags">
              {item.tags.map(tag => (
                <Link key={tag} href={`archive/?tag=${tag}`}>
                  <a className="tag">#{tag}</a>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {loadEnd ? (
          <div className="loadEnd">加载完毕</div>
        ) : (
          <div className="loadMore" onClick={this.loadMore.bind(this)}>
            {loadText}
          </div>
        )}
      </div>
    );
  }
}
