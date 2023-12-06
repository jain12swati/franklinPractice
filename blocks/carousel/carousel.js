import { createOptimizedPicture } from '../../scripts/aem.js';

function toggleSlide(event){
    let targetSlideIndex;
    let carouselButton = document.querySelectorAll('.carousel.block  ol li');
    let carouselList= document.querySelectorAll('.carousel.block .carousel-list li');
    for (var i = 0; i < carouselButton.length; i++) {
        carouselButton[i].classList.remove('active');
        carouselButton[i].classList.add('in-active');
    }
    event.target.classList.add('active');
    targetSlideIndex = event.target.classList[0].split('-')[1]*1;
    event.target.classList.remove('in-active');
    for (var i = 0; i < carouselList.length; i++) {
        carouselList[i].classList.remove('active');
        carouselList[i].classList.add('in-active');
    }
    carouselList[targetSlideIndex].classList.remove('in-active');
    carouselList[targetSlideIndex].classList.add('active');
}

function buildIndicator(){
    const ol = document.createElement('ol');
    document.querySelector('.carousel.block').append(ol);
    for(let i=0;i<3;i++){
        const li = document.createElement('li');
        li.className=`indicator-${i}`;
        li.classList.add("indicator");
        if(i==0){li.classList.add('active')}
        else{li.classList.add('in-active')}
        document.querySelector('.carousel.block ol').append(li)
    }
    let carouselButton = document.querySelectorAll('.carousel.block  ol li');
   
    for (var i = 0; i < carouselButton.length; i++) {
        carouselButton[i].addEventListener('click', (event)=>
            toggleSlide(event))
        
    }
}

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  ul.className="carousel-list";
  [...block.children].forEach((row,i) => {
    const li = document.createElement('li');
    li.className=`slide-${i}`;
    if(i==0){li.classList.add('active')}
    else{li.classList.add('in-active')}
    console.log(li.classList)
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'carousel-image';
      else div.className = 'carousel-body';
    });
    ul.append(li);
  });
  //ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
  buildIndicator();
}