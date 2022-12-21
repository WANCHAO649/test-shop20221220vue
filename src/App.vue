<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="orders-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o" to="/profile">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
// import { ref } from 'vue';

// export default {
//   setup() {
//     const active = ref(0);
//     return { active };
//   },
// };
export default {
  data() {
    return { active: 0 };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
