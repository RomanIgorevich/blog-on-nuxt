<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">Новыи коментарии</h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name">Имя:</AppInput>
        <AppTextAria v-model="comment.text">Text:</AppTextAria>
        <div class="controls">
          <AppButton>Отправить</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = "Отправлено!";
      this.comment.name = "";
      this.comment.text = "";
    },
  },
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
