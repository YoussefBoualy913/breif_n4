let evenement, date,ville, prix,place,nombrplace,  c=0;
let conteur=document.getElementById("cunteur");
   
    

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
     nombrplace=art.children[4].children[0].textContent;
      c=0;
      conteur.innerHTML=1;
     
     
   
    
});
});


function changepages(index1,index2){
    const sect1=document.getElementById(index1);
    const sect2=document.getElementById(index2);

    sect1.style.display='none';
    sect2.style.display='flex';
    
    if(c==0){document.getElementById("plc").textContent="place:"+nombrplace;
    textContent=nombrplace;
    c++;}
}
// function suivant(t){
//     const   section2=document.getElementById("s2");
//     const   section1=document.getElementById("s1");
//     section1.style.display='none';
//     section2.style.display='flex';
//     const bille =section2.querySelector(".artileinfos2");
//     bille.children[2].textContent=place;

//  }
// function precident(){
//     const   section2=document.getElementById("s2");
//     const   section1=document.getElementById("s1");
//     section1.style.display='flex';
//     section2.style.display='none';
// }
let count=1;


function plus(){
    if(count<nombrplace){
        count++;
    conteur.innerHTML=count;
    }
    
}
function moin(){
    if(count>1){
      count--;
    conteur.innerHTML=count;
    }
    
}


    