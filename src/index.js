document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    buildToDo(event.target.new_todo.value);
    form.reset();
  })
});

function buildToDo(todo) {
  let list = document.createElement('h4')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete )
  btn.textContent = 'x'
  list.textContent = `${todo} `
  list.appendChild(btn)
  console.log(list);
  document.getElementById('tasks').appendChild(list);
  
}

function handleDelete(event) {
  event.target.parentNode.remove();
}