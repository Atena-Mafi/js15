/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/
const circles=document.querySelectorAll(".pone  article");
const rectangle=document.querySelectorAll(".ptwo article")

circles[0].style.backgroundColor="rgba(31, 127, 102, 1)";
circles[1].style.backgroundColor="rgba(255, 200, 0, 1)";
circles[2].style.backgroundColor="rgba(255, 123, 0, 1)";
circles[3].style.backgroundColor="rgba(216, 1, 1, 1)";
circles[4].style.backgroundColor="rgba(223, 4, 70, 1)";
circles[5].style.backgroundColor="rgba(127, 31, 85, 1) ";
circles[6].style.backgroundColor="rgba(93, 18, 199, 1)";

circles.forEach((circle)=>{
circle.addEventListener("click",()=>{
const color=window.getComputedStyle(circle).backgroundColor;
rectangle.forEach((rec,index)=>{
    const alpha=Math.max(1-index*0.2,0);
rec.style.backgroundColor=`${color.slice(0,-1)},${alpha})`;

});
});
});