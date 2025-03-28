const bar = document.getElementById('bar')
const navbar = document.getElementById('nav')
const close= document.getElementById('close')

if(bar){
    bar.addEventListener('click', ()=>{
        navbar.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',() =>{
        navbar.classList.remove('active')
    })}
