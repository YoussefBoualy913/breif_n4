let evenement, date,ville, prix,place ;
   
    

const  article = document.querySelectorAll('.artileinfo');
article.forEach(art => {
  art.addEventListener('click',()=>{

    article.forEach(el => {
        el.classList.remove("bordercolor");
    });
    

     art.classList.add("bordercolor");
     evenement =art.children[0].textContent;
     date =art.children[1].textContent;
     ville =art.children[2].textContent;
     prix=art.children[3].textContent;
     place =art.children[4].textContent; 
   
    
});
});


function suivant(t){
    const   section2=document.getElementById("s2");
    const   section1=document.getElementById("s1");
    section1.style.display='none';
    section2.style.display='flex';
    const bille =section2.querySelector(".artileinfos2");
    bille.children[2].textContent=place;

 }
function precident(){
    const   section2=document.getElementById("s2");
    const   section1=document.getElementById("s1");
    section1.style.display='flex';
    section2.style.display='none';
}

let conteur=document.getElementById("cunteur")
let count=1;
function plus(){
    count++;
    conteur.innerHTML=count;
}
function moin(){
    if(count>1){
      count--;
    conteur.innerHTML=count;
    }
    
}


    