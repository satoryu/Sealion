import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    todos: [ ]
  },
  mutations: {
    push(state, newTodo) {
      state.todos.push(newTodo)
    },
    unshift(state, newTodo) {
      state.todos.unshift(newTodo)
    }
  },
  getters: {
    taskSize(state) {
      return state.todos.length
    },
    findTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
    addTodo(context, newTask) {
      // If the given new Todo is empty
      if (!newTask) {
        return
      }

      const newTodo = { task: newTask }
      const url = window.location.href + 'api/todos'

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(newTodo)
      }).then(async response => {
        const storedTodo = (await response.json())['todo']
        context.commit('unshift', storedTodo)
      }).catch(error => {
        console.error(error)
      })
    },
    async loadTodos(context) {
      const url = window.location.href + 'api/todos'
      const response = await fetch(url)
      const initialTodos = (await response.json())['todos'];

      initialTodos.forEach(todo => { context.commit('push', todo) })
    }
  }
})
