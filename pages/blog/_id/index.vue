<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <new-comment />
  </div>
</template>

<script>
import Post from "@/components/Blog/Post.vue";
import Comments from "@/components/Comments/Comments.vue";
import NewComment from "@/components/Comments/NewComment.vue";
export default {
  components: {
    Post,
    Comments,
    NewComment,
  },
  data() {
    return {
      post: {
        id: 1,
        title: "1 пост",
        descr: "Описание первого поста",
        content: "Контент постов",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpgflEenkGo0V61m04Ky-njYSMcg0LYAzfAcmfHWCBeplyuJ6PRhQSp1rpwEVEyNgatA&usqp=CAU",
      },
      comments: [
        { name: "ivan", text: "коментарии" },
        { name: "Дима", text: "2 коментарии" },
      ],
    };
  },
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    max-width: 400px;
    margin-bottom: 16px;
  }
  p {
    color: #999;
  }
}
.post-body {
  text-align: left;
}
</style>
