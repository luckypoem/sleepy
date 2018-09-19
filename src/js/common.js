import Highway from "@dogstudio/highway/build/es5/highway";

const H = new Highway.Core({
  renderers: {
    index: import('./index'),
    about: import('./about')
  }
});
