import React from "react";
import Link from "next/link";
import api from "../api";
import { images, post } from "../sleepy.config";
import { relative } from "../utils";
import PostLoad from "../components/PostLoad";

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
    api
      .byPage({
        page: this.state.page
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
          loadState: false,
          loadText: "加载更多",
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
            <Link href={`post?id=${item.id}`}>
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
              <Link href={`post?id=${item.id}`}>
                <a className="title">{item.title}</a>
              </Link>
              <div className="excerpt">{item.excerpt}</div>
            </div>
            <div className="time">{relative(item.created_at)}</div>
            <div className="tags">
              {item.tags.map(tag => <span className="tag">#{tag}</span>)}
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
