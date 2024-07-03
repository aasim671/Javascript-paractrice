// let todo = [
//     {
//         S_NO: 0,
//         name: 'Muhammad Aasim',
//         id: 41
//     },
//     {
//         S_NO: 1,
//         name: 'Hilal Ahmad',
//         id: 42

//     },
//     {
//         S_NO: 2,
//         name: 'Ishfaq Ahmad',
//         id: 43
//     }

// ]
// let todo1 = JSON.stringify(todo);
// console.log(todo1);

// console.log(todo);



// let x = 10;

// color = x = 10 ? 'blue or red' : 'beviory it is yellow';
// console.log(color);






// -----------------------
// form getting data

// const btn = document.getElementById('btn');

// btn.addEventListener

// ---------------








// ashronuosus and sysnhrous function


// let a = prompt('What is your name?')
// let b = prompt('What is your age in year?')

// console.log(a + '  is ' + b + ' year old.')


// -----------------------

// let a = 'Hello sir how are you if yor are fine then wait for 3 seconds'
// console.log(a);

// setTimeout(() => {
//     console.log('Try to work on something')

// }, 5000);

// console.log('If you are not fine then go back.')





// ---------------------
// const a = 1;
// console.log(typeof a);
// --------------



// ---------------------------------------------------
// add event listner
// const btn = document.getElementById('btn');
// btn.addEventListener('click', (e) => {
//     let a = prompt('Enter Your Name:')
//     document.write(a + '  welcome to our office')
// })





// ------------------


// arr = new Array(1, 2, 2, 2, 2, 3, 44, 44, 44)

// console.log(arr.length)

// console.log(typeof arr)

// --------------------------


// arr = [1, 1, 1, 11]

// console.log(typeof arr)







// -------------------

// ALERT , CONFIRM , prompt
// const form = document.querySelector('#form');
// const name_input = document.getElementById('name');
// form.addEventListener('click', submit)

// function submit(e) {

//     if (name_input.value === 'aasim') {
//         alert('Welcome to TakDevs' + ' Muhammad Aasim')
//     }


// }
// ---------------------------------

// const form = document.querySelector('#form');
// form.addEventListener('click', submit)

// function submit(e) {

//     console.log(prompt('Are you a part of our team?'))
// }






// --------------------------------------------------------
// let btn = document.getElementById('btn')
// btn.style.background = 'green'


// ----------------------------------------------------------

// /----------------------------------------------------------------
// form validation etc and event listener are used also child etc concept are used and DOM searching are used

// const name_input = document.querySelector('#name');
// const email = document.querySelector('#email');
// const form = document.querySelector('#form');
// const msg = document.querySelector('.error');
// const showdata = document.querySelector('.li_input');

// form.addEventListener('submit', onsubmit);
// function onsubmit(e) {
//     e.preventDefault();
//     if (name_input.value === '' || email.value === '') {
//         msg.innerHTML = 'Enter All Required Fields'
//         setTimeout(() => msg.remove(), 3000);
//     }
//     else {
//         msg.innerHTML = 'Data Submitted sucessfuly.'
//         setTimeout(() => msg.remove(), 3000);
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${name_input.value} : ${email.value}`))
//         showdata.appendChild(li)

//         //    after showing data fields well clear
//         name_input.value = ''
//         email.value = ''

//     }

// }

