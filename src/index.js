document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description").value;
    const newTask = document.createElement("li");
    newTask.textContent = newTaskDescription;
    taskList.appendChild(newTask);
    taskForm.reset();
  });
}); 