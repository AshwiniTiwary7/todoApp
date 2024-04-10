import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaCalendarCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";

export default function TodoAdd() {
    const [todoTask, setTodoTask] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    async function getAllTodos() {
        setLoading(true);
        try {
            const respAllTodos = await axios.get('http://localhost:4000/api/v1/allTask');
            if (respAllTodos.data) {
                setAllTodos(respAllTodos.data.allTasksks);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    async function todoSubmit(event) {
        event.preventDefault();
        try {
            const respTodo = await axios.post('http://localhost:4000/api/v1/addTask', { todoTask });
            if (respTodo.data) {
                toast.success(respTodo.data.message);
            }
            getAllTodos();
        } catch (error) {
            console.log(error);
        }
    }
    async function deleteTodo(taskId) {
        try {
            const respDeleted = await axios.delete(`http://localhost:4000/api/v1/deleteTask/${taskId}`);
            if (respDeleted.data) {
                toast.success(respDeleted.data.message);
            }
            getAllTodos();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllTodos();
    }, []);
    return (
        <div className="row justify-content-center p-5">
            <div className="input-group col-12">
                <span className="input-group-text bg-primary text-light fw-medium" id="addon-wrapping"><FaCalendarCheck /></span>
                <form onSubmit={todoSubmit} className="d-flex">
                    <input type="text" class="form-control" placeholder="Enter Todo" aria-label="Username" aria-describedby="addon-wrapping" value={todoTask} onChange={(e) => setTodoTask(e.target.value)} required />
                    { loading ? (<p>Loading</p>) : (<input type="submit" value="Add Todo" className="fs-6 bg-primary border-0 rounded-end text-light" />) }
                </form>
            </div>
            <div className="col-12 mt-4">
            {
                allTodos.map((singleTodo) => {
                    return (
                        <div key={singleTodo.key} className="d-flex justify-content-between align-items-center py-2 px-4 text-light w-50 rounded bg-success mb-2">{singleTodo.value}<FaTrash role="button" className="text-danger opacity-75" onClick={() => { deleteTodo(singleTodo.key) }} /></div>
                    )
                })
            }
            </div>
        </div>
    )
}
