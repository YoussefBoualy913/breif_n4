
const  article = document.querySelectorAll('.artileinfo');
article.forEach(art => {
  art.addEventListener('click',()=>{

    article.forEach(el => {
        el.classList.remove("bordercolor");
    });
     art.addEventListener('click',()=>{

     art.classList.add("bordercolor");
    });
});
});


function suivant(t){
    let    section2=document.getElementById("s2");
    let    section1=document.getElementById("s1");
    section1.style.display='none';
    section2.style.display='flex';
  
      }


    