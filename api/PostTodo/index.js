module.exports = async function (context, req) {
    const userName = 'anonymous'
    const invertTime = (Number.MAX_SAFE_INTEGER - Date.now()).toString()
    const task = req.body.task

    const newTodo = {
        userName,
        task,
        id: invertTime,
        completed: false
    }

    const newTodoEntity = {
        PartitionKey: newTodo.userName,
        RowKey: invertTime,
        id: newTodo.id,
        task: newTodo.task,
        completed: newTodo.completed
    };
    context.bindings.newTodo = newTodoEntity

    context.res = {
        body: { todo: newTodo }
    };
}