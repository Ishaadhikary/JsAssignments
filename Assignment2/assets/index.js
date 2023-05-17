const imgCarousel = document.querySelectorAll('#carousel-image-wrapper img');
const dotContainer = document.querySelector('.dot-nav');
const eachDot = Array.from(dotContainer.children);


let curSlide = 0
let maxSlide = imgCarousel.length -1;


function rightClick(){
    console.log('hello')
    if(curSlide ===maxSlide){
        curSlide = 0;
        
    console.log(curSlide,'Inside  if')
    }
    
    else{
        curSlide++;
        console.log(curSlide,'Inside E')
    }
    imgCarousel.forEach((imgSlide,index)=>{
        imgSlide.style.transform = `translateX(${500 * (index - curSlide)}px)`;
        eachDot[curSlide].style.background='blue';
        eachDot[curSlide-1].style.background='pink';
        
    })
    

    }
   

function leftClick(){
    if(curSlide ===0){
        curSlide = maxSlide
        }
        else{
            curSlide--;
        }
    imgCarousel.forEach((imgSlide,index)=>{
            imgSlide.style.transform = `translateX(${500 * (index - curSlide)}px)`;
        })
    
}

setInterval(function() {
    rightClick()
  }, 5000);

