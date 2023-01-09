// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compile
console.log("1");

setTimeout(()=>{console.log("2")},1000)

console.log("3");

fetch('https://reqres.in/api/users').then(res => res.json()).then(data => {
    console.log("4");
});

console.log("5");

fetch('https://reqres.in/api/users').then(res => res.json()).then(data => {
    console.log("6");
});

console.log("7");

setTimeout(()=>{console.log("8")},1000)

console.log("9");