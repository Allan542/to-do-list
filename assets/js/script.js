let inputToDo = document.getElementById('inputToDo')
let addingToDo = document.getElementById('addingToDo')
let toDoList = document.getElementById('toDoList')
let tasks = document.querySelector('div.tasks')

addingToDo.addEventListener('click', criaToDo)

function criaToDo() {
    if(inputToDo.value.length == 0 || inputToDo.value == ' ') window.alert('Preencha o campo com alguma tarefa!')
    else {
        item = document.createElement('input')
        item.setAttribute("type", "checkbox")
        item.setAttribute("class", "item")
        item.setAttribute("name", "item")

        label = document.createElement('label')
        label.setAttribute("class", "itemLabel")
        label.setAttribute("for", "item")
        label.innerHTML = inputToDo.value
        inputToDo.value = ''

        br = document.createElement('br')
        
        tasks.append(item)
        tasks.append(label)
        tasks.append(br)

        inputToDo.focus()
    }
}

inputToDo.onkeydown = function(event) {
    if(event.key === 'Enter'){
        criaToDo()
    }
}