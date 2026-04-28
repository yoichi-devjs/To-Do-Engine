/*

IMPLEMENTATION OF THE TO-DO ENGINE

This file contains the implementation of the To-Do Engine,
which is responsible for managing the to-do list,
including adding, removing, and updating tasks.
The engine also handles task prioritization and categorization.

Use only arrays, functions, loops, primitives, and objects.
Avoid classes, Maps, Sets, or higher-order array methods.

*/

// STEP 0: Define the structure of a task object

// STEP 1: Create an empty array to hold all task objects.
const tasks = [];

// STEP 2: Create a simple counter to generate unique task ids.
let taskIdCounter = 1;

// STEP 3: Create a function named createTask(title, category, priority)
function createTask(title, category, priority) {
    // generates a unique id using the counter
    const id = taskIdCounter++;
    // sets completed to false by default
    const completed = false;
    // sets createdAt to the current date and time
    const createdAt = new Date();
    // returns a plain object with fields: 
    // id, title, completed, priority, category, createdAt
    return {
        id,
        title,
        completed,
        priority,
        category,
        createdAt
    };
}
// - do not modify the tasks array inside this function

// STEP 4: Create a function named addTask(task)
function addTask(task) {
    // push the task object into the task array
    tasks.push(task);
}


// STEP 5: Create a function named findTaskIndexById(id)
function findTaskIndexById(id) {
    // loop through tasks and return the index of the task with the matching id
    for(let i = 0; i < tasks.length; i++) {
        // check if the current task's id matches the given id
        if(tasks[i].id === id) {
            // if a match is found, return the index
            return i;
        }
    }
}

// STEP 6: Create a function named removeTask(id)
function removeTask(id) {
    // use findTaskById to locate the task index
    const index = findTaskIndexById(id);
    // if found, remove it from the task array
    // use splice
    if(index !== undefined) {
        tasks.splice(index, 1);
        // return true when removed
        return true;
    }else {
        return false;
    }
}

// STEP 7: Create a function named updateTaskTitle(id, newTitle)
function updateTaskTitle(id, newTitle) {
    // find the task by id
    const index = findTaskIndexById(id);
    // if found, update its title field
    if(index !== undefined) {
        tasks[index].title = newTitle;
        // return true when updated
        return true;
    }else {
        return false;
    }
}
// STEP 8: Create a function named toggleTaskCompleted(id)
function toggleTaskCompleted(id) {
    // find the task by id
    const index = findTaskIndexById(id);
    // if found
    if(index !== undefined) {
        // flip its completed boolean value
        tasks[index].completed = !tasks[index].completed;
        // return true when toggled
        return true;
    }else {
        return false;
    }
}

// STEP 9: Create a function named getTasksByCategory(category)
function getTasksByCategory(category) {
    // return a new array containing only tasks whose category matches
   const categoryTasks = [];
   // loop through tasks and check if the category matches
   for(let i = 0; i < tasks.length; i++) {
        // if it matches, push the task into the categoryTasks array
        if(tasks[i].category === category) {
            categoryTasks.push(tasks[i]);
        }
    }
    return categoryTasks;
}

// STEP 10: Create a function named getTasksByPriority(priority)
function getTasksByPriority(priority) {
    // return a new array containing only tasks whose priority matches
    const priorityTasks = [];
    // loop throught tasks and check if the priority matches
    for(let i = 0; i < tasks.length; i++) {
        // if it matches, push the task into the priorityTasks array
        if(tasks[i].priority === priority) {
            priorityTasks.push(tasks[i]);
        }
    }
    return priorityTasks;
}

// STEP 11: Create a function named getIncompleteTasks()
function getIncompleteTasks() {
    // return a new array containing only tasks where completed is false
    const incompleteTasks = [];
    // loop through tasks and check if completed is false
    for(let i = 0; i < tasks.length; i++) {
        // if it is false, push the task into the incompleteTasks array
        if(tasks[i].completed === false) {
            incompleteTasks.push(tasks[i]);
        }
    }
    return incompleteTasks;
}   

// STEP 12: Create a function named sortTasksByPriority()
function sortTasksByPriority() {
    // sort the tasks array in-place by priority in descending order (higher priority first)
    for(let i = 0; i < tasks.length; i++) {
        for(let j = 0; j < tasks.length - 1; j++) {
            // compare the priority of the current task with the next task
            if(tasks[j].priority < tasks[j + 1].priority) {
                // if the current task has lower priority, swap them
                const temp = tasks[j];
                tasks[j] = tasks[j + 1];
                tasks[j + 1] = temp;
            }
        }
    }
}

// STEP 13: Optionally add a debug function named logTasks()
function logTasks() {
    // loop through tasks and print each task's fields to the console
    for(let i = 0; i < tasks.length; i++) {
        console.log(`ID: ${tasks[i].id}, Title: ${tasks[i].title}, Completed: ${tasks[i].completed}, Priority: ${tasks[i].priority}, Category: ${tasks[i].category}, Created At: ${tasks[i].createdAt}`);
    }   
}

const task1 = createTask("Learn JS", "study", 3);
const task2 = createTask("Build project", "work", 5);

addTask(task1);
addTask(task2);

logTasks();