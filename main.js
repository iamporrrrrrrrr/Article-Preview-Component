const cardFooter = document.querySelector('.footer');
const shareButton = document.querySelectorAll('.share');
const box = document.querySelector('.box');
const boxMobile = document.querySelector('.mobile-box')

function toggleDesktop(){
    box.classList.toggle('hidden');
}

function toggleMobile(){
    cardFooter.classList.toggle('hidden');
    boxMobile.classList.toggle('hidden');
}

function checkScreenSize(){
    shareButton.forEach((button) =>{
        if(window.matchMedia('(width<= 500px)').matches){
            box.classList.add('hidden');
            button.removeEventListener('click',toggleDesktop);
            button.addEventListener('click',toggleMobile);
            console.log("!!!");
        }
        else{
            boxMobile.classList.add('hidden');
            cardFooter.classList.remove('hidden');
            button.removeEventListener('click',toggleMobile);
            button.addEventListener('click',toggleDesktop);
        }
    });
}

checkScreenSize();

window.addEventListener('resize',checkScreenSize);