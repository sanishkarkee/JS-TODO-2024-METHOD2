window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');

  const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    // 0] Input empty huda ko case
    if (task.length == 0) {
      alert('Please fill out the task');
      return; // yo gare paxi yo if ko condition bata bahira aauxa
    }

    //NOTE: Html ma comment gareko DIV structure Js bata banaune

    // 1] <div class="task">   banaune
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    // 2] <div class="content">   banaune
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    // task_content_el.innerHTML = task; // 5] Input value list ma add gareko

    //8] adding<"content" div inside "task" div>
    task_el.appendChild(task_content_el);

    // // 3] "content" div lai "task" div bhitra append/add garne
    // task_el.appendChild(task_content_el);

    // 6] "content" div bhitra ko <input> button banako
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    //7]
    task_content_el.appendChild(task_input_el);

    // 9] <actions> div banako
    const task_actions_el = document.createElement('actions');
    task_actions_el.classList.add('actions');

    // 10] <actions> div bhitra ko "edit" button  banako
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerHTML = 'Edit';

    // 11] <actions> div bhitra ko "delete" button banako
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete';

    // 12] "edit" ra "delete" button lai "action" div bhitra rakhne
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    // 13] <action> element lai <task> element bhitra rakhne
    task_el.appendChild(task_actions_el);

    // 4] whole "task" div lai , <div id="tasks"> bhitra add/append garne
    list_el.appendChild(task_el);

    // 15] clear the input section after "tasks" has been entered
    input.value = '';

    /* 16] ------------------EDIT-------------------------- */
    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerText.toLowerCase() == 'edit') {
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();

        // 17] "edit" button lai "save"  button ma change garna
        task_edit_el.innerText = 'Save';
      } else {
        task_input_el.setAttribute('readonly', 'readonly');
        task_edit_el.innerText = 'Edit';
      }
    });

    /* 17] ------------------Remove-------------------------- */
    task_delete_el.addEventListener('click', () => {
      //----Video ko way()----   removes the specified child element (task_el) from its parent element (list_el).
      list_el.removeChild(task_el);

      // ----Mero way----  directly removes the element (task_el) from its parent node in the DOM.
      // task_el.remove();
    });

    console.log(list_el);
  });
});
