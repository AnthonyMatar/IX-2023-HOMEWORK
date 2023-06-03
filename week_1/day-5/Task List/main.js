class Task{
    constructor(task){
        this.task = task;
    }
}

class UI{
    cosntructor(){
        this.form = docoument.getElementById('form');
        this.task = document.getElementById('task-input');
        this.tableBody = document.getElementById('table-body');
        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

    }

    onFormSubmit(e) {
        e.preventDefault();
    }
}

const ui = new UI();