let btn = document.getElementById("btn")
let changecolor = document.getElementById("color")
let wrap = document.getElementById("wrap")
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener("click",changebg)

function changebg(){
    let hexcolor = "#"
    for (let i = 1;i<=6;i++){
        hexcolor+=randomhex()
    }
    wrap.style.backgroundColor=hexcolor;
    changecolor.innerHTML=hexcolor;
}
function randomhex(){
    let colorchange = Math.floor(Math.random()*16)
    return hex[colorchange]
}