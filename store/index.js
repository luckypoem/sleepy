import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';
import { theme } from '../sleepy.config';

const isServer = !process.browser;
useStaticRendering(isServer);

class Store {
  @observable banner = theme.banner || '/static/banner.png';
  @observable avatar = theme.avatar || '/static/avatar.png';

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
