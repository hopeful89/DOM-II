let parentBlock = document.querySelector('.blocks');
let blockGroup = document.querySelectorAll('.block');
let continuedSliding;
let position = 0;
let positionUpdate;
blockGroup.forEach(el => {
    
    el.addEventListener('click', (e) => {
        parentBlock.prepend(e.target)
        e.stopImmediatePropagation()
    })
    
    el.addEventListener('mousedown', (e) => {
        positionUpdate = setInterval( ()=> {
        position = e.target.getBoundingClientRect();
        console.log(position.x)
        },30)
        continuedSliding = setInterval(function(){
        if(window.innerWidth > (position.x + 100)){
            e.target.style.transform += 'translateX(5px)';
           }
        }, 20)

    })  

    el.addEventListener('mouseout', (e) => {
        clearInterval(continuedSliding)
        clearInterval(positionUpdate)
    })

})




