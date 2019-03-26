import dayjs from "dayjs";
import { i18n } from '../sleepy.config';
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

export function relative(time) {
    return dayjs(time).fromNow();
}

export function format(time) {
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss');
}

export function searchParams(name) {
    const url = new URL(window.location.href);
    return Promise.resolve(url.searchParams.get(name));
}

export function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

export function t(key) {
    return i18n.language[i18n.default][key] || `Unmatched[${key}]`;
}