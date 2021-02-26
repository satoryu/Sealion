module.exports = async function (context, req) {
  const defaultTodos = [
    { id: 0, task: "タスクを入力する", completed: false },
    { id: 1, task: "Enterを押す", completed: false },
    { id: 2, task: "完了したタスクのチェックを付ける", completed: false },
    { id: 3, task: "息を吸う", completed: true },
  ];

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: defaultTodos
  };
};
