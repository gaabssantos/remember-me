const btnShowMenuFirstTask = document.querySelector("#btn-create");
const btnShowMenuOtherTasks = document.querySelector(".btn-create-task");

const btnCreateFirstTask = document.querySelector(".btn-create-first-task");
const btnCreateOtherTasks = document.querySelector(".btn-create-other-tasks");

const btnCloseFirst = document.querySelector(".close-menu-first");
const btnCloseOther = document.querySelector(".close-menu-other");

const firstTaskMenu = document.querySelector(".first-task");
const createTaskMenu = document.querySelector(".other-tasks");

const noTasksContainer = document.querySelector(".no-tasks");

const taskAdded = document.querySelector(".task-added");
const taskTable = document.querySelector(".task-table");

const inputTaskName = document.querySelector("#task-name-first");
const categoryTask = document.querySelector("#category-first");
const priorityTask = document.querySelector("#priority-first");

const inputTaskNameOther = document.querySelector(".task-name-other");
const categoryTaskOther = document.querySelector(".category-other");
const priorityTaskOther = document.querySelector(".priority-other");

const generateId = () => {
  return Math.floor(Math.random() * 5000);
};

const showOrHiddenCreateTask = (first) => {
  inputTaskName.value = "";
  inputTaskNameOther.value = "";
  categoryTask.value = "work";
  priorityTask.value = "high";
  categoryTaskOther.value = "work";
  priorityTaskOther.value = "high";
  if (first) {
    firstTaskMenu.classList.toggle("hidden");
    inputTaskName.focus();
  } else {
    createTaskMenu.classList.toggle("hidden");
    inputTaskNameOther.focus();
  }
};

const changeTaskStatus = (status, taskId) => {
  const task = document.getElementById(`task-${taskId}`);

  const taskStatusText = document.querySelector(`#task-${taskId} .status`);

  if (status === "delete") {
    if (document.querySelectorAll("tr").length > 2) {
      task.remove();
    } else {
      task.remove();
      taskAdded.classList.toggle("hidden");
      noTasksContainer.classList.toggle("hidden");
      document.querySelector(".task-header").remove();
    }

    const taskFilter = getTasksLocalStorage().filter(
      (task) => task.idTask != taskId
    );
    localStorage.removeItem("tasks");
    taskFilter.forEach((task) => saveTaskLocalStorage({ ...task }));
  } else if (status === "done") {
    taskStatusText.innerHTML = `<div class="status-text done">
    <div class="status-circle circle-done"></div>
    Finalizado
  </div>`;
    const taskFilter = getTasksLocalStorage().filter(
      (task) => task.idTask == taskId
    )[0];
    console.log(taskFilter);
  } else {
    taskStatusText.innerHTML = `<div class="status-text in-progress">
    <div class="status-circle circle-in-progress"></div>
    Em progresso
  </div>`;
  }
};

const getTasksLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
};

const saveTaskLocalStorage = (task) => {
  const tasks = getTasksLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const createElement = (
  idTask,
  taskNameValue,
  dateNumber,
  categoryTask,
  category,
  priorityTask,
  priority,
  statusTask,
  status
) => {
  taskTable.innerHTML += `
  <tr id="task-${idTask}">
    <td class="status">
      <div class="status-text ${statusTask}">
        <div class="status-circle circle-no-start"></div>
        ${status}
      </div>
    </td>
    <td class="task-name">${taskNameValue}</td>
    <td class="create-at">${dateNumber}</td>
    <td class="task-category">
      <div class="category-name ${categoryTask.value}" id="category-${idTask}">
        ${category}
      </div>
    </td>
    <td class="task-priority">
      <div class="priority-name ${priorityTask.value}">
        ${priority}
      </div>
    </td>
    <td class="actions">
      <button title="Excluir" class="btn-actions btn-delete" id="btn-delete-${idTask}">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button title="Feito" class="btn-actions btn-done" id="btn-done-${idTask}">
        <i class="fa-solid fa-check"></i>
      </button>
      <button title="Em progresso" class="btn-actions btn-progress" id="btn-progress-${idTask}">
        <i class="fa-solid fa-spinner"></i>
      </button>
    </td>
  </tr>`;
};

const initTasks = () => {
  if (getTasksLocalStorage().length > 0) {
    taskAdded.classList.toggle("hidden");
    noTasksContainer.classList.toggle("hidden");
    taskTable.innerHTML += `<tr class="task-header">
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
  </tr>`;
    getTasksLocalStorage().forEach((task) => {
      taskTable.innerHTML += `
    <tr id="task-${task.idTask}">
      <td class="status">
        <div class="status-text ${task.statusTask}">
          <div class="status-circle circle-no-start"></div>
          ${task.status}
        </div>
      </td>
      <td class="task-name">${task.taskNameValue}</td>
      <td class="create-at">${task.dateNumber}</td>
      <td class="task-category">
        <div class="category-name ${
          task.categoryTaskValue
            ? task.categoryTaskValue
            : task.categoryTaskOtherValue
        }" id="category-${task.idTask}">
          ${task.category}
        </div>
      </td>
      <td class="task-priority">
        <div class="priority-name ${
          task.priorityTaskValue
            ? task.priorityTaskValue
            : task.priorityTaskOtherValue
        }">
          ${task.priority}
        </div>
      </td>
      <td class="actions">
        <button title="Excluir" class="btn-actions btn-delete" id="btn-delete-${
          task.idTask
        }">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button title="Feito" class="btn-actions btn-done" id="btn-done-${
          task.idTask
        }">
          <i class="fa-solid fa-check"></i>
        </button>
        <button title="Em progresso" class="btn-actions btn-progress" id="btn-progress-${
          task.idTask
        }">
          <i class="fa-solid fa-spinner"></i>
        </button>
      </td>
    </tr>`;

      const btnDeleteTask = document.querySelectorAll(".btn-delete");
      const btnDoneTask = document.querySelectorAll(".btn-done");
      const btnProgressTask = document.querySelectorAll(".btn-progress");

      btnDeleteTask.forEach((btnDelete) => {
        btnDelete.addEventListener("click", (e) => {
          const btnId = e.target.id;
          const id = btnId.split("-")[2];
          changeTaskStatus("delete", id);
        });
      });

      btnDoneTask.forEach((btnDone) => {
        btnDone.addEventListener("click", (e) => {
          const btnId = e.target.id;
          const id = btnId.split("-")[2];
          changeTaskStatus("done", id);
        });
      });

      btnProgressTask.forEach((btnProgress) => {
        btnProgress.addEventListener("click", (e) => {
          const btnId = e.target.id;
          const id = btnId.split("-")[2];
          changeTaskStatus("progress", id);
        });
      });
    });
  }
};

const createTask = (first) => {
  const idTask = generateId();

  if (first) {
    const taskNameValue = inputTaskName.value;
    const dateToday = new Date();
    const day = dateToday.getDate();
    const month = dateToday.getMonth() + 1;
    const year = dateToday.getFullYear();
    const dateNumber = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    const categoryTaskValue = categoryTask.value;
    const priorityTaskValue = priorityTask.value;
    const statusTask = "no-start";
    const status = "Não começou";

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

    saveTaskLocalStorage({
      idTask,
      taskNameValue,
      dateNumber,
      categoryTaskValue,
      priorityTaskValue,
      category,
      priority,
      statusTask,
      status,
    });

    firstTaskMenu.classList.toggle("hidden");
    noTasksContainer.classList.toggle("hidden");
    taskAdded.classList.toggle("hidden");
    taskTable.innerHTML += `
    <tr class="task-header">
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
  </tr>`;
    createElement(
      idTask,
      taskNameValue,
      dateNumber,
      categoryTask,
      category,
      priorityTask,
      priority,
      "no-start",
      "Não começou"
    );
    inputTaskName.value = "";
    categoryTask.value = "work";
    priorityTask.value = "high";
  } else {
    const taskNameValue = inputTaskNameOther.value;
    const dateToday = new Date();
    const day = dateToday.getDate();
    const month = dateToday.getMonth() + 1;
    const year = dateToday.getFullYear();
    const dateNumber = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    const categoryTaskOtherValue = categoryTaskOther.value;
    const priorityTaskOtherValue = priorityTaskOther.value;
    const statusTask = "no-start";
    const status = "Não começou";

    const category =
      categoryTaskOther.value === "work"
        ? "Trabalho"
        : categoryTaskOther.value === "study"
        ? "Estudos"
        : categoryTaskOther.value === "family"
        ? "Família"
        : "Outro";

    const priority =
      priorityTaskOther.value === "high"
        ? "Alta"
        : priorityTaskOther.value === "medium"
        ? "Média"
        : "Baixa";

    saveTaskLocalStorage({
      idTask,
      taskNameValue,
      dateNumber,
      categoryTaskOtherValue,
      priorityTaskOtherValue,
      category,
      priority,
      statusTask,
      status,
    });

    createTaskMenu.classList.toggle("hidden");
    createElement(
      idTask,
      taskNameValue,
      dateNumber,
      categoryTaskOther,
      category,
      priorityTaskOther,
      priority,
      "no-start",
      "Não começou"
    );
    inputTaskNameOther.value = "";
    categoryTaskOther.value = "work";
    priorityTaskOther.value = "high";
  }

  const btnDeleteTask = document.querySelectorAll(".btn-delete");
  const btnDoneTask = document.querySelectorAll(".btn-done");
  const btnProgressTask = document.querySelectorAll(".btn-progress");

  btnDeleteTask.forEach((btnDelete) => {
    btnDelete.addEventListener("click", (e) => {
      const btnId = e.target.id;
      const id = btnId.split("-")[2];
      changeTaskStatus("delete", id);
    });
  });

  btnDoneTask.forEach((btnDone) => {
    btnDone.addEventListener("click", (e) => {
      const btnId = e.target.id;
      const id = btnId.split("-")[2];
      changeTaskStatus("done", id);
    });
  });

  btnProgressTask.forEach((btnProgress) => {
    btnProgress.addEventListener("click", (e) => {
      const btnId = e.target.id;
      const id = btnId.split("-")[2];
      changeTaskStatus("progress", id);
    });
  });
};

btnShowMenuFirstTask.addEventListener("click", () =>
  showOrHiddenCreateTask(true)
);

btnShowMenuOtherTasks.addEventListener("click", () =>
  showOrHiddenCreateTask(false)
);

btnCreateFirstTask.addEventListener("click", () => createTask(true));
btnCreateOtherTasks.addEventListener("click", () => createTask(false));

btnCloseFirst.addEventListener("click", () => showOrHiddenCreateTask(true));
btnCloseOther.addEventListener("click", () => showOrHiddenCreateTask(false));

initTasks();
