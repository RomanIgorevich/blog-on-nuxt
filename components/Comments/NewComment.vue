<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">Новыи коментарии</h2>
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
import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextAria from "@/components/UI/Controls/TextAria.vue";
export default {
  data() {
    return {
      comment: {
        name: "",
        text: "",
      },
    };
  },
  components: {
    AppButton,
    AppInput,
    AppTextAria,
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
