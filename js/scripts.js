const btnShowMenuFirstTask = document.querySelector("#btn-create");
const btnCreateFirstTask = document.querySelector(".btn-create-first-task");

const firstTaskMenu = document.querySelector(".first-task");

const noTasksContainer = document.querySelector(".no-tasks");

const taskAdded = document.querySelector(".task-added");
const taskTable = document.querySelector(".task-table");

const input

const showOrHiddenCreateTask = (first) => {
  if (first) {
    firstTaskMenu.classList.toggle("hidden");
  }
};

const createTask = (first) => {
  if (first) {
    firstTaskMenu.classList.toggle("hidden");
    noTasksContainer.classList.toggle("hidden");
    taskAdded.classList.toggle("hidden");
    taskTable.innerHTML += `
    <tr>
    <th class="status">
      <i class="fa-regular fa-circle-check"></i>Status
    </th>
    <th class="task-name"><i class="fa-solid fa-font"></i> Nome</th>
    <th class="create-at">
      <i class="fa-solid fa-calendar-days"></i> Criado em
    </th>
    <th><i class="fa-solid fa-list"></i> Categoria</th>
    <th class="task-priority"><i class="fa-solid fa-exclamation"></i> Prioridade</th>
    <th class="actions">
      <i class="fa-solid fa-triangle-exclamation"></i>Ações
    </th>
  </tr>
  <tr>
    <td class="status">
      <div class="status-text no-start">
        <div class="status-circle circle-no-start"></div>
        Pronto
      </div>
    </td>
    <td class="task-name">${}</td>
    <td class="create-at">Teste</td>
    <td class="task-category">
      <div class="category-name others">
        Teste
      </div>
    </td>
    <td class="task-priority">
      <div class="priority-name low">
        Teste
      </div>
    </td>
    <td class="actions">
      <button title="Excluir" class="btn-actions" id="btn-delete">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button title="Feito" class="btn-actions" id="btn-done">
        <i class="fa-solid fa-check"></i>
      </button>
      <button title="Em progresso" class="btn-actions" id="btn-progress">
        <i class="fa-solid fa-spinner"></i>
      </button>
    </td>
  </tr>
  <tr>
    <td class="total" colspan="6">
      Total: <span id="total-tasks">1</span>
    </td>
  </tr>`
  }
};

btnShowMenuFirstTask.addEventListener("click", () =>
  showOrHiddenCreateTask(true)
);

btnCreateFirstTask.addEventListener("click", () => createTask(true));
