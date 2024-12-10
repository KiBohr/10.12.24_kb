
// : declare a new element, verbinde es mit dem div über die id, erstelle html durch .innerHTML in dem div

const createH1 = document.getElementById("info");
console.log(createH1);
createH1.innerHTML += "<h1> Hello World </h1>";

const createH2 = document.getElementById("info");
createH2.innerHTML += "<h2> How are you? </h2>";
console.log(createH2);

// : declare a new element, verbinde mit id container, create a p tag through .innerHTML, add a document.write 

let createP = document.getElementById("container");
createP.innerHTML += "<p>start of the element </p>";

createP = document.write("end of the element");