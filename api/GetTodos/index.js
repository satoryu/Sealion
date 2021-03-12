module.exports = async function (context, req) {
  const todos = context.bindings.todos || []

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { todos }
  };
};
