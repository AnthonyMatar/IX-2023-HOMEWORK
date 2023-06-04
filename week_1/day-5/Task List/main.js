class Task {
  constructor(task) {
    this.task = task;
  }

  static fromJSON(task) {
    return new Task(task.task);
  }
}

class UI {
  constructor() {
    this.form = document.getElementById('form');

    this.task = document.getElementById('task-input');
    

    this.tableBody = document.getElementById('table-body');

    this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

    this.tasks = [];
    this.loadTasksFromLocalStorage();
    this.renderTaskTable();
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.task.value == '') {
      return;
    }

    const task = new Task(this.task.value);

    this.tasks.push(task);

    this.saveTasksToLocalStorage();
    this.renderTaskTable();

    this.task.value = '';
  }

  renderTaskTable() {
    this.tableBody.innerHTML = '';

    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const tr = this.createTaskTableRow(task);
      this.tableBody.appendChild(tr);
    }
  }

  createTaskTableRow(task) {
    const tr = document.createElement('tr');

    const tdTask = document.createElement('td');
    
    const tdDoneButton = document.createElement('td');
    tdDoneButton.setAttribute('class', 'text-center');
    const tdDeleteButton = document.createElement('td');

    const tdEditButton = document.createElement('td');

    tdTask.innerHTML = task.task;

    const deleteButton = this.createDeleteButton(task);
    const doneButton = this.createDoneButton();
    const editButton = this.createEditButton(task);

    tdDoneButton.appendChild(doneButton);
    tdDeleteButton.appendChild(deleteButton);
    tdEditButton.appendChild(editButton);
    


    tr.appendChild(tdTask);
    tr.appendChild(tdDoneButton);
    tr.appendChild(tdEditButton);
    tr.appendChild(tdDeleteButton);
    

    return tr;
  }

  createDoneButton(){
    const doneButton = document.createElement('input');
    doneButton.setAttribute('class', 'form-check-input');
    doneButton.setAttribute('type', 'checkbox');


    return doneButton;
  }

  createDeleteButton(task) {
    const deleteButton = document.createElement('button');
    

    deleteButton.setAttribute('class', 'btn btn-outline-danger');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () =>
      this.onRemoveTaskClicked(task)
    );
    return deleteButton;
  }

  createEditButton(task){
    const editButton = document.createElement('button');

    editButton.setAttribute('class', 'btn btn-outline-secondary');
    editButton.innerHTML = 'Edit';

    editButton.addEventListener('click', () => 
    this.onEditTaskClicked(task)
    );

    return editButton;
  }

  onEditTaskClicked(task){
    this.tasks = this.tasks.filter((x) => {
      return task.task !== x.task;
    });

    this.task.value = task.task;

    this.saveTasksToLocalStorage();
    this.renderTaskTable();
  }

  onRemoveTaskClicked(task) {
    this.tasks = this.tasks.filter((x) => {
      return task.task !== x.task;
    });

    this.saveTasksToLocalStorage();
    this.renderTaskTable();
  }


  saveTasksToLocalStorage() {
    const json = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', json);
  }

  loadTasksFromLocalStorage() {
    const json = localStorage.getItem('tasks');
    if (json) {
      const taskArr = JSON.parse(json);
      this.tasks = taskArr.map((x) => Task.fromJSON(x));
    }
  }
}

const ui = new UI();
