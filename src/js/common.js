import Highway from "@dogstudio/highway/build/es5/highway";

const H = new Highway.Core({
  renderers: {
    index: () => import( /* webpackChunkName: "index" */ './index'),
    about: () => import( /* webpackChunkName: "about" */ './about')
  }
});
