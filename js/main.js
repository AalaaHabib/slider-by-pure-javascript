var imgList           = document.getElementsByClassName("item-img"),
    imgArray          = [],
    lightBoxContainer = document.getElementById('lightBox-container'),
    lightBox          = document.getElementById("lightBox"),
    currentImgIndex   = 0,
    nextBtn           = document.getElementById("next"),
    prevBtn           = document.getElementById("prev"),
    closeBtn          = document.getElementById("close");

for(var i=0;i<imgList.length;i++) 
{
  imgArray.push(imgList[i]);  
    imgList[i].addEventListener('click',function(e){
       lightBoxContainer.style.display="flex";
       currentImgIndex=imgArray.indexOf(e.target);
       var imgSrc=e.target.src;
       lightBox.style.backgroundImage="url("+imgSrc+")";
    })
}
//mouse
function nextSlide(){
    currentImgIndex++;
    if(currentImgIndex !=imgArray.length)
    {
        lightBox.style.backgroundImage="url("+imgArray[currentImgIndex].src+")";
    } 
   else{
        currentImgIndex=0;
   }
}
function prevSlide(){
    currentImgIndex--;
    if(currentImgIndex <0)
    {
        currentImgIndex=imgArray.length -1;
    } 
   else{
        
        lightBox.style.backgroundImage="url("+imgArray[currentImgIndex].src+")";
   }
}
function closeSlide(){
    lightBoxContainer.style.display="none";
}
nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);
closeBtn.addEventListener("click",closeSlide);

//keyboard
document.body.addEventListener("keydown",function(e){
    if(e.keyCode==39){
        nextSlide();
    }
    else if(e.keyCode==37){
        prevSlide();
    }
    else if(e.keyCode==27) {
        closeSlide();
    }
})




