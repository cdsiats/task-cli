import { addTask, listTasks } from "./commands.js";

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
    default:
        listTasks();
        break;
}