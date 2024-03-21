const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');//parent
const sectBtn = document.querySelectorAll('.controll');//child
const allSections = document.querySelector('.main-content');
const home = document.querySelector("#home");
const homeBtn = document.querySelector(".controll-1");
const video = document.getElementById("myVideo");
const closeButton = document.getElementById("closeButton");
const secondVideo = document.getElementById("mySecondVideo");
const closeSecondButton = document.getElementById("closeSecondButton");

function init(){
    if(!localStorage.getItem('showSection')){
        home.classList.add('active');
        homeBtn.classList.add('active-btn');
    } else {
        const showSection = document.getElementById(localStorage.getItem('showSection'));
        showSection.classList.add('active');
      
        const showButton = document.querySelector(`[data-id=${localStorage.getItem('showButton')}]`);
        showButton.classList.add('active-btn');
    }

    if (secondVideo.style.display === "block") {
        closeSecondButton.style.display = "inline-block";
    }
}

init();

function pageTransitions(){
    //Markerar vald knapp i menyn med rosa färg med hjälp av active-btn class.
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
            localStorage.setItem('showButton', sectBtn[i].dataset.id);
        })
    }

    //Växlar mellan sektionerna. Den som har active är display block, överiga display none
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if(id){

            sectBtns.forEach ((btn) => {
                btn.classList.remove('active')
            })

            //Göm de andra sektionerna
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            //Koppla ihop med id som är angivet i index.html
            //Detta renderar ut rätt section
            const element = document.getElementById(id);
            element.classList.add('active');

            //Sparar till localStorage
            localStorage.setItem('showSection', id);
        }
    })
}

pageTransitions();

video.onplay = function() {
    closeButton.style.display = "inline-block";
};

video.onpause = function() {
    closeButton.style.display = "none";
};

function toggleVideo() {
    if (video.style.display === "none") {
        video.style.display = "block";
        video.play();
    } else {
        video.pause();
    }
}

function closeVideo() {
    video.pause();
    video.style.display = "none";
    closeButton.style.display = "none";
}


secondVideo.onplay = function() {
    closeSecondButton.style.display = "inline-block";
};

secondVideo.onpause = function() {
    closeSecondButton.style.display = "none";
};

function toggleSecondVideo() {
    if (secondVideo.style.display === "none") {
        secondVideo.style.display = "block";
        secondVideo.play();
    } else {
        secondVideo.pause();
    }
}

function closeSecondVideo() {
    secondVideo.pause();
    secondVideo.style.display = "none";
    closeSecondButton.style.display = "none";
}

