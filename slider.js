const indicator = document.querySelector('.indicator');
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slider-col');
const arrows = document.querySelectorAll('.arrow');

for (let i = 0; i < slides.length; i++) {
    indicator.insertAdjacentHTML('beforeend', `<span class="${i === 0 ? 'btn active' : 'btn'}"></span>`);
}

const btn = document.querySelectorAll('.btn');

let count = 0;

const changeSlide = () => {
    slider.style.transform = `translateX(${count * -800}px)`;
}

const changeDot = () => {
    btn.forEach((item, i) => {
        if (i === count) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}

const checkBtn = () => {
    if (count === 0) {
        arrows[0].classList.add('arrow_disabled');
        arrows[1].classList.remove('arrow_disabled');
    } else if (count === 3) {
        arrows[1].classList.add('arrow_disabled');
        arrows[0].classList.remove('arrow_disabled');
    } else {
        arrows[1].classList.remove('arrow_disabled');
        arrows[0].classList.remove('arrow_disabled');
    }
}

document.body.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.btn')) {
        btn.forEach((item, i) => {
            if (item === target) {
                item.classList.add('active');
                count = i;
                changeSlide();
                checkBtn();
            } else {
                item.classList.remove('active');
            }
        })
    }

    if (target.closest('.arrow')) {

        if (target.closest('.arrow-prev')) {
            count--;
        } else if (target.closest('.arrow-next')) {
            count++
        }


        checkBtn();
        changeDot();
        changeSlide();
    }
})