
window.addEventListener('load', () => {
    const farm = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_al = document.querySelector('tasks');


    form.addEventListener('submit', () =>{
        e.preventDefault();
    
    // const task = input.value;

    if (!task) {
        alert('please fill out the task');
        return;
    }
    const task_el =document.createElement('div');
    task_al.classList.add('task'); 

    // const task.content_el =document.createElement('div');
    task_content_a.classList.add('content');
    task_al_appendchild(task_content_al);
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = 'task'
    task_input_el.setAttribute('readonly','readonly');
    task_input_el.type =('text');

    task_content_el.task_al_appendchild(task_input_el);
    const task_actions_el = document.createElement('div');
    task_edit_el.classList.add('actions');

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('Edit');
    task_edit_el.innerHTML='Edit';


    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('Delete');
    task_delete_el.innerHTML='Delete';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_edit_el.appendChild(task_actions_el);

    list_el.appendChild(task_el)


    input.value = '';


})
    
})
   