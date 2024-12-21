// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

const spans=document.querySelectorAll(".circle");

spans.forEach((item)=>{

 if(item.classList.contains("blue")){
  item.classList.remove("blue");
  item.classList.add("purple");

 }else if (item.classList.contains("purple")){

    item.classList.remove("purple");
    item.classList.add("blue"); 
 }
});

