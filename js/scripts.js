// Elements
const btnCreateFirstTask = document.querySelector("#btn-create");
const menuCreateTask = document.querySelector(".menu-create-task");

// Functions
const showOrHiddenMenuCreateTask = () => {
  menuCreateTask.classList.toggle("hidden");
};

// Events
btnCreateFirstTask.addEventListener("click", showOrHiddenMenuCreateTask);
