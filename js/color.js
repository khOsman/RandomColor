const colors =["blueviolet","#1dd1a1","rgb(254, 202, 87)","rgb(72, 219, 251)","#ee5253","rgb(95, 39, 205)","coral","cornsilk","cadetblue","brown"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
   //get random number between 0-3 color[0-2]
    const randomNumber =getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}