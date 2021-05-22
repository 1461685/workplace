
// alert("Hello World!");
// var a = 5;
// var b = '5';

// if (a === b)
// {
//     console.log('true');
// }
// else
// {
//     console.log('false');
// }

/*while loop */
// var a = 0;
// while(a < 10)
// {
//     console.log(a + ' Hello Wolrd');
//     a++;
// }

/*Do while */
// var a = 0;
// do
// {
//     console.log(a + ' Bye World!');
//     a++;
// }while(a < 10)

/**
 * For loop
 */
// for(i = 0; i < 10; i++)
// {
//     console.log(i + ' Hi there!');

//     if(i == 6)
//     {
//         // break;
//         console.log('We have reached 6');
//         continue;
//     }
// }

/**
 * Function
 */
// function myFunction(x, y, z)
// {
//     console.log(x + y + z);
// }
// function loopFor(x, y, z)
// {
//     for(i = x; i < y; i++)
//     {
//         console.log(i + ' Hello World!');
//         if(i == z)
//         {
//             // break;
//             console.log('Hi there, we have break here');
//             continue;
//         }
//     }
// }

/**
 * Arrays
 */
// var someData = [10, 20, 50, 30, 40, 60];
// console.log(someData);
// var newData = someData.sort();
// console.log(newData);
// console.log(someData);
// var newData = someData.reverse();
// console.log(newData);
// console.log(someData);
// var newData = someData.join();
// console.log(newData);

/**
 * Numbers
 */


/**
 * Use Strict
 */
"use strict";
//Didn't use var
var something = "Hello World!";

//duplicate parameters
var person = 
{
    u_name: 1,
    u_anotherName: 2
};

//function parameter error
function myFunction(a, b, c)
{
    return a + b + c;
}

//output data
document.getElementById('heading').innerHTML = something;