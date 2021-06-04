// Nandni>>----------------  Calendar Animation -------------------

calendarPage.classList.add("hide")

  function myFunction() {
    var calendarPage = document.getElementById("calendarPage");
    if (calendarPage.classList.contains("hide")) {
        calendarPage.classList.remove("hide");
    } else {
        calendarPage.classList.add("hide");
    }
}

//--------------------------------- Theme --------------------------

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  
  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        console.log("lightTheme");
        
    } else {
        setTheme('theme-dark');
        console.log("lightTheme");
        
    }
  }
  
  // Immediately invoked function to set the theme on initial load
  (function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
  })();
  
  console.log("Heyy is something went wrong??")

// --------------------------------------------------<<


/* PK:adding and deleting task */
//Selectors
const todoInput = document.querySelector('.taskInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todoList');

const signUp = document.querySelector('.signUp-Btn'); //elements from login page
const logIn = document.querySelector('.login-Btn');

//Event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);


//functions
function addTodo(event){
    event.preventDefault(); //prevent from submitting
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    newTodo.classList.add("todoItem");
    todoDiv.appendChild(newTodo);
    
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completeBtn");
    todoDiv.appendChild(completedButton);
    
    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("deleteBtn");
    todoDiv.appendChild(trashButton);
    
    //Append to list
    todoList.appendChild(todoDiv);    
    /* this will append will append
    <div class="todo">
        <li></li>
        <button></button>
        <button></button>
    </div>
    to HTML*/

    //Clear Input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;

    //DELETE TASK
    if(item.classList[0] === 'deleteBtn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }

    //MARK DONE
    if(item.classList[0] === 'completeBtn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//LOGIN PAGE TO HOME PAGE
function goToHomePage(e){
    e.preventDefault();
    const userName = document.querySelector('.userName');
    console.log(userName.value);
}


// ---Nandni >>------- (Added list items) -------------------------------

var button = document.getElementById("btn");
var list = document.getElementById("list");

list.style.display = "none";

button.addEventListener("click", function()
{
    if(list.style.display == "none"){
        list.style.display = "block";
    }
    else{
        list.style.display = "none";
    }
})

$(".rotate").click(function () {
    $(this).toggleClass("down");
})
// ----------------- SELECT OPTIONS -------------

const filterOption = document.querySelector('.filter-todo');
filterOption.addEventListener("click",filterTodo);

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }   else{
                    todo.style.display = "none";
                } 
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }  else{
                    todo.style.display = "none";
                }  
                break;
        }
    })
}

// -------------------------------------------------------------------<<

//CALENDER BY ANKS
let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

