<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Отправить сообщение</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <label>Имя:</label>
        <input v-model="user.name" type="text" />
        <label>Email:</label>
        <input v-model="user.text" type="text" />
         <label>Text:</label>
        <textarea v-model="user.text"></textarea>
        <div class="controls">
          <button class="btnWhite">Отправить</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
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
