const CJ = document.querySelector('.CJ');
const pipe = document.querySelector('.pipe');

const jump = () => {
        CJ.classList.add('jump');

    setTimeout(() => {
        CJ.classList.remove('jump'); 
    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const CJPosition = +window.getComputedStyle(CJ).bottom.replace ('px', '');


if (pipePosition <= 120 && pipePosition > 0 && CJPosition < 80) {
 
    pipe.style.animation = 'none';
    pipe.style.left = `${CJPosition}px`;
    
    CJ.style.animation = 'none';
    CJ.style.bottom = `${CJPosition}px`;
    
    CJ.src = './image/game-over.png';
    CJ.style.width = '75px'
    CJ.style.marginLeft = '50px'
    
    clearInterval(loop);
}

    
}, 10);

document.addEventListener('keydown', jump);
