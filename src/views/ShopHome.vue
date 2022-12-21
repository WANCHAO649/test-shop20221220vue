<template>
  <div>
    <van-nav-bar title="首页">
      <!-- <van-icon name="search" v-slot="left"/>
      <van-icon name="cart-o" v-slot="right"/> -->
       <template #left>
        <van-icon name="search" size="18" />
      </template>
       <template #right>
        <van-icon name="cart-o" size="18" />
      </template>
    </van-nav-bar>
    <!-- 轮播 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item class="carousel-item" v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门 -->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :modules="modules" :pagination="{ clickable: true }" :slides-per-view="3">
        <swiper-slide v-for="(item, index) in hotProducts" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.img">
            <div>{{ item.name }}</div>
            <div>${{ item.price }}</div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide> -->
      </swiper>
    </div>
  </div>
</template>

<script>
// import { Pagination } from 'Swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
// more module style...

export default {
  data() {
    return {
      images: [
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fapk.diqiu00.com%2Fd%2Ffile%2Fbzlb%2F2019-07-18%2Fc174110dbc387ea7d6ec306180bde92b.jpg&refer=http%3A%2F%2Fapk.diqiu00.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674203548&t=8c47ec6d62b80df3b8925f55d0953a24'
      ],
      hotProducts: [
        {
          name: 'aaaa钱钱钱钱钱吱吱吱吱吱吱吱吱呃呃呃呃呃呃呃呃',
          img: 'https://img2.baidu.com/it/u=3745853261,2252591545&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
          price: '3260',
          company: '二二人柔柔弱弱日日日',
          city: '黄石市'
        },
        {
          name: 'bbbbb钱钱钱钱钱吱吱吱吱吱吱吱吱呃呃呃呃呃呃呃呃',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F17%2F41%2Ff7%2F1741f7254490601ece461a7788bbfb79.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674210435&t=5bc13704cd982f3f7eae238843e9d521',
          price: '3250',
          company: '二二人柔柔弱弱日日日',
          city: '大冶市'
        },
        {
          name: 'ccccc钱钱钱钱钱吱吱吱吱吱吱吱吱呃呃呃呃呃呃呃呃',
          img: 'https://img2.baidu.com/it/u=1259044139,110098611&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422',
          price: '3240',
          company: '二二人柔柔弱弱日日日',
          city: '惠州市'
        },
        {
          name: 'dddddd钱钱钱钱钱吱吱吱吱吱吱吱吱呃呃呃呃呃呃呃呃',
          img: 'https://img2.baidu.com/it/u=1232339393,638892048&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=888',
          price: '3230',
          company: '二二人柔柔弱弱日日日',
          city: '深圳市'
        },
        {
          name: 'eeeeee钱钱钱钱钱吱吱吱吱吱吱吱吱呃呃呃呃呃呃呃呃',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fefca347dcd6563696edf3680af7e6f9291d49e8b5d3f-zXvXny_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674210435&t=224860a4ecdb25c66c14af5ff307543f',
          price: '3220',
          company: '二二人柔柔弱弱日日日',
          city: '武汉市'
        },
        {
          name: 'ffffff钱钱钱钱钱吱吱吱吱吱吱吱吱呃呃呃呃呃呃呃呃',
          img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F14%2F20161014165303_rLAuK.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674210435&t=5c52e8e2b1447cbb7358cc4c624fc0fc',
          price: '3210',
          company: '二二人柔柔弱弱日日日',
          city: '长治市'
        }
      ],
      swiperOption: {
        slidesPerView: 3
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
.carousel {
  height: 200px;
  &-item {
    img {
      width: 100%;
      height: 200px;
    }
  }
}
.hot {
  &-title {
    width: 100%;
    height: 100px;
    line-height: 100px;
  }
  &-swiper {
    &-content {
      text-align: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>