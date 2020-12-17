const toDoList = {
    tasks: [],

    addTask (text, id = Date.now()) {
        const task = {
            text,
            status: false,
            id,
        };
    
        this.tasks.push(task);

        return toDoList;
    },

    deleteTask (id, confirm) {
        const index = this._findTaskByID(id);

        if (index >= 0 && confirm) {
            this.tasks.splice(index, 1);
        }

        return toDoList;
    },

    changeTask (id, text, confirm) {
        const index = this._findTaskByID(id);

        if (index >= 0 && confirm) {
            this.tasks[index].text = text;
        }

        return toDoList;
    },

    updateStatus (id) {
        const index = this._findTaskByID(id);

        if (index >= 0) {
            this.tasks[index].status = true;
        }

        return toDoList;
    },

    _findTaskByID (id) {
        return this.tasks.findIndex((task) => task.id === id);
    },

    getStatistic () {
        let res = {
            total: this.tasks.length,
            compeled: this._completedTasks.length,
            uncompleted: (this.tasks.length - this._completedTasks.length),
        }
        return res;
    },

    _completedTasks () {
        this.tasks.filter(function(item) {
        if (item.status === true) {
            return item;
        };
        })
    },
}

Object.freeze(toDoList);

console.log(toDoList.addTask('to watch a lesson', 123));
console.log(toDoList.addTask('to watch a lesson2', 124));
console.log(toDoList.addTask('to watch a lesson3', 125));

console.log(toDoList.deleteTask(124, confirm('Delete the task?')));

console.log(toDoList.changeTask(125, 'to comlete the test', confirm('Change the task?')));

console.log(toDoList.updateStatus(125));

console.log(toDoList.getStatistic());

