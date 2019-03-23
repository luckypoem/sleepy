import React from "react";
import Link from "next/link";
import api from "../api";
import Loading from "../components/Loading";
import { images } from "../sleepy.config";
import { relative } from "../utils";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = { posts: [] };
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

  render() {
    const { posts } = this.state;

    if (!posts.length) {
      return <Loading />;
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
      </div>
    );
  }
}
