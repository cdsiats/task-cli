import { 
    addTask, 
    completeTask, 
    deleteTask, 
    listCompletedTasks, 
    listPendingTasks, 
    listTasks 
    } from "./commands.js";

/**
 * Command will look something like this:
 * npm start add "New Item"
 * 
 * process.argv will contain:
 * [
 *  '/path/to/node', [0]
 *  '/path/to/script', [1]
 *  'add', [2]
 *  'New Item', [3]
 * ]
 * 
 * .slice(2) means to skip the first two elements
 */
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case "add":
        addTask(args.slice(1).join(" "));
        break;
    case "list":
        listTasks();
        break;
    case "done":
        listCompletedTasks();
        break;
    case "pending":
        listPendingTasks();
        break;
    case "delete":
        const id = Number(args[1]);
        deleteTask(id);
        break;
    case "complete":
        const taskId = Number(args[1]);
        completeTask(taskId);
        break;
    case "update":
        const taskIdToUpdate = Number(args[1]);
        const newTaskDescription = args.slice(2).join(" ");
    default:
        listTasks();
        break;
}