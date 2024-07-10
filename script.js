//Accéder au DOM
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("taskContainer");

      const li = document.createElement("li");
      li.textContent = taskText;
      li.classList.add("taskLi");

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.classList.add("taskCheckBox");
      checkBox.addEventListener("change", () => {
        li.classList.toggle("completed");
      });

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskContainer);
      });

      li.appendChild(checkBox);
      taskContainer.appendChild(li);
      taskContainer.appendChild(deleteButton);
      taskList.appendChild(taskContainer);
      taskInput.value = "";
    }
  });
});
