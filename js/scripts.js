// Elements
const btnCreateFirstTask = document.querySelector("#btn-create");
const btnCloseMenu = document.querySelector(".close-menu i");
const menuCreateTask = document.querySelector(".menu-create-task");

// Functions
const showOrHiddenMenuCreateTask = () => {
  menuCreateTask.classList.toggle("hidden");
};

// Events
btnCreateFirstTask.addEventListener("click", showOrHiddenMenuCreateTask);
btnCloseMenu.addEventListener("click", showOrHiddenMenuCreateTask);
