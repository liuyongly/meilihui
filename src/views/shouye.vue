<template>
  <div class="wrapper">
    <div class="search">
      <p>上海</p>
      <input type="text" name id placeholder="请输入商品名称" />
    </div>

    <div class="swiper">
      <van-swipe :autoplay="5000" :loop="false" indicator-color="#fff">
        <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>


  </div>
</template>

<script>
// import swiper from '../components/swiper'

import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
import { Search } from "vant";
import {instance} from "../utils/http";

Vue.use(Search);
export default {
  components: {},
  props: {},
  data() {
    return {
      bannerlist: [],
      SwiperImg: [
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg"
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    instance
      .post("/api/home/TemplateComponent/GetTemplateComponentInfo", {
        head: {
          version: "h5",
          cityCode: "1",
          cityId: "312d0556-0671-4f2e-8bac-7b8873b5a03a",
          districtId: "8f9e7d16-5eb2-4904-93f8-e17753b6e72f",
          token: "",
          loginToken: ""
        },
        body: {
          previewTime: "",
          operationType: 0
        }
      })
      .then(res => {
        console.log(res.data.Data.templateComponentList[0].carouselPictures);
        this.bannerlist =
          res.data.Data.templateComponentList[0].carouselPictures;
      });
  },
  mounted() {}
};
</script>






<style lang='scss' scoped>
.wrapper {
  overflow-x: hidden;
}
.search {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 1.24rem;
  background: linear-gradient(90deg, #39da85, #01b27a);
}
.search p {
  float: left;
  height: 1.24rem;
  width: 2.2rem;
  text-align: center;
  line-height: 1.24rem;
}
.search input {
  height: 0.9rem;
  margin: 0.15rem 0;
  width: 9.2rem;
  border: none;
  border-radius: 1rem;
  text-indent: 0.5rem;
}

.swiper {
  width: 100%;
  height: 3.4rem;
  .van-swipe {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

}
</style>