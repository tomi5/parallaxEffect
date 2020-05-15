let sky = document.querySelector('.layer--sky')
let mountain = document.querySelector('.layer--mountain');
let motorbike = document.querySelector('.layer--motorbike');
let road = document.querySelector('.layer--road');
let text = document.querySelector('.main-header');


const initParallax = () => {
    if (window.innerWidth > 1000) {

        window.addEventListener('scroll', () => {
            var value = window.scrollY;

            sky.style.top = -value * .3 + 'px';
            sky.style.left = -value * .12 + 'px';
            mountain.style.botoom = value * 3 + 'px';
            motorbike.style.left = 50 + value * -.015 + '%';
            motorbike.style.bottom = -value * .002 + '%';
            motorbike.style.transform = `translateX(${50 + value /1000}%) scale(${1 - value /1000})`;

            road.style.bottom = -value * .35 + 'px';
            text.style.top = value * .3 + 'px';
        });
    }
};
initParallax()
window.addEventListener('resize', initParallax);