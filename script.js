const todoInput = document.querySelector('.add__todo');
const todoUl = document.querySelector('.todo__list');
const clearBtn = document.querySelector('.clear__btn');
const CompleteBtn = document.querySelector('.filter__btn');
const activeBtn = document.querySelector('.active__btn');
const addBtn = document.querySelector('.add__btn');


todoInput.addEventListener('keydown', function(event){
        let todoValue = todoInput.value.trim();
        let todoList = document.createElement('li');
        let btn = document.createElement('button');
   
        if (event.key === 'Enter' && todoValue === ''){
            alert('Add a new Todo')
            return
        }

        if(event.key === 'Enter'){
        btn.classList.add('btn__notch')
        btn.innerHTML = '<i class="fa-solid fa-circle-notch"></i>';
        todoList.textContent = todoValue;
        todoList.appendChild(btn);
        todoUl.appendChild(todoList);
        todoInput.value = '';
    }

    todoList.addEventListener('click', ()=>{
        todoList.classList.toggle('completed');
        (todoList.classList.contains('completed')) ? btn.innerHTML = '<i class="fa-solid fa-circle-check"></i>': btn.innerHTML = '<i class="fa-solid fa-circle-notch"></i>'
    })

    btn.addEventListener('click', ()=>{
        todoList.remove();
    })

    clearBtn.addEventListener('click', ()=>{
        todoList.remove();
    })

    CompleteBtn.addEventListener('click', ()=>{
        // console.log(todoList)
        todoList.style.display = 'flex';
        let completedTodos = todoList.classList.contains('completed')
        if(completedTodos){
            completedTodos.style.display = 'block';
        } else{
            todoList.style.display = 'none';
        }
    })

    activeBtn.addEventListener('click', () => {
        todoList.style.display = 'flex';
        if(todoList.classList.contains('completed')){
            todoList.style.display = 'none';
        } else{
            todoList.style.display = 'content';
        }
    })

    addBtn.addEventListener('click', () => {
        todoList.style.display = 'flex';
    })

 })
    




