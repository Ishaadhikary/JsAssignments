// const slideImage = Array.from(imgCarousel.children);
// console.log(slideImage)
// // const slideWidth = slideImage[0].getBoundingClientRect().width
// const WIDTH = parseInt(`${500}px`)
// const DotNav = document.querySelector('.dot-nav')
// const dot = Array.from(DotNav.children);
// console.log(dot);
// const setSlidePosition = (imgCarousel, index)=>{
//     imgCarousel.style.transform = `translateX(${index * 100}%)`;
// }

// slideImage.forEach(setSlidePosition);
let count = 1;
console.log(imgCarousel);
const imgCarousel = document.querySelector('#carousel-image-wrapper');
const slideImage = Array.from(imgCarousel.children);
console.log(slideImage)
// const slideWidth = slideImage[0].getBoundingClientRect().width
const WIDTH = parseInt(`${500}px`)
const DotNav = document.querySelector('.dot-nav')
const dot = Array.from(DotNav.children);
console.log(dot);
const setSlidePosition = (slideImage, index)=>{
    slideImage.style.left = WIDTH * index + 'px';
}

slideImage.forEach(setSlidePosition);
// const initialLeftPositions = Array.from(imgCarousel).map((element) => element.style.left);
// imgCarousel.forEach((element, index) => {
//     element.style.left = initialLeftPositions[index];
//   });
function leftClick(){
    if (count >0 && count <=imgCarousel.length) { 
        imgCarousel[count].style.left = `${count * -500}px`;
        console.log(imgCarousel[count],count,'hehe');
        count--;  
      }   
    else if(count === 0)
    {
        count = imgCarousel.length-1;
        imgCarousel[count].style.left = `${count * +500}px`;
        console.log(imgCarousel[count],count,'nono');
        count--;

    }
    console.log(count,imgCarousel.length)
    let elementL = document.getElementById('testText'); 
        elementL.innerText = count;
}

function rightClick(){
    if(count<imgCarousel.length && count >=1){
    imgCarousel[count].style.left = `${count * +500}px`;
    console.log(imgCarousel[count],count);
    count ++
    }
    else{
        count = 0;
    }
    let elementR = document.getElementById('testText');
    elementR.innerText = count;
    console.log()
}

function leftClick(){
    if(curSlide ===0){
    imgCarousel[count].style.left = `${count * +500}px`;
    console.log(imgCarousel[count],count);
    count ++
    }
    else{
        count = 0;
    }
    let elementR = document.getElementById('testText');
    elementR.innerText = count;
    console.log()
}

 // let currentImg = imgCarousel.querySelector('img')
    // console.log(currentImg);
    // let nextImg = currentImg.nextElementSibling;
    // console.log(currentImg.nextElementSibling);
    // const amountToMove = -500;
    // nextImg.style.transform = `translateX(${amountToMove}px)`; 
    // currentImg.classList.add('slideImage[1]');
    // console.log(currentImg.classList.add('slideImage'))


