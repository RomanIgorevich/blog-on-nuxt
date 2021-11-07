<template>
  <NewPostFrom :postEdit="post" @submit="onSubmit" />
</template>

<script>
import NewPostFrom from "@/components/Admin/NewPostFrom.vue";
export default {
  components: {
    NewPostFrom,
  },
  layout: "admin",
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
  methods: {
    onSubmit(post) {
      console.log(post);
    },
  },
};
</script>
