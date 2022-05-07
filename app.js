// toggle button
const toggleBtn = document.querySelector('.toggle__btn');
const navbarContainer = document.querySelector('.link__container');
const navbarHeader = document.querySelector('.nav__header');
const links = document.querySelectorAll('.scroll__link');
const textAnimition = document.querySelectorAll('.animit__text');
const aboutSection = document.querySelector('.about');

toggleFun()
function  toggleFun (){
    toggleBtn.addEventListener('click',() =>{
        navbarContainer.classList.toggle('show__link');
        toggleBtn.classList.toggle('active')
    });
    
// text animition efectting
textAnimition.forEach(animit =>{
    animit.classList.remove('animit__text');
    const aboutHeight = aboutSection.getBoundingClientRect().height;
    window.addEventListener('scroll',() =>{
        const scrollHeight = window.pageYOffset;
        if(scrollHeight > 350){
            animit.classList.add('animit__text');
        }
        else{
            animit.classList.remove('animit__text')
        }
       
    })
})

    // link scroll event toggling
    links.forEach(btn => {
        btn.addEventListener('click',() =>{
         toggleBtn.classList.toggle('active')

         if(navbarContainer.classList.contains('show__link')){
             navbarContainer.classList.remove('show__link')
         }
     })
    })

}


window.addEventListener('scroll',() =>{
    const buttonShadow = document.querySelector('.btn_hire_me');
   const navHeight = navbarHeader.getBoundingClientRect().height;
   const scrollHeight = window.pageYOffset;
   if(scrollHeight > navHeight){
       navbarHeader.classList.add('fixed__navber')
       buttonShadow.classList.add('shadow')
    }
    else{
        navbarHeader.classList.remove('fixed__navber')
        buttonShadow.classList.remove('shadow')
   }
})

// project filter
projectItem();

function projectItem(){
const filterBtn = document.querySelectorAll('.filter__btn');    
const projectList = document.querySelectorAll('.project__item')

filterBtn.forEach(btn => {
btn.addEventListener('click',(event) =>{
   const Id = event.target.dataset.id;

   projectList.forEach(item => {
     item.style.display = 'none'
    if(item.id === Id){
        item.style.display = 'block'
    }
    if(Id === 'all'){
        item.style.display ='block'
    }
})

})
})
}