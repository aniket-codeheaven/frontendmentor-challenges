const toggleBtn = document.querySelector('#togglebtn');
const nav = document.querySelector('#main-nav');

toggleBtn.addEventListener("click", ()=>{
    if(nav.getAttribute('aria-expanded')===null){
        nav.setAttribute('aria-expanded', 'true');
        document.querySelector('#svg-close').style.display = 'inline-block';
        document.querySelector('#svg-open').style.display = 'none';
        document.querySelector('#nav-overlay').style.opacity = '0.5';
        document.querySelector('body').style.overflow = 'hidden';
    } else if(nav.getAttribute('aria-expanded')==='true'){
        nav.setAttribute('aria-expanded', 'false');
        document.querySelector('#svg-close').style.display = 'none';
        document.querySelector('#svg-open').style.display = 'inline-block';
        document.querySelector('#nav-overlay').style.opacity = '0';
        document.querySelector('body').style.overflow = 'visible';
    } else{
        nav.setAttribute('aria-expanded', 'true');
        document.querySelector('#svg-close').style.display = 'inline-block';
        document.querySelector('#svg-open').style.display = 'none';
        document.querySelector('#nav-overlay').style.opacity = '0.5';
        document.querySelector('body').style.overflow = 'hidden';

    }
})