function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDolist');
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    //get the text
    let title = newToDoText.value;
    //create a new li
    let newLi = document.createElement('li');
    //set the input's type of checkbox
    checkbox.type = "checkbox";
    //set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
