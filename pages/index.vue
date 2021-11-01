<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <intro title="опять я вызвал интро" />
    <post-list :posts="posts" />
    <contacts />
  </div>
</template>

<script>
import Promo from "../components/Promo.vue";
import Intro from "../components/UI/Intro.vue";
import PostList from "../components/Blog/PostList.vue";
import Contacts from '../components/Contacts.vue'
export default {
  components: {
    Promo,
    Intro,
    PostList,
    Contacts
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
