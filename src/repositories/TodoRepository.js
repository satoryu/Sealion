class TodoRepository {
  constructor(url) {
    this.url = url
  }

  async getAll() {
    const response = await fetch(`${url}api/todos`).json()

    return response.todos
  }
}