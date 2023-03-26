<template>
  <ParentLayout>
    <template #sidebar-top> </template>
    <template #sidebar-bottom> </template>
    <template #page-top> </template>
    <template #page-bottom>
      <Comment></Comment>
      <div class="copyright">
        Copyright © 2020 - 2023 ❤️ <a href="https://www.drunkdream.com/" target="_blank">drunkdream</a>
      </div>
      <div class="busuanzi">
        <span id="busuanzi_container_site_pv" style="display:none">
          本站总访问量
          <span id="busuanzi_value_site_pv"></span> 次
          <span class="post-meta-divider">|</span>
        </span>
        <span id="busuanzi_container_site_uv" style="display:none">
          本站访客数
          <span id="busuanzi_value_site_uv"></span> 人
        </span>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import Comment from './Comment.vue'

let busuanzi;

export default {
  name: "Layout",
  components: {
    ParentLayout,
    Comment
  },
  mounted() {
    busuanzi = require("busuanzi.pure.js");
  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        busuanzi.fetch();
      }
    }
  }
};
</script>

<style scoped>
.copyright {
  line-height: 26px;
  font-size: 14px;
  color: 666666;
  text-align: center;
}

.busuanzi {
  font-size: 13px;
  color: #999999;
  text-align: center;
}

#busuanzi_value_site_pv {
  color: #232323;
}

#busuanzi_value_site_uv {
  color: #232323;
}
</style>

<style>
code {
  white-space : pre-wrap !important;
}

.code-copy {
  line-height: 0px;
}

.code-copy>svg {
  width: 14px;
  height: 14px;
  top: 10px !important;
  right: 40px;
}

.code-copy>span {
  right: 60px;
}
</style>
