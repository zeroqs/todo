const inputText = document.querySelector('.input')
const button = document.querySelector("button")
const todoList = document.querySelector("ul")


function createOnEnter(e) {
    if (e.keyCode == 13){
        if (inputText.value == '') {
            alert("Невозможно создать задачу")
        } else {
            document.querySelector("button").click();
        }
    }

  }

button.addEventListener('click', function() { 
    const todoTask = inputText.value
    if (todoTask == "") { 
        alert("Создайте задачу") 
    } else {
        todoList.innerHTML += `<section class="flex task"><li class="flex flex-1">${todoTask}</li><button class="p-1 w-5 close">&#215;</button></section>`
    }
    inputText.value = ""
    const deleteTask = document.querySelectorAll(".task")
    if (deleteTask.length > 15) {
        alert("Создание задач невозможно")
        console.log(deleteTask[15].remove())
    }
    
    deleteTask.forEach((e) => {
        e.addEventListener("click", function () {
            e.remove()
        })
      })
})

window.addEventListener("keyup", createOnEnter);