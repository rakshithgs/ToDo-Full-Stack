import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import HomeOutPut from './HomeOutPut'
import Home from './Home'
import { useEffect } from 'react'



const HomeMan = () => {
    const [tasks, setTasks] = useState([]);

    console.log("Current tasks in TaskManager:", tasks);
    console.log(" Type of tasks:", typeof tasks);
    console.log(" Is array?", Array.isArray(tasks));

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/tasks");
            

            const tasksData = Array.isArray(response.data)
                ? response.data
                : JSON.parse(response.data);

            setTasks(tasksData);
        } catch (error) {
            console.error("error fetching tasks:", error.message);
            setTasks([]);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const onAddTask = (task) => {
        console.log("ADD TASK RECEIVED:", task);
        if (!task || !task.text || !task.text.trim()) return;
        setTasks((prev) => [...prev, task]);
    };

    const handletoggle = async (id) => {
        try {
            const response = await axios.patch(
                `http://localhost:5000/tasks/${id}/toggle`
            );
            setTasks((prev) =>
                prev.map((task) => (task._id === id ? response.data : task))
            );
        } catch (error) {
            console.error("error toggling task:", error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${id}`);
            setTasks((prev) => prev.filter((task) => task._id !== id));
        } catch (error) {
            console.error("error deleting task:", error.message);
        }
    };

    return (
        <div>
            <Home addTask={onAddTask} />
            <HomeOutPut
                tasks={tasks}
                ontoggle={handletoggle}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default HomeMan;
