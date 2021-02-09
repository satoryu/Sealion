import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    todos: [
      { id: 0, task: 'タスクを入力する', completed: false },
      { id: 1, task: 'Enterを押す', completed: false },
      { id: 2, task: '完了したタスクのチェックを付ける', completed: false },
      { id: 3, task: '息を吸う', completed: true }
    ]
  }
})