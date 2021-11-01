<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <post-preview v-for="post in posts" :key="post.id" :post="post">
        </post-preview>
      </div>
    </div>
  </section>
</template>

<script>
import PostPreview from "./PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
  props: {
    posts: {
      type: Array,
      requried: true,
    },
  },
};
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
