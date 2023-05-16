let count = 0;
const imgCarousel = document.querySelectorAll('#carousel-image-wrapper img');
console.log(imgCarousel);

function leftClick(){

    if (count >=1 && count < imgCarousel.length) { 
        imgCarousel[count].style.left = `${count * -500}px`;
        console.log(imgCarousel[count],count);
        count--;
        
      }   
    else if(count ===0)
    {
        count = imgCarousel.length -1;
        imgCarousel[count].style.left = `${count * +500}px`;
    }
    let elementL = document.getElementById('testText'); 

    elementL.innerText = count;
}

function rightClick(){
    if(count<5){
    count ++
    }
    else{
        count = 0;
    }
    let elementR = document.getElementById('testText');
    elementR.innerText = count;
    console.log()
}

