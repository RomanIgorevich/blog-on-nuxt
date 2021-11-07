<template>
  <commentTable
    :thead="['Имя', 'Текст', 'Статус', 'Изменить статус', 'Удалить']"
  >
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td>
          <span>{{ comment.name }}</span>
        </td>
        <td>
          <span>{{ comment.text }}</span>
        </td>
        <td>
          <span v-if="comment.publish" class="status true">Опубликованный</span>
          <span v-else class="status false">Не опубликованный</span>
        </td>
        <td>
          <span @click="changeComment(comment.id)" class="link">
            Повесить статус</span
          >
        </td>
        <td>
          <span @click="deleteComment(comment.id)" class="link"> Удалить </span>
        </td>
      </tr>
    </tbody>
  </commentTable>
</template>

<script>
import commentTable from "@/components/Admin/CommentTable.vue";
export default {
  components: {
    commentTable,
  },
  layout: "admin",
  data() {
    return {
      comments: [
        { id: 1, name: "Роман", text: "asdasd asd asd as d sa" },
        { id: 2, name: "Роман", text: "asdasd asd asd as d sa" },
      ],
    };
  },

  methods: {
    changeComment(id) {
      console.log(`изменить коментарии - ${id}`);
    },
    deleteComment(id) {
      console.log(`удалить коментарии - ${id}`);
    },
  },
};
</script>
