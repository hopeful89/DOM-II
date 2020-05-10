// let parentBlock = document.querySelector('.blocks');
// let blockGroup = document.querySelectorAll('.block');
// let continuedSliding;
// let position = 0;
// let positionUpdate;
// blockGroup.forEach(el => {
    
//     el.addEventListener('click', (e) => {
//         parentBlock.prepend(e.target)
//         e.stopImmediatePropagation()
//     })
    
//     el.addEventListener('mousedown', (e) => {
//         positionUpdate = setInterval( ()=> {
//         position = e.target.getBoundingClientRect();
//         },30)
//         continuedSliding = setInterval(function(){
//         if(window.innerWidth > (position.x + 100)){
//             e.target.style.transform += 'translateX(5px)';
//            }
//         }, 20)

//     })

//     el.addEventListener('mouseout', (e) => {
//         clearInterval(continuedSliding)
//         clearInterval(positionUpdate)
//         e.target.position = 'initial';
//     })
// })

function movingBlocks(){
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
            e.target.transform = 'inherit'
            positionUpdate = setInterval( ()=> {
            position = e.target.getBoundingClientRect();
            },30)
            continuedSliding = setInterval(function(){
                if(window.innerWidth > (position.x + 125)){
                    e.target.style.transform += 'translateX(15px)';
                }
            }, 20)
        })

        window.addEventListener('mouseup', (e) => {
            clearInterval(continuedSliding);
            clearInterval(positionUpdate);
            el.style.transform = 'translateX(0)';
        })
    })
}


movingBlocks();




