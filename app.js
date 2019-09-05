function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  let toDos = [] || localStorage.getItem(JSON.parse('toDos'));
  let id = 0;

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      checkbox.addEventListener('click', event => {
        if (checkbox.checked == true){
          toDo.complete;
          localStorage.setItem("toDos", JSON.stringify(toDos));
        }
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
    });
  }

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText.value){ return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

    newToDoText.value = '';
    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
};

window.onload = function() {
  onReady();
};
