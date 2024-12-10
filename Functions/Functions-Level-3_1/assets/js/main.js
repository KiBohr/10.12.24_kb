

let superBall1 = document.querySelector(".superball-1")
console.log(superBall1);

let h1 = document.querySelector("h1");
console.log(h1);

let backGround = document.querySelector("body")

function changeColors(color, backgroundColor){
    h1.style.color = color ;
    backGround.style.backgroundColor = backgroundColor;
}

let resetButton = document.querySelector("button");

function reset(color, backgroundColor){
    h1.style.color = color;
    backGround.style.backgroundColor = backgroundColor;
}
