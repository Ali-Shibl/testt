const btn=document.querySelector('.buttonTop')

window.addEventListener('scroll',()=>{
const topHome=document.documentElement.scrollTop

 if (topHome > 350) {
    btn.classList.replace('d-none','d-flex')
    
 }else{
    btn.classList.replace('d-flex','d-none')
 }
})

btn.addEventListener('click',()=>{
    document.documentElement.scrollTop=0
})
