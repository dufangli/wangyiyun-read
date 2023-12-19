<template>
  <div class="bookMall">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <div class="nav">
      <ul>
        <li
          v-for="(item, index) in nav"
          :key="index"
          :class="{ activeCss: activeVar == index }"
          @click="activeFun(item, index), gotoSwiper(item)"
        >
          {{ item.name }}
        </li>
      </ul>
      <van-swipe :autoplay="3000" indicator-color="#fff">
        <van-swipe-item v-for="item in swipe" :key="item.id">
          <img :src="item.cover" />
        </van-swipe-item>
      </van-swipe>
      <div class="classification">
        <div v-for="item in classification" :key="item.msgId">
          <img :src="item.cover" />
          <div class="item">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="recommendBest">{{ recommendBest.name }}</div>
      <div class="recommendList">
        <div class="top">
          <img :src="recommend.cover" />
          <div class="up">
            <div class="up_1">{{ recommend.title }}</div>
            <div class="up_2">{{ recommend.author }}</div>
            <div class="up_3">{{ recommend.content }}</div>
          </div>
        </div>
        <div class="bottom">
          <div
            v-for="(item, index) in recommend_1"
            :key="index"
            class="bottom_1"
          >
            <img :src="item.cover" />
            <div class="down">
              <div class="down_1">{{ item.title }}</div>
              <div class="down_2">{{ item.author }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getNav, getSwipe } from "../apis/bookMall";
export default {
  data() {
    return {
      value: "",
      nav: [],
      activeVar: 0,
      url: "",
      swipe: "",
      classification: [],
      recommendBest: [],
      recommend: [],
      recommend_1: [],
    };
  },
  methods: {
    activeFun(item, index) {
      this.activeVar = index;
    },
    async gotoSwiper(item) {
      this.url = item.url;
      // console.log(this.url);
      let res = await getSwipe(this.url);
      // console.log(res.data.list[0]);
      this.swipe = res.data.list[0].banners;
      this.classification = res.data.list[1].shortCut;
      this.recommendBest = res.data.list[2];
      this.recommend = res.data.list[2].list[0];
      this.recommend_1 = res.data.list[2].list.slice(1);
      console.log(this.recommend);
      // console.log(this.classification);
      // console.log(this.swipe);
    },
  },
  async mounted() {
    let { data } = await getNav();
    // console.log(data.navi);
    this.nav = data.navi;
    this.gotoSwiper(this.nav[0]);
  },
};
</script>

<style lang="scss">
.bookMall {
  width: 100vw;
  .nav {
    ul {
      display: flex;
      justify-content: space-around;
      li {
        font-size: 18px;
        color: #bebebe;
      }
      .activeCss {
        font-size: 22px;
        font-family: "宋体";
        position: relative;
        font-weight: 700;
        color: #191919;
        &::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 14px;
          width: 18px;
          height: 3px;
          background: #ee3131;
          border-radius: 10px;
        }
      }
    }
    .van-swipe {
      img {
        width: 94vw;
        margin: 20px 14px;
        border-radius: 6px;
      }
      .van-swipe__indicators {
        left: 50px;
        bottom: 34px;
      }
    }
    .classification {
      display: flex;
      justify-content: space-around;
      img {
        width: 60px;
      }
      .item {
        text-align: center;
        font-family: "宋体";
      }
    }
  }
  .recommend {
    .recommendBest {
      font-size: 22px;
      font-weight: 600;
      margin-left: 15px;
      margin-top: 18px;
    }
    .recommendList {
      margin-top: 10px;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    padding: 0 15px;
    .bottom_1 {
      // margin-left: 20px;
      // margin-right: 20px;
      img {
        width: 80px;
        height: 116px;
      }
      .down {
        .down_1 {
          font-size: 16px;
          width: 70px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .down_2 {
          font-size: 12px;
          color: #9f9f9f;
        }
      }
    }
  }
  .top {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
      height: 140px;
      margin-left: 20px;
    }
    .up {
      margin-left: 20px;
      margin-right: 20px;
      .up_1 {
        font-size: 22px;
        font-weight: 600;
      }
      .up_2 {
        font-size: 16px;
        color: #929292;
        margin-top: 5px;
      }
      .up_3 {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: 26px;
        color: #929292;
        margin-top: 10px;
      }
    }
  }
}
</style>