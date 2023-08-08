"use strict";
/*select*/
let select_btn = document.querySelectorAll('.order__select-btn')[0];
let select_list = document.querySelectorAll('.order__wrapp-list')[0];
let select_list_item = document.querySelectorAll('.order__wrapp-list ul li');
let choise_val = document.querySelectorAll('.order__select-btn span')[0];
let item_val;
select_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    select_list.classList.toggle("order__list-show");
    select_btn.classList.toggle('order__active-select');
});
select_list_item.forEach(function(item){
    item.addEventListener("click",()=>{    
        item_val = item.textContent;
        choise_val.textContent = item_val;    
        select_btn.classList.toggle('order__active-select');
        select_list.classList.remove("order__list-show");
    });    
});
/*range*/
let range_input = document.querySelectorAll(".range__input")[0];
let range_val = document.querySelectorAll(".order__range-val")[0];
range_input.addEventListener("input",()=>{
          range_val.textContent=range_input.value+"%";
});

/*mob menu*/
let mob_menu = document.querySelectorAll(".mob-win")[0];
let btn_menu = document.querySelectorAll(".header__btn-menu")[0];
let close_menu = document.querySelectorAll(".mob-win__close .close")[0];

btn_menu.addEventListener("click",()=>{
          mob_menu.style.display="block";  
          
          setTimeout(()=>{
               mob_menu.classList.add('show-menu');
              
          },200);          
});
close_menu.addEventListener("click",()=>{
          mob_menu.classList.remove('show-menu');
          
    
          setTimeout(()=>{
                mob_menu.style.display="none";  
              
          },700); 
});