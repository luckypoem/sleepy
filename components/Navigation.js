import { smoothScroll } from '../utils';

function scroll(nav, e) {
  e.stopPropagation();
  e.preventDefault();
  smoothScroll(nav, -10);
}

export default ({ navigation }) => {
  return navigation.length ? (
    <div className="navigation">
      {navigation.map((nav, index) => {
        return (
          <a
            key={index}
            href="#"
            onClick={e => scroll(nav, e)}
            className={`nav-${nav.tagName.toLowerCase()}`}
          >
            {nav.innerText}
          </a>
        );
      })}
    </div>
  ) : null;
};
