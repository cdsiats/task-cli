import fs from 'fs';
import { Task } from "./types.js";

const FILE_PATH = 'tasks.json';

export function addTask(task: string) {
    if (!task) {
        console.error('Task description is required.');
        return;
    }
    
    let tasks: Task[] = [];
    if (fs.existsSync(FILE_PATH)) {
        tasks = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
    }

    const newTask: Task = {
        id: tasks.length + 1,
        description: task,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }

    tasks.push(newTask);

    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf-8');

    console.info(`Task added: ${task}`);
}

export function updateTask() {

}

export function deleteTask() {

}

export function listTasks() {
    let tasks: Task[] = [];
    if (fs.existsSync(FILE_PATH)) {
        tasks = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
    }
    if (tasks.length === 0) {
        console.info('You have no tasks.');
        return;
    }
    tasks.forEach(task => {
        console.info(`${task.id} "${task.description}" - ${task.status}`);
    });
}

export function listCompletedTasks() {

}

export function listPendingTasks() {

}

export function completeTask() {

}