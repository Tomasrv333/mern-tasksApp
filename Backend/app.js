console.log('Programa inicializado ✅');
require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

const controllers = require('./src/controllers');

const PORT = process.env.PORT || 8000;
console.log(process.env.SALUDO);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Tasks CRUD
app.post('/tasks', controllers.tasks.createTask);
app.get('/tasks', controllers.tasks.getTasks);
app.get('/tasks/:id', controllers.tasks.getTask);
app.patch('/tasks/:id', controllers.tasks.updateTask);
app.delete('/tasks/:id', controllers.tasks.deleteTask);


app.listen(PORT, () => {
  console.log(`Servidor inicializado en puerto ${PORT} 🚀`);
});
