const menuButton = document.querySelector('.menuToggle button');
const toggle = document.querySelector('.menuToggle');
const sideNav = document.querySelector('.sideBar')

menuButton.addEventListener('click',() => {
    toggle.classList.toggle('close');
},setInterval(600));
menuButton.addEventListener('click',() => {
    sideNav.classList.toggle('active');
})

const preloadLeft = document.querySelector('.preloader');
const preloadRight = document.querySelector('.preloader2');
const navItem = document.querySelectorAll('.navItem .navLink');
const lan = document.querySelectorAll('.lan a');
const button = document.querySelector('.ctaButton');
const subtitle = document.querySelector('.subtitle');
const mainTitle = document.querySelector('.maintitle');
const spanMain = document.querySelector('.maintitle span');
const spanSecond = document.querySelector('.secondtitle span');
const secondTitle = document.querySelector('.secondtitle');
const bannerImg = document.querySelector('.container img');
const buttonGroup = document.querySelectorAll('.buttonGroup a');

const callTitle = (target) => { 
    target.style.transform += 'translateX(0)';
    target.style.opacity += '1';
};

const callImg = () => {
    setTimeout(() => {
        bannerImg.style.transform += 'translateY(0)';
        bannerImg.style.opacity += '1'
    },2000)
};

const callSec = () => {
    setTimeout(callTitle(secondTitle),6000);
};

const callMain = () => {
    setTimeout(callTitle(mainTitle),5000);
};

const callSub = () => {
    setTimeout(callTitle(subtitle),4000);
};

const callButton = () => {
    setTimeout(() => {
        button.style.opacity += '1';
    },3000);
};

const callLan = () => {
    const indexLan = () => {
        for (let index = 0; index < lan.length; index++) {
            setTimeout(()=>{lan[index].style.opacity += '1';},(index + 1) * 1000);
        };
    };
    setTimeout(indexLan(),2000);
};

const callNav = () => {
    const indexCall = () => {
        for (let index = 0; index < navItem.length; index++) {
        setTimeout(() => {navItem[index].style.opacity += '1';},index * 1000);
    }};
    setTimeout(indexCall(),1000);
};

const callGroup = () => {
    const indexCall = () => {
        for (let index = 0; index < buttonGroup.length; index++) {
        setTimeout(() => {buttonGroup[index].style.opacity += '1';},index * 1000);
    }};
    setTimeout(indexCall(),1000);
};

const callLoad = () => {
    preloadLeft.classList.toggle('loaded-left');
    preloadRight.classList.toggle('loaded-right');
};

window.addEventListener('load',() => {
    callLoad();
    callNav();
    callLan();
    callButton();
    callSub();
    callMain();
    callSec();
    callImg();
    callGroup();
})