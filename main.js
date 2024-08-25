// ? Get slider item in array
var SliderImage=Array.from(document.querySelectorAll(".sliderContainer img"));

// ? vumber of images
var numImages=SliderImage.length;

// ? images to start from it
var currentImages=1;

// ? get hrml element
var slide_number=document.getElementById("slide_number");
var next_but=document.getElementById("next");
var prev_but=document.getElementById("prev");

// ?Handel clicks
next_but.onclick=nextSlide;
prev_but.onclick=prevSlide;


// ? handel Click Buttons
function nextSlide() {
    if(currentImages<SliderImage.length){
        currentImages++;
        checker();
    }    
}
function prevSlide() {
    if(currentImages>1){
        currentImages--;
        checker();
    }
}

// ? create the ul of numbers of images
var ul=document.createElement("ul");

// ? give id
ul.setAttribute("id","pagination-ul");

// ? add li to ul
for (let i = 1; i <= numImages; i++) {
    // ? create li 
    var li=document.createElement("li");
    
    // ? set attributs data-index to it 
    li.setAttribute("data-index",i);
    
    // ? text inside li
    li.appendChild(document.createTextNode(i));
    
    // ? add li to ul
    ul.appendChild(li);   
    
}

// ? Add to main indecators
var indecators = document.getElementById("indecators");
indecators.appendChild(ul);

// ? Get li item in array
var array_Li=Array.from(document.querySelectorAll("li"));

// ? if clicked on number
for (let i = 0; i < array_Li.length; i++) {
    array_Li[i].onclick=function(){
        currentImages=Number(this.getAttribute(`data-index`));
        checker();
    }    
}

// ? Create the checker function
function checker(){
    // ? tragger the function remove the active
    removeAllActive();
    // ? edit slide_number
    slide_number.textContent=`Slide # ${currentImages} of ${numImages}`;
    // ? set active class on current slide
    SliderImage[currentImages-1].classList.add("active");
    // ? set active class on li element
    ul.children[currentImages-1].classList.add("active");
    // ? check if current slide is the first or last
    if(currentImages===1)
        prev_but.classList.add("disabled");
    else
        prev_but.classList.remove("disabled");

    if (currentImages===SliderImage.length)
        next_but.classList.add("disabled");
    else
        next_but.classList.remove("disabled");
}


// ? tragger function
checker();


// ? remove all active classes from images and li

function removeAllActive() {
  // ? remove active from every element
  SliderImage.forEach((ele) => {
    ele.classList.remove("active");
  });
    array_Li.forEach((ele) => {
    ele.classList.remove("active");
  });
}