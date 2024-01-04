const inputEl = document.querySelector("#input");
const deleteButton = document.querySelector("#delete");
const outputEl = document.getElementById("list-conatiner");
const form = document.querySelector("form");

// display the tasks

const showTask = () => {
  let tasks;
  tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks === null) {
    tasks = [];
  } else {
    console.log(tasks);
    let output;
    const allTasks = tasks.map((i) => {
      return `
        <li id="item">
            <span class="taskdata">${i.title}</span>
            <button id="delete" onclick="removeItem(${i.id})">X</button>
          </li>`;
    });
    output = allTasks.join("");
    outputEl.innerHTML = output;
  }
};
const removeItem = (id) => {
  console.log(id);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks !== null) {
    tasks = tasks.filter((task) => {
      return task.id !== id;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTask();
  }
};

// Add task & save into local storage
localStorage.setItem("firstName", "Sid");

const addTask = (e) => {
  e.preventDefault();

  const task = inputEl.value;
  if (task === "") {
    alert("please enter task...");
  }
  if (task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
      console.log(tasks);
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      console.log(tasks);
    }
    tasks.unshift({
      id: Date.now(),
      title: task,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  inputEl.value = null;
  showTask();
};
showTask();

// get item from local storage

// remove item


// Event listener

form.addEventListener("submit", addTask);
