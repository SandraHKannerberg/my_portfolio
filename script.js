const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');//parent
const sectBtn = document.querySelectorAll('.controll');//child
const allSections = document.querySelector('.main-content');


function pageTransitions(){
    //Button click active-class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
            //TO DO: active class ska enbart bytas när man klickar på en nav-knapp inte vid reload.
            //Hur fixar man det??
        })
    }

    //Section active-class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach ((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            //connect to the id that was set in index.html
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    
}

pageTransitions();