// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// todoForm.addEventListener('submit', formHandler);

// function formHandler(event) {
// 	event.preventDefault();

// 	// Получаем название задачи из инпута
// 	const taskText = todoInput.value;

// 	// Создаем тег li с помощью создания элемента
// 	const newTask = document.createElement('li');
// 	newTask.innerText = taskText;

// 	// Создаем кнопку Удалить
// 	const deleteBtn = document.createElement('button');
// 	deleteBtn.setAttribute('role', 'button');
// 	deleteBtn.innerText = 'Удалить';
// 	deleteBtn.style['margin-left'] = '15px';
// 	newTask.append(deleteBtn);

// 	// Добавляем событие по клику
// 	deleteBtn.addEventListener('click', function () {
// 		this.closest('li').remove();
// 	});

// 	// Добавляем элемент на страницу
// 	todoList.append(newTask);

// 	// Очищаем поле ввода
// 	todoInput.value = '';

// 	// Фокус на поле ввода
// 	todoInput.focus();
// }

///////////////////////////////////////////////////////////////

// const timerID = setInterval (function () {
//     console.log('Timer Fired!');
// }, 1000)

// setTimeout (function () {
//     clearInterval(timerID);
// }, 10000)



////////////////////--Cекундомер--/////////////////////////////////////////

// const counterElement = document.querySelector('#counter');
// let counter = 0;
// let timerID;

// //Старт
// const btnStart = document.querySelector('#start');
// btnStart.onclick = function () {
//     console.log('btnStart')
//     timerID = setInterval (function(){
//         counter++;
//         counterElement.innerText = counter;
//     }, 1000)
// }

// //Стоп
// const btnPause = document.querySelector('#pause');
// btnPause.onclick = function () {
//     console.log('btnPause')
//     clearInterval(timerID);

// }

// //Сброс
// const btnReset = document.querySelector('#reset')
// btnReset.onclick = function () {
//     console.log('btnReset')
//     counter = 0;
//     counterElement.innerText = counter;
//     clearInterval(timerID);
// }


///////////////////////////////////////////////////////////

///////////////////////////--  --///////////////////////

function checkRooms() {
    setTimeout(function() {
        console.log('Проверяем номера в отеле...');
        const availableRooms = true;

        if (availableRooms) {
            
        } else {
            
        }
    }, 1000)
}



///////////////////////////-- Курсы валют --///////////////////////


// 1. Получить данные с сервера

// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     .then(function(data){
//         return data.json()
//     }).then(function(data){
//         console.log(data);
//     })



async function getCurrencies (){
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    const response = await fetch(url);
    const data = await response.json();

    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);

   // 2. Отобразить на странице
   
   const usdElement = document.querySelector('#usd');
   const eurElement = document.querySelector('#eur');

   usdElement.innerText = usdRate;
   eurElement.innerText = eurRate;
}

getCurrencies();