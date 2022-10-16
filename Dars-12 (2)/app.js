// // FILTER
// const numbers = [19,10,20,16,4,6,2];
// const largerThan10 = numbers.filter(n=>n>10);
// console.log(largerThan10);

// const nums = [4,2,10,7,8,3,6,5,13];
// const even  = nums.filter(a=>a%2==0)
// console.log(even);

// == bu qoldiqqa nnisbatan ishlatiladi


// const mNums = [-2,4,3,10,8,10,-3,-5,9];
// const even = mNums.filter(c=>c%2==0)
// const minusEven = even.filter(c=>c<0)
// console.log(minusEven);

// const numbersJ = [5,10,18,20,30,45,10,20,30,50,60,10,34,91,110];

// const divide10 = numbersJ.filter(a=>a % 10 == 0)
// console.log(divide10.length);



// const names = ["Maqsudbek", "Foruxbek", "Jaloliddin", "Dovudxon", "Abubakr"];

// const withU  = names.filter(h=> h.includes("u"))
// console.log(withU);


// const mails  = [
//     "hjajhasjhj@gmail.com",
//     "jahahjhs@gmail.com",
//     "hHJJ@gmail.com",
//     "JASEN@gmail.com",
//     "obama@bk.ru"
    
// ]


// const com = mails.filter(a=>a.includes("@gmail.com"))
// console.log(com);



// const numbers  = [3,2,10,7,8,15,23,2]
// const sortedNumbers = numbers.sort((a,b)=>a-b);
// console.log(sortedNumbers);
const strings = ["hello" , "good morning"]
const splitted = strings[0].split('')
console.log(splitted);
const users = [
    {
        name : "Shoqosim",
        age: 19
    },
    {
        name : "Bolta",
        age: 20
    },
    {
        name : "Tesha",
        age: 23
    },
    {
        name : "Doe",
        age: 20
    },
    {
        name : "Smith",
        age: 21
    },
    {
        name : "John",
        age: 13
    }
]
const above = users.filter((a)=>a.age>20);
const h1 = document.createElement('h1');
h1.innerHTML = above;
console.log(above);
document.body.appendChild(h1);
above.includes();




