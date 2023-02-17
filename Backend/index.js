require('dotenv').config();
const chalk = require('chalk');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const controllers = require('./src/controllers')

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

app.post('/tasks', controllers.tasks.createTask);
app.get('/tasks', controllers.tasks.getTasks);
app.get('/tasks/:id', controllers.tasks.getTask);
app.patch('/tasks/:id', controllers.tasks.updateTask);
app.delete('/tasks/:id', controllers.tasks.deleteTask);

app.listen(PORT, () => {
    console.log(
        `${chalk.green('✓')} ${chalk.blue(
            `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
        )}`
    )
})