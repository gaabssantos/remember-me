// Elements
const btnCreateFirstTask = document.querySelector("#btn-create");
const btnCloseMenu = document.querySelector(".close-menu i");
const btnCreateTask = document.querySelector(".btn-create-first-task");
const btnCreateOtherTasks = document.querySelector(".create-task");

const menuCreateFirstTask = document.querySelector(".first-task");
const menuCreateOtherTasks = document.querySelector(".other-tasks");
const inputNameTask = document.querySelector("#name-task");
const categoryTask = document.querySelector("#category");
const priorityTask = document.querySelector("#priority");
const tableTask = document.querySelector(".task-table");
const taskAdded = document.querySelector(".task-added");

const containerNoTasks = document.querySelector(".no-tasks");
const containerTasks = document.querySelector(".tasks-container");

// Functions
const showOrHiddenMenuCreateTask = (first) => {
  if (first) {
    menuCreateFirstTask.classList.toggle("hidden");
  } else {
    menuCreateOtherTasks.classList.toggle("hidden");
  }
};

const createTask = () => {
  const taskName = inputNameTask.value;
  if (!taskName) return;

  showOrHiddenMenuCreateTask(true);

  const category =
    categoryTask.value === "work"
      ? "Trabalho"
      : categoryTask.value === "study"
      ? "Estudos"
      : categoryTask.value === "family"
      ? "Família"
      : "Outro";

  const priority =
    priorityTask.value === "high"
      ? "Alta"
      : priorityTask.value === "medium"
      ? "Média"
      : "Baixa";

    containerNoTasks.classList.toggle("hidden");
    taskAdded.classList.toggle("hidden");
    tableTask.innerHTML += `
    <tr>
      <th class="status">
        <i class="fa-regular fa-circle-check"></i>Status
      </th>
      <th class="task-name"><i class="fa-solid fa-font"></i> Nome</th>
      <th class="create-at">
        <i class="fa-solid fa-calendar-days"></i> Criado em
      </th>
      <th><i class="fa-solid fa-list"></i> Categoria</th>
      <th><i class="fa-solid fa-exclamation"></i> Prioridade</th>
      <th class="actions">
        <i class="fa-solid fa-triangle-exclamation"></i>Ações
      </th>
    </tr>
    <tr>
      <td class="status">
        <div class="status-text no-start">
          <div class="status-circle circle-no-start"></div>
          Não começou
        </div>
      </td>
      <td class="task-name">${taskName}</td>
      <td class="create-at">...</td>
      <td class="task-category">
        <div class="category-name ${categoryTask.value}">
          ${category}
        </div>
      </td>
      <td class="task-priority">
        <div class="priority-name ${priorityTask.value}">
          ${priority}
       </div>
      </td>
      <td class="actions">
        <button class="btn-actions" id="btn-delete">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button class="btn-actions" id="btn-done">
          <i class="fa-solid fa-check"></i>
        </button>
        <button class="btn-actions" id="btn-progress">
          <i class="fa-solid fa-spinner"></i>
        </button>
      </td>
    </tr>
    <tr>
      <td class="total" colspan="6">
        Total: <span id="total-tasks">1</span>
      </td>
    </tr>`;
};

// Events
btnCreateFirstTask.addEventListener("click", () =>
  showOrHiddenMenuCreateTask(true)
);

btnCreateOtherTasks.addEventListener("click", () => {
  showOrHiddenMenuCreateTask(false);
});

btnCloseMenu.addEventListener("click", showOrHiddenMenuCreateTask);
btnCreateTask.addEventListener("click", () => createTask(true));