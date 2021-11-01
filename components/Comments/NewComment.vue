<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">Новыи коментарии</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <label>Имя:</label>
        <input v-model="comment.name" type="text" />
        <label>Text:</label>
        <textarea v-model="comment.text"></textarea>
        <div class="controls">
          <button class="btn btnPrimary">Отправить</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.comment);
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
