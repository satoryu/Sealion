<template>
  <li class="todo-item" :class="{ completed: completed }">
    <input type="checkbox" v-model="completed">
    {{ todo.task }}
  </li>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      completed: false
    }
  },
  created() {
    if (this.todo.completed !== undefined) {
      this.completed = this.todo.completed;
    }
  }
}
</script>

<style scoped>
li.todo-item {
  list-style-type: none;
}

li.completed {
  text-decoration-line: line-through;
}
</style>