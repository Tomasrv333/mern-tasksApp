const db = require('./db')

const createTask = async (task) => {
  const createdTask = await db.tasks.create(task)
  return createdTask
};

const deleteTask = async (id) => {
  const deletedTask = await db.tasks.delete(id)
  //cosas...
  return deletedTask
};

const fetchTask = async (id) => {
  const task = await db.tasks.get(id)
  return task
};

const fetchTasks = async () => {
  const tasks = await db.selectAllTasks()
  return tasks
};

const updateTask = async (id, values) => {
  const updatedTask = await db.tasks.update(id, values);
  return updatedTask
};

module.exports = {
  create: createTask,
  fetch: fetchTask,
  fetchAll: fetchTasks,
  update: updateTask,
  delete: deleteTask
}