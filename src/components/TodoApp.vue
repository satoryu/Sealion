<template>

  <input v-model="inputedTodo" @keypress.enter="addTodo">

  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" >
    </TodoItem>
  </ul>

</template>

<script>
import { mapState } from 'vuex'
import TodoItem from './TodoItem.vue';

export default {
  components: { TodoItem },
  data() {
    return {
      inputedTodo: ''
    }
  },
  computed: mapState(['todos']),
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.inputedTodo)
      this.inputedTodo = ''
    }
  }
}
</script>