let info = {
    'h1': {
        'text': 'SUP party people',
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
    },
    'body': {
        'color1': 'grey',
        'color2': 'dodgerblue',
        'color3': 'pink',
        'color4': 'white'
    },
    'scroll': {
        'headerText': 'Fun Bus',
        'blurColor': 'transparent',
        'blurTextShadow': '0 0 10px rgba(0,0,0,0.5)'
    },
    'resize': {
        'resizeWidth': '800',
        'imgBorderRadius': '50%'
    },
    'footerAlert': {
        'alertMsg': 'this is a footer'
    }
}

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
    let resetH1;
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

function updateImage(object){
    let allImg = document.querySelectorAll('img');
    let i = 0;

    object['images'].placeImg.forEach((el) => {                    //5
    addEventListener('click', (e) => {
        (i < object['images'].placeImg.length) 
        ? (e.target.src = object['images'].placeImg[i])
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

function alertFooter(object){
    let footer = document.querySelector('.footer');               //6
    footer.addEventListener('click', (e) => {
        alert(object['footerAlert'].alertMsg)
    })
}

alertFooter(info)


//------------------Keydown Events--------------//

function bodyBackground(object){
    let background = document.querySelector('body');
    background.addEventListener('keydown', (e) => {               //7
        (e.key === '1')
        ? e.target.style.background = object['body'].color1
        : (e.key === '2')
        ? e.target.style.background = object['body'].color2
        : (e.key === '3')
        ? e.target.style.background = object['body'].color3
        : e.target.style.background = object['body'].color4;
    })
}

bodyBackground(info);

//----------------Scrolling Events--------------//

function scrollingEvent(object){
    let homeBlur = document.querySelector('.home');
    let isScrolling;
    let logoHeading = document.querySelector('.logo-heading')

    window.addEventListener('scroll', () => {                        //8
        logoHeading.textContent = object['scroll'].headerText; 
        homeBlur.style.color = object['scroll'].blurColor;
        homeBlur.style.textShadow = object['scroll'].blurTextShadow;
        window.clearTimeout( isScrolling );
    
        isScrolling = setTimeout( () =>{
            homeBlur.style.color = 'initial';
            homeBlur.style.textShadow = 'initial'
        }, 90);
    });
}

scrollingEvent(info)


//---------------Resizing Events-------------//

function resizeBorderRadius(object){
    let resizeImg = document.querySelectorAll('img');
    resizeImg.forEach(el => {
        window.addEventListener('resize', (e) => {                  //9
            (e.target.innerWidth < object['resize'].resizeWidth)
            ? el.style.borderRadius = object['resize'].imgBorderRadius
            : el.style.borderRadius = 'initial'; 
        })
    })
}

resizeBorderRadius(info)


//------------prevent default nav a behavior----------//

function preventDefaultNav() {
    let preventNav = document.querySelectorAll('.nav-link');
    preventNav.forEach(el => {
    el.addEventListener('click', (e) => {                       //10
        e.preventDefault()
        })
    })
}

preventDefaultNav()


