// Elements
const btnCreateFirstTask = document.querySelector("#btn-create");
const btnCloseMenu = document.querySelector(".close-menu i");
const btnCreateTask = document.querySelector("#btn-create-task");

const menuCreateTask = document.querySelector(".menu-create-task");
const inputNameTask = document.querySelector("#name-task");
const categoryTask = document.querySelector("#category");
const priorityTask = document.querySelector("#priority");

const containerNoTasks = document.querySelector(".no-tasks");
const containerTasks = document.querySelector(".tasks-container");

// Functions
const showOrHiddenMenuCreateTask = () => {
  menuCreateTask.classList.toggle("hidden");
};

const createTask = () => {
  showOrHiddenMenuCreateTask();
  containerNoTasks.classList.toggle("hidden");
  const taskName = inputNameTask.value;
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
  console.log(priority);
  containerTasks.innerHTML += `
  <div class="task-added">
  <table>
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
      <td>${category}</td>
      <td>${priority}</td>
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
    </tr>
  </table>
  <div class="create-task">
    <button>Criar tarefa</button>
  </div>
</div>`;
};

// Events
btnCreateFirstTask.addEventListener("click", showOrHiddenMenuCreateTask);
btnCloseMenu.addEventListener("click", showOrHiddenMenuCreateTask);
btnCreateTask.addEventListener("click", createTask);
