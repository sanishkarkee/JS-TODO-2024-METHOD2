window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');

  const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if (task.length == 0) {
      alert('Please fill the task field');
      return;
    }

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.setAttribute('readonly', 'readonly');
    task_input_el.value = task;

    task_content_el.appendChild(task_input_el);

    const task_action_el = document.createElement('div');
    task_action_el.classList.add('actions');

    task_el.appendChild(task_action_el);

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    list_el.appendChild(task_el);

    // Clear input field after entry
    input.value = '';

    // ---------------EDIT--------------------
    task_edit_el.addEventListener('click', () => {
      // Click gareko case
      if (task_edit_el.innerText.toLowerCase() == 'edit') {
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();

        task_edit_el.innerText = 'Save';

        console.log(task_input_el.value);
      }
      // Update gare paxi ko case
      else {
        task_input_el.setAttribute('readonly', 'readonly');
        task_edit_el.innerText = 'Edit';

        console.log(task_input_el.value);
      }
    });

    // ---------------DELETE--------------------

    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    });

    // console.log(task_el);
  });
});
