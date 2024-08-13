const btn=document.getElementsByClassName('btn')[0];
const navmenu=document.getElementsByClassName('navmenu')[0];


btn.addEventListener('click',()=>{
    navmenu.classList.toggle('active');
})


