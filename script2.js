// handle scroll event on window
// check skill-container is visible or not
// ensure that initial width of skill divs is 0-> initialize to 0 width vale
// start animation on every skill-> increase screen width from 0 to skill level at regular intervals
// store skill level-> in html with the help of data attribute

var progressBars=document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkscroll);
var animationDone = false;

function initializeBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}

initializeBars()

function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },5); 
    }
}

function checkscroll(){
    //Check whether skill container is visible
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight)
    {
        animationDone = true;
        fillBars();
    }
    else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initializeBars();
    }
}