<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="post">
      <div class="container">
        <div class="post-header">
          <img :src="post.img" :alt="post.title" />
        </div>
        <h1 class="title">{{ post.title }}</h1>
        <p>{{ post.descr }}</p>
        <div class="post-body">
          <p>{{ post.content }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: 1,
        title: "1 пост",
        descr: "Описание первого поста",
        content: "Контент постов",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpgflEenkGo0V61m04Ky-njYSMcg0LYAzfAcmfHWCBeplyuJ6PRhQSp1rpwEVEyNgatA&usqp=CAU",
      },
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
