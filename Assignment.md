### **Assignment 1: Create a Simple "To-Do List" Smart Contract**
**Objective:** Write a simple smart contract to manage a basic to-do list on the Ethereum blockchain.

**Instructions:**
1. Write a Solidity contract that implements a basic to-do list with the following functionality:
   - Users should be able to add tasks to the list (each task should have a title and description).
   - Users should be able to fetch a list of all tasks.
   - Each task should have an `isCompleted` status (boolean) that tracks whether the task is completed or not.
2. Each task should be stored as a struct with the following fields:
   - `taskId` (uint): A unique identifier for each task.
   - `title` (string): The task title.
   - `description` (string): The task description.
   - `isCompleted` (bool): Whether the task is completed or not.

**Deliverables:**
- Submit the Solidity code of the smart contract.
- Provide a brief explanation of how the contract works.

**Example Requirements:**
- **addTask(string memory _title, string memory _description)**: A function to add a new task.
- **getTask(uint _taskId)**: A function to fetch the details of a specific task.
- **completeTask(uint _taskId)**: A function to mark a task as completed.

---

### **Assignment 2: Extend the "To-Do List" Smart Contract**
**Objective:** Enhance your to-do list contract by adding additional functionality.

**Instructions:**
1. Extend the "To-Do List" contract from Assignment 1 with the following functionality:
   - Add a function to delete a task by its ID.
   - Implement a function to return the total number of tasks in the list.
   - Add an event `TaskCreated` that emits when a task is added (include details like task ID, title, and description).
   - Add an event `TaskCompleted` that emits when a task is marked as completed.

**Deliverables:**
- Submit the updated Solidity code for the contract.
- Provide a short explanation of how you implemented the new features.
  
**Example Requirements:**
- **deleteTask(uint _taskId)**: A function to delete a task by its ID.
- **getTotalTasks()**: A function to get the total number of tasks in the list.
- **TaskCreated**: An event emitted when a new task is created.
- **TaskCompleted**: An event emitted when a task is completed.

---

### **Assignment 3: Implement Access Control for Task Management**
**Objective:** Add basic access control to the to-do list contract to ensure that only the contract owner can delete tasks or mark tasks as completed.

**Instructions:**
1. Add an `owner` state variable to the contract and ensure that only the owner can perform sensitive actions like:
   - Marking a task as completed.
   - Deleting a task.
2. Implement a modifier called `onlyOwner` to enforce the owner-only restrictions.
3. Add a constructor to set the owner when the contract is deployed.

**Deliverables:**
- Submit the updated Solidity code with access control features.
- Provide a short explanation of how the access control works and why it's important.

**Example Requirements:**
- **onlyOwner**: A modifier to restrict certain functions to only the contract owner.
- **constructor()**: A constructor that sets the owner of the contract.
- **task management functions (completeTask and deleteTask)**: Restricted to the owner.

---

### **How to Execute These Tasks in Remix**
1. Open [Remix IDE](https://remix.ethereum.org/).
2. Create a new Solidity file (e.g., `TodoList.sol`).
3. Paste the code you wrote for the tasks.
4. Compile the contract using the Solidity compiler in Remix.
5. Deploy the contract to the JavaScript VM (or any other available environment like Injected Web3 or Web3 Provider).
6. Test the functions by calling them in the Remix console.

---

These assignments are designed to be executed entirely in Remix, without the need for external tools or frameworks. Participants will get hands-on experience in writing, deploying, and testing smart contracts directly in the Remix IDE.
