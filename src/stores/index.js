import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    todos: [ ]
  },
  mutations: {
    add(state, newTodo) {
      state.todos.push(newTodo)
    }
  },
  getters: {
    taskSize(state) {
      return state.todos.length
    }
  },
  actions: {
    addTodo(context, newTask) {
      // If the given new Todo is empty
      if (!newTask) {
        return
      }

      const newId = context.getters['taskSize']
      const newTodo = { id: newId, task: newTask }

      context.commit('add', newTodo)
    },
    loadTodos(context) {
      if (context.getters['taskSize'] > 0) {
        return
      }

      const initialTodos = [
        { id: 0, task: 'タスクを入力する', completed: false },
        { id: 1, task: 'Enterを押す', completed: false },
        { id: 2, task: '完了したタスクのチェックを付ける', completed: false },
        { id: 3, task: '息を吸う', completed: true }
      ]
      initialTodos.forEach(todo => { context.commit('add', todo) })
    }
  }
})