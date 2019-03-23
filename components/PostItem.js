import React from "react";
import Link from "next/link";
import api from "../api";
import Title from "./Title";
import Gitting from "../components/Gitting";
import PostLoad from "../components/PostLoad";
import { seo } from "../sleepy.config";
import { relative } from "../utils";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const { query } = this.props;
    api.byId(query.id).then(data => {
      this.setState(() => ({
        post: data
      }));
    });
  }

  render() {
    const { post } = this.state;
    const { query } = this.props;
    if (!post.id) {
      return <PostLoad />;
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
            <Link href={`post?id=${post.id}`}>
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
          <div className="time">{relative(post.created_at)}</div>
          <div className="tags">
            {post.tags.map(tag => <span className="tag">#{tag}</span>)}
          </div>
        </div>
        <Gitting query={query} />
      </div>
    );
  }
}