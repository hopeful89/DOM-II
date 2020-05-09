let info = {
    'h1': {
        'text': 'Hello user',
        'secondText': 'Welcome to Fun Bus',
        'color': 'red'
    },
    'nav': {
        'hoverColor': 'dodgerblue'
    },
    'button' : {
        'content': 'you clicked me'
    },
    'images': {
        'placeImg': ['img\\adventure.jpg', 'img\\destination.jpg', 'img\\fun-bus.jpg', 'img\\fun.jpg']
        }
}


let resizeImg = document.querySelectorAll('img');
let resetH1;
let signUpText = 'you have clicked me';


//-----------------Mouse Events----------------//

function hoverNav(object) {
    let navAnchors = document.querySelectorAll('nav a');
    navAnchors.forEach(el => el.addEventListener('mouseover', (e) => {  //1
        e.target.style.color = object['nav'].hoverColor;
        event.stopPropagation();
    }))
    navAnchors.forEach(el => el.addEventListener('mouseleave', (e) => { //2
        e.target.style.color = 'initial';
        event.stopPropagation();
    }))
}

hoverNav(info);

function headerDblClick(object){
    let logoHeading = document.querySelector('.logo-heading')
    logoHeading.addEventListener('dblclick', (e) => {                   //3
        window.clearTimeout(resetH1);
        e.target.textContent = object['h1'].text;
        e.target.style.color = object['h1'].color;
        resetH1 = setTimeout( () => {
            e.target.textContent = object['h1'].secondText;
            e.target.style.color = 'initial';
        }, 2000)
    })
}

headerDblClick(info)

function signUp(object){
    let signUpBtn = document.querySelectorAll ('.btn')
    signUpBtn.forEach(el => {
        el.addEventListener('click', (e) => {                          //4
            e.target.textContent = object['button'].content;
            e.target.textContent = el.textContent.toUpperCase();
        })
    })
}

signUp(info);


// let images = ['img\\adventure.jpg', 'img\\destination.jpg', 'img\\fun-bus.jpg', 'img\\fun.jpg']

function updateImage(object){
    let allImg = document.querySelectorAll('img');
    let i = 0;

    object['images'].placeImg.forEach((el) => {
    addEventListener('click', (e) => {
        (i < object['images'].placeImg.length) 
        ? (e.target.src = object['images'].placeImg[i], console.log(i))
        : i = 0;
        })
        
    })
    
    allImg.forEach(el => {
        el.addEventListener('click', (e) => {
            i++;
        })
    })
    
}

updateImage(info)


//------------------Keydown Events--------------//

let bodyBackground = document.querySelector('body');
bodyBackground.addEventListener('keydown', (e) => {               //6
    (e.key === '1')
    ? e.target.style.background = "grey"
    : (e.key === '2')
    ? e.target.style.background = "dodgerblue"
    : (e.key === '3')
    ? e.target.style.background = "pink"
    : e.target.style.background = "white";
})

//----------------Scrolling Events--------------//
let homeBlur = document.querySelector('.home');
let isScrolling;
let logoHeading = document.querySelector('.logo-heading')
window.addEventListener('scroll', () => {                        //7
    logoHeading.textContent = 'Fun Bus'; 
    homeBlur.style.color = 'transparent';
    homeBlur.style.textShadow = '0 0 10px rgba(0,0,0,0.5)'
    window.clearTimeout( isScrolling );

	isScrolling = setTimeout( () =>{
        homeBlur.style.color = 'initial';
        homeBlur.style.textShadow = 'initial'
    }, 90);
});

//---------------Resizing Events-------------//


resizeImg.forEach(el => {
    window.addEventListener('resize', (e) => {                  //8
        (e.target.innerWidth < 800)
        ? el.style.borderRadius = '50%'
        : el.style.borderRadius = 'initial'; 
     })
})

//------------prevent default nav a behavior----------//
let preventNav = document.querySelectorAll('.nav-link');
preventNav.forEach(el => {
    el.addEventListener('click', (e) => {                       //9
        e.preventDefault()
    })
})

