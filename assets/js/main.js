/*======= Show Menu =======*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu Show */
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
});

/* Menu Hidden */
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

/*======= Search =======*/
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search-btn'),
    searchClose = document.getElementById('search-close');

/* Search Show */
searchBtn.addEventListener('click', () => {
    search.classList.add('show-search')
});

/* Search Hidden */
searchClose.addEventListener('click', () => {
    search.classList.remove('show-search')
})

/*======= Login =======*/
const login = document.getElementById('login'),
    loginBtn = document.getElementById('login-btn'),
    loginClose = document.getElementById('login-close');

/* Login Show */
loginBtn.addEventListener('click', () => {
    login.classList.add('show-login')
});

/* Login Hidden */
loginClose.addEventListener('click', () => {
    login.classList.remove('show-login')
})

/*======= outfit Texas =======*/
let circle = document.querySelector('.color2');

circle.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('span')) {
        circle.querySelector('.active').classList.remove('active'); 
        target.classList.add('active');
        document.querySelector(".imgBx2 .active").classList.remove("active");
        document.querySelector(`.imgBx2 .${target.id}`).classList.add("active");
    }
});

/*======= outfit Lappland =======*/
let circle2 = document.querySelector('.color3');

circle2.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);

    if (target.classList.contains('span2')) {
        circle2.querySelector('.active').classList.remove('active'); 
        target.classList.add('active');
        document.querySelector(".imgBx3 .active").classList.remove("active");
        document.querySelector(`.imgBx3 .${target.id}`).classList.add("active");
    }
});