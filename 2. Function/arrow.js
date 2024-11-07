const sayHello = (name) => `Hello ${name}!`;

document.getElementById("greeting1").textContent = sayHello("Hagrid");
document.getElementById("greeting2").textContent = sayHello("Luna");

console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));
