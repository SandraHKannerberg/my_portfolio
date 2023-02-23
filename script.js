const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');//parent
const sectBtn = document.querySelectorAll('.controll');//child
const allSections = document.querySelector('.main-content');

function pageTransitions(){
    //Färg effekt på den knapp man trycker på med hjälp av active-btn class.
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Växlar mellan sektionerna. Den som har active är display block, överiga display none
    //TO DO: active class ska enbart bytas när man klickar på en nav-knapp inte vid reload.
    //Hur fixar man det??
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //Färg på aktuell knapp man har valt
            sectBtns.forEach ((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //Göm de andra sektionerna
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            //Koppla ihop med id som är angivet i index.html
            const element = document.getElementById(id);
            console.log(id);
            element.classList.add('active');
            localStorage.setItem('section', id);
        }
    })
    
}

pageTransitions();