import { smoothScroll } from '../utils';

function scroll(nav, e) {
    e.stopPropagation();
    e.preventDefault();
    smoothScroll(nav, -10);
}

export default ({navigation}) => {
  if (navigation.length) {
    return (
      <div className="navigation">
        {navigation.map((nav, index) => {
          return (
            <a key={index} className='nav-item' href={`#${index}`} onClick={e => scroll(nav, e)}>
              {nav.innerText}
            </a>
          );
        })}
      </div>
    );
  } else {
    return [];
  }
};
