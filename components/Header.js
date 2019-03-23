import { menus, images } from "../sleepy.config";
import Link from "next/link";

export default () => (
  <div
    className="header"
    style={{
      backgroundImage: `url(${images.banner || '/static/banner.png'})`
    }}
  >
    <div className="header-top">
      <div
        className="blur"
        style={{
          backgroundImage: `url(${images.banner || '/static/banner.png'})`
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
      <div className="tool">tool</div>
    </div>
    <div className="header-center" />
    <div className="header-bottom">
      <div
        className="avatar"
        style={{
          backgroundImage: `url(${images.avatar || '/static/avatar.png'})`
        }}
      />
    </div>
  </div>
);
