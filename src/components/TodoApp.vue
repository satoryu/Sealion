<template>

  <input v-model="inputedTodo" @keypress.enter="addTodo">

  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" >
    </TodoItem>
  </ul>

</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: { TodoItem },
  data() {
    return {
      inputedTodo: '',
      todos: [
        { id: 0, task: 'タスクを入力する', completed: false },
        { id: 1, task: 'Enterを押す', completed: false },
        { id: 2, task: '完了したタスクのチェックを付ける', completed: false },
        { id: 3, task: '息を吸う', completed: true }
      ]
    }
  },
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