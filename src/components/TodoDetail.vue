<template>
  <div>{{ todo.task }}</div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      todo: null
    }
  },
  created() {
    this.todo = this.$store.getters.findTodoById(this.id)
  }
}
</script>