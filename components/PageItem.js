import React from "react";
import api from "../api";
import Link from "next/link";
import Title from "./Title";
import PostLoad from "../components/PostLoad";
import { menus, seo } from "../sleepy.config";

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
        type: "PAGE"
      })
      .then(data => {
        if (data.length) {
          this.setState(() => ({
            post: data[0]
          }));
        }
      });
  }

  render() {
    const { post } = this.state;
    const { label } = this.props;
    if (!post.id) {
      return <PostLoad />;
    }

    const menu = menus.find(item => item.link === `/${label}`);

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
        </div>
      </div>
    );
  }
}