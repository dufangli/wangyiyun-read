<template>
  <div id="app">
    <van-tabbar v-model="active" active-color="#191919" inactive-color="#bebebe">
      <van-tabbar-item icon="icon iconfont icon-shuji" to="/bookshelf">书架</van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-shu2" to="/">书城</van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-yingyong" to="/class">分类</van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-wode" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
const ACTIVEINDEX = {
  bookshelf: 0,
  bookMall: 1,
  class: 2,
  mine: 3,
};
export default {
  data() {
    return {};
  },
  computed: {
    active: {
      get() {
        const { name } = this.$route;
        const index = ACTIVEINDEX[name] || 0;
        return index;
      },
      set() {},
    },
  },
};
</script>
<style lang="scss">
#app {
 .van-tabbar-item{
  margin-bottom: 10px;
  font-size: 14px;
  .iconfont{
    font-size: 24px;
  }
 }
}
</style>
