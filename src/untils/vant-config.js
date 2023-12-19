import { Tab, Tabs, Tabbar, TabbarItem, Search, Swipe, SwipeItem,Lazyload } from 'vant';

export default {
    install(Vue) {
        Vue.use(Tab);
        Vue.use(Tabs);
        Vue.use(Tabbar);
        Vue.use(TabbarItem);
        Vue.use(Search);
        Vue.use(Swipe);
        Vue.use(SwipeItem);
        Vue.use(Lazyload);
    }
}