<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Отправить сообщение</h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="user.name">Имя:</AppInput>
        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <AppTextAria v-model="user.text">Text:</AppTextAria>
        <div class="controls">
          <AppButton class="btnWhite"> Submit </AppButton>
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
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = "Отправлено!";
      this.user.name = "";
      this.user.email = "";
      this.user.text = "";
    },
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background: #4f68f4;
  color: #fff;
  .title {
    color: #fff;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
