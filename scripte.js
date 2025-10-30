
const  article = document.querySelectorAll('.artileinfo');
article.forEach(art => {
  art.addEventListener('click',()=>{

    article.forEach(el => {
        el.classList.remove("bordercolor");
    });
    

     art.classList.add("bordercolor");
    const evenement =art.children[0].textContent;
    const date =art.children[1].textContent;
    const ville =art.children[2].textContent;
    const prix=art.children[3].textContent;
    const place =art.children[4].textContent;
   
    
});
});


function suivant(t){
    let    section2=document.getElementById("s2");
    let    section1=document.getElementById("s1");
    section1.style.display='none';
    section2.style.display='flex';

    
 }



    