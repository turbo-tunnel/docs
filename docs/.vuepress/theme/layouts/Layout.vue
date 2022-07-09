<template>
  <ParentLayout>
    <template #sidebar-top> </template>
    <template #sidebar-bottom> </template>
    <template #page-top> </template>
    <template #page-bottom>
      <Comment></Comment>
      <div class="copyright">
        Copyright © 2020 - 2022 ❤️ <a href="https://www.drunkdream.com/" target="_blank">drunkdream</a>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import Comment from './Comment.vue'

export default {
  name: "Layout",
  components: {
    ParentLayout,
    Comment
  },
};
</script>

<style scoped>
.copyright {
  font-size: 14px;
  text-align: center;
}
</style>