const database = require('../models');

const createTask = async (req, res) => {
  console.log('CREAR TAREAS');
  const task = req.body;
  const createdTask = await database.tasks.create(task.title)
  return res.status(200).json(createdTask);
};

const getTasks = async (req, res) => {
  console.log('Busca la lista de tareas');
  const taskList = await database.tasks.fetchAll()
  return res.status(200).json({ list: taskList, count: taskList.length });
};

const getTask = async (req, res) => {
  console.log(`Busca la tarea ${req.params.id}`);
  const task = await database.tasks.fetch(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.status(200).json(task);
};

const updateTask = async (req, res) => {
  console.log(`Actualiza la tarea ${req.params.id}`);
  console.log(req.body)
  const updatedTask = await database.tasks.update(req.params.id, req.body);
  if (!updatedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.status(200).json(updatedTask);
};

const deleteTask = async (req, res) => {
  console.log(`Borra la tarea ${req.params.id}`);
  const deletedTask = await database.tasks.delete(req.params.id);
  if (!deletedTask) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.status(200).json(deletedTask);
};

module.exports = {
  createTask,
  getTasks,
  getTask, 
  updateTask,
  deleteTask,
}