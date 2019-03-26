import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';
import { images } from '../sleepy.config';

const isServer = !process.browser;
useStaticRendering(isServer);

class Store {
  @observable banner = images.banner || '/static/banner.png';
  @observable avatar = images.avatar || '/static/avatar.png';
  @observable blurBanner = images.banner || '/static/banner.png';

  constructor(isServer, initialData = {}) {
    if (initialData.banner) {
      this.banner = initialData.banner;
    }

    if (initialData.avatar) {
      this.avatar = initialData.avatar;
    }
  }

  @action changeBanner = banner => {
    this.banner = banner;
  };

  @action changeAvatar = avatar => {
    this.avatar = avatar;
  };
}

let store = null;

export function initializeStore(initialData) {
  if (isServer) {
    return new Store(isServer, initialData);
  }
  if (store === null) {
    store = new Store(isServer, initialData);
  }
  return store;
}
