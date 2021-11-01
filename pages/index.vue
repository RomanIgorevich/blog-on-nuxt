<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <intro title="опять я вызвал интро" />
  </div>
</template>

<script>
import Promo from "../components/Promo.vue";
import Intro from "../components/UI/Intro.vue";
export default {
  components: {
    Promo,
    Intro,
  },
};
</script>
