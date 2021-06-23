function wordsInWrapper(elem) {
    let elText = elem.innerText,
        str = '',
        elList = elText.split(' ');

    elem.innerText = '';
    elList.forEach(el => {
        str = str + `<span class="word-wrapper"><span class="word-wrapper__inner">${el + '&nbsp;'}</span></span>`;
    });
    elem.innerHTML = str;

}

function showElementsWhenScroll(selectors, viewPosition) {
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el=>{
            let elemPosition = window.pageYOffset + el.getBoundingClientRect().top;

            if (viewPosition > elemPosition) {
                el.classList.add('is-show');
            }
        });
    });
}

function showImgWhenScroll(unvis, viewPosition) {
    unvis.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            let elemPosition = window.pageYOffset + el.getBoundingClientRect().top;

            if (viewPosition > elemPosition) {
                el.classList.add('is-show');
            }
        });
    });
}

let selectors = [
        '.first-block h1',
        '.first-block__element h3',
        '.first-block__element p',
        '.middle-block__text h3',
        '.middle-block__text p',
        'footer h2'
    ],
    unvis = [
        '.first-block__element img',
        '.middle-block__button',
        '.middle-block__broshure'
    ];

selectors.forEach(selector=>{
    let elements = document.querySelectorAll(selector);
    elements.forEach(el=>{
        wordsInWrapper(el);
    });
});

document.addEventListener('scroll', ()=>{
    let viewPos = window.pageYOffset + document.documentElement.clientHeight;
    showElementsWhenScroll(selectors, viewPos);
    showImgWhenScroll(unvis, viewPos);
});
document.addEventListener('DOMContentLoaded', ()=>{
    let viewPos = window.pageYOffset + document.documentElement.clientHeight;
    showElementsWhenScroll(selectors, viewPos);
    showImgWhenScroll(unvis, viewPos);
});



