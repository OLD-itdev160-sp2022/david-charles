//task array
var tasks = [];

//taskStatus enum object
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//task constructor
function Task(id,name,status){
    this.id = id;
    this.name = name;
    this.status = status;
}

//add task el function
function addTaskElement(task){
    //create task elements
    var listEl = document.getElementById('active-list');//get list el
    var taskEl = document.createElement('li'); //creates the li to append to list
    var textEl = document.createTextNode(task.name); //creates and sets the the content of the text node within the li

    //set attribute (id)
    taskEl.setAttribute('id', task.id); //sets id attribute of the li to that of the enum field

    //Add text to task element
    taskEl.appendChild(textEl); //appends the text element to the li

    //Add task element to list
    listEl.appendChild(taskEl); //appends the li to the list

}

//add task function
function addTask(event){
    var inputEl = document.getElementById('input-task');//get the text box el
    if(inputEl.value != ''){  //if textbox is not null
        //create a unique id
        var id = 'item-' + tasks.length;  //creates an id that counts up based on the length of the tasks array

        //create a new task
        var task = new Task (id, inputEl.value, taskStatus.active);
        tasks.push(task);// pushes created task to the tasks array

        //add the task to the DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

//complete task function(onClick event handler)

function completeTask(event){
    var taskEl = event.target;
    var id = taskEl.id;

    //find corresponding task in tasks array(using id) and update status
    for(var i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //Move task el from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//Key press handler to automatically click add task button
function clickButton (event) {
    if(event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

function revertTask(event){
    var taskEl = event.target;
    var id = taskEl.id;

    //find corresponding task in tasks array(using id) and update status
    for(var i = 0; i < tasks.length; i++){
        if(tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //Move task el from active list to active list
    taskEl.remove();
    document.getElementById('active-list').appendChild(taskEl);

}

//initialize app
function init(){
    //wire up add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //wire up the completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //wire up task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;

    //wire up button to change a completed task back to an unfinished one
    document.getElementById('completed-list').onclick = revertTask;
}

init();


