<template>
  <div class="wrapper-content wrapper-content--fixed">
    <intro title="Мои посты: " />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import Intro from  "@/components/UI/Intro.vue";
import PostList from "@/components/Blog/PostList.vue";
export default {
  components: {
    Intro,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "1 пост",
          descr: "Описание первого поста",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpgflEenkGo0V61m04Ky-njYSMcg0LYAzfAcmfHWCBeplyuJ6PRhQSp1rpwEVEyNgatA&usqp=CAU",
        },
        {
          id: 2,
          title: "2 пост",
          descr: "Описание первого поста",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpgflEenkGo0V61m04Ky-njYSMcg0LYAzfAcmfHWCBeplyuJ6PRhQSp1rpwEVEyNgatA&usqp=CAU",
        },
        {
          id: 3,
          title: "3 пост",
          descr: "Описание первого поста",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpgflEenkGo0V61m04Ky-njYSMcg0LYAzfAcmfHWCBeplyuJ6PRhQSp1rpwEVEyNgatA&usqp=CAU",
        },
      ],
    };
  },
};
</script>
