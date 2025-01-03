const openAbout = document.getElementById('openAbout');
const closeAbout = document.getElementById('closeAbout');
const about  = document.getElementById('aboutUs');

openAbout.onclick = () =>{
    about.style.zIndex = '2';
};

closeAbout.onclick = () => {
    about.style.zIndex = '-2';
    
};

if(window.innerWidth < 768){
    document.querySelector('.bgImg').setAttribute('src', 'images/mobile-bg-1.jpg')
}