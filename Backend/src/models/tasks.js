let tasks = [];

const createTask = (task) => {
  const taskToCreate = { ...task, id: new Date().getTime() };
  tasks = tasks.concat(taskToCreate);
  return taskToCreate;
};

const deleteTask = (id) => {
  let deletedTask = null;
  tasks = tasks.filter((task) => {
    if (task.id == id) {
      deletedTask = task;
      return false; // elimina esta tarea de la lista
    }
    return true;
  });
  return deletedTask;
};

const fetchTask = (id) => {
  return tasks.find(task => task.id == id);
};

const fetchTasks = () => {
  return tasks;
};

const updateTask = (id, values) => {
  // Encontrar la tarea
  let updatedTask = null;
  tasks = tasks.map((task) => {
    if (task.id == id) {
      let newTask = {}
      // Actualizar los datos con lo que venga en values 
      for (key in task) {
          if(values.hasOwnProperty(key) && key !== 'id') {
              newTask[key] = values[key];
          } else {
              newTask[key] = task[key]
          }
      }
      // Retornar la tarea actualizada
      updatedTask = newTask;
      // Guardar la tarea con los datos actualizados
      return newTask;
    }
    return task;
  })
  return updatedTask;
};

module.exports = {
  create: createTask,
  fetch: fetchTask,
  fetchAll: fetchTasks,
  update: updateTask,
  delete: deleteTask
}
