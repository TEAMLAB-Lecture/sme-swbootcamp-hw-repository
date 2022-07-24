window.addEventListener('load', () => {
	const form = document.querySelector("#value-form");
	const input = document.querySelector("#value-input");
	const list_el = document.querySelector("#values");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
        
        
		const task_el = document.createElement('div');
		task_el.classList.add('task');

        const checkbox_el = document.createElement('div');
        checkbox_el.classList.add('checkbox');      

        task_el.appendChild(checkbox_el);

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = '수정';

		const task_save_el = document.createElement('button');
		task_save_el.classList.add('save');
		task_save_el.innerText = '저장';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_save_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

        task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "수정") {
				task_input_el.removeAttribute("readonly");
			} else {
				task_save_el.innerText = "수정";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

	});
});