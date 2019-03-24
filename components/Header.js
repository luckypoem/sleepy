import { menus, images, seo, github } from "../sleepy.config";
import Link from "next/link";

export default ({ banner }) => (
  <div
    className="header"
    style={{
      backgroundImage: `url(${banner || images.banner || "/static/banner.png"})`
    }}
  >
    <div className="header-top">
      <div
        className="blur"
        style={{
          backgroundImage: `url(${banner ||
            images.banner ||
            "/static/banner.png"})`
        }}
      />
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
        <a href={`https://github.com/${github.owner}/${github.repo}/issues`} target="_blank">Github</a>
      </div>
    </div>
    <div className="header-center" />
    <div className="header-bottom">
      <Link href={menus[0].link}>
        <a>
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${images.avatar || "/static/avatar.png"})`
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
