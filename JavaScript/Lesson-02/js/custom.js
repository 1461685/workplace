// console.log('Hello World!');

/**
 * Working with DOM
 */
// var images = document.getElementsByTagName('img');
// console.log(images);

// var anchors = document.getElementsByTagName('a');
// console.log(anchors);

// var paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);

// var heading = document.getElementById('heading');
// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.nodeType); //element node type

/**
 * Changing content of DOM
 */
// var main_content = document.getElementById('main-content');
// main_content.setAttribute('align', 'right');

// var heading = document.getElementById('heading');
// heading.innerHTML = "Welcome to HTML/CSS";

/**
 * Creating new elements with JS
 */
// var main_content = document.getElementById('main-content');
// var new_heading = document.createElement('h2');
// var new_phrase = document.createElement('p');
// //add content to new element
// new_heading.innerHTML = "Welcome to HTML/CSS";
// new_phrase.innerHTML = "This is a simple phrase just to show demo creat element by JS";
// //go to show this to browser
// main_content.appendChild(new_heading);
// main_content.appendChild(new_phrase);

/**
 * Adding event to DOM element
 */
// var btn = document.getElementById('myBtn');
// btn.onclick = function()
// {
//     alert('Hello World!');
//     alert('Bye World!');
// }

/**
 * Working with form element
 */
//use in console tab on web browser
//document.myForm.u_name.value = "User Name"
//document.myForm.u_pass.value = "123456"

/**
 * Timers in JS
 */
// function runMe()
// {
//     alert('Simple Message');
// }

// setTimeout(runMe, 3000);

// function runMe()
// {
//     console.log('Hello');
// }
// setTimeout(runMe, 1000);

/**
 * Debug Javascript
 */
// var u_name = document.myForm.u_name;
// var u_pass = document.myForm.u_pass;

// var userName = "aabbccdd";
// var passWord = "123";

// function runMe()
// {
//     if(u_name.value == userName && u_pass.value == passWord)
//     {
//         console.log('Login Success');
//     }
//     else
//     {
//         console.log('Login Failed');
//     }
// }

/**
 * Creating Modern live validation form
 */
// var u_name = document.myForm.u_name;
// var message = document.getElementById('message');

// function runMe()
// {
//     if(u_name.value.length < 3)
//     {
//         message.innerHTML = "need more characters";
//         message.style.color = "red";
//         u_name.style.backgroundColor = "red";
//         u_name.style.color = "white";
//     }
//     else if(u_name.value.length == 5)
//     {
//         message.innerHTML = "Nice, OK";
//         message.style.color = "green";
//         u_name.style.backgroundColor = "green";
//         u_name.style.color = "white";
//     }
//     else if(u_name.value.length > 8)
//     {
//         message.innerHTML = "Limit has been reached";
//         message.style.color = "orange";
//         u_name.style.backgroundColor = "orange";
//         u_name.style.color = "white";
//     }
// }

/**
 * Minify & Validate JS 
 */
//to make website is faster: http://minifycode.com/javascript-minifier/
//var u_name=document.myForm.u_name;var message=document.getElementById('message');function runMe() {if(u_name.value.length<3) {message.innerHTML="need more characters";message.style.color="red";u_name.style.backgroundColor="red";u_name.style.color="white";} else if(u_name.value.length==5) {message.innerHTML="Nice, OK";message.style.color="green";u_name.style.backgroundColor="green";u_name.style.color="white";} else if(u_name.value.length>8) {message.innerHTML="Limit has been reached";message.style.color="orange";u_name.style.backgroundColor="orange";u_name.style.color="white";}}
//or can make code beautifier.
//https://www.jslint.com/ refer for more information.

/**
 * Using JS libraries
 */
