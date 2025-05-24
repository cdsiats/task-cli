import fs from 'fs';
import { Task } from "./types.js";

const FILE_PATH = 'tasks.json';

export function addTask(task: string) {
    if (!task) {
        console.error('Task description is required.');
        return;
    }
    
    let tasks: Task[] = [];
    if (!fs.existsSync(FILE_PATH)) {
        console.error('No tasks found. Creating a new task file.');
    }

    tasks = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
    const highestId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;

    const newTask: Task = {
        id: highestId + 1,
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

export function deleteTask(id: number) {
    if (!id) {
        console.error('Task ID is required.');
        return;
    }
    if (typeof id !== 'number' || id <= 0) {
        console.error('Invalid task ID.');
        return;
    }
    let tasks: Task[] = [];

    if (!fs.existsSync(FILE_PATH)) {
        console.error('No tasks found.');
        return;
    }

    tasks = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));

    const taskToDelete = tasks.find(task => task.id === id);
    if (!taskToDelete) {
        console.error(`Task with ID ${id} not found.`);
        return;
    }
    tasks = tasks.filter(task => task.id !== id);
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf-8');
    console.info(`Task with ID ${id} deleted.`);
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
    let tasks: Task[] = [];
    if (fs.existsSync(FILE_PATH)) {
        tasks = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
    }
    if (tasks.length === 0) {
        console.info('You have no tasks.');
        return;
    }
    tasks.filter(task => task.status === 'done')
        .forEach(task => {
            console.info(`${task.id} "${task.description}" - ${task.status}`);
        })
}

export function listPendingTasks() {
    let tasks: Task[] = [];
    if (fs.existsSync(FILE_PATH)) {
        tasks = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
    }
    if (tasks.length === 0) {
        console.info('You have no tasks.');
        return;
    }
    
    tasks.filter(task => task.status === 'pending')
        .forEach(task => {
            console.info(`${task.id} "${task.description}" - ${task.status}`);
        });
}

export function completeTask() {

}