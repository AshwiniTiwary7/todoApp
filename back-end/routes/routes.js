const express = require('express');
const route = express.Router();

//Controllers
const addTask = require('../controller/addTask');
const getTasks = require('../controller/getTasks');
const deletedTodo = require('../controller/deleteTasks');

//Routings
route.post('/addTask',addTask);
route.get('/allTask',getTasks);
route.delete('/deleteTask/:taskId', deletedTodo);

//Route Imported
module.exports = route;