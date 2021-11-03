<template>
  <NewPostFrom @submit="onSubmit" />
</template>

<script>
import NewPostFrom from "@/components/Admin/NewPostFrom.vue";
export default {
  components: {
    NewPostFrom,
  },
  layout: "admin",
  methods: {
    onSubmit(post) {
      console.log(post);
    },
  },
};
</script>
