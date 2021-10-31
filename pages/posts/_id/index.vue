<template>
<div>
  <h1>post id is: {{ $route.params.id }}</h1>
  <nuxt-link to="/posts">Вернуться к постам</nuxt-link>
</div>
</template>

<script>
export default {
    validate({params}){
        // наш путь должен быть числом
        return /^\d+$/.test(params.id)
    }
}
</script>