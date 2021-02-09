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
      // If given task is empty, nothing to do
      if (!this.inputedTodo) {
        return
      }

      let newId = Math.max(...(this.todos.map(t => t.id)));

      this.todos.push({id: newId, task: this.inputedTodo});
      this.inputedTodo = '';
    }
  }
}
</script>