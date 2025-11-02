let evenement, date,ville, prix,place,nombrplace,  c=0;
const conteur=document.getElementById("cunteur");
   
    

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
     prix=art.children[3].children[0].textContent;
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

let count=1;
function plus(){
    if(count<nombrplace){
        count++;
    conteur.textContent=count;
    }
    
}
function moin(){
    if(count>1){
      count--;
    conteur.textContent=count;
    }
    
}

const btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
     const sect2=document.getElementById("s2");
    const sect3=document.getElementById("s3");
     sect2.style.display='none';
    sect3.style.display='flex';
     titlform.textContent="participant:"+1+"/"+conteur.textContent;

}

)
function message_errors(select,message){
    document.querySelector(select).innerHTML= message;
    document.querySelector(select).style.fontSize='10px';
    document.querySelector(select).style.color='red';
}
 

let titlform=document.getElementById("titreformul");


const form = document.getElementById("formul");
let contur2=1;
const information=[];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/
    const regextele = /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/
  
    const nom = form.querySelector('#nom');
    const prenom = form.querySelector('#prenom');
     const email = form.querySelector('#email');
    const tele = form.querySelector('#tele');
    if(nom.value.trim()==''){
        nom.style.border = "1px solid red";
        message_errors("#nomerrur","nom n'est pas valide");
       return;
    }
    if(prenom.value.trim()==''){
        prenom.style.border = "1px solid red";
        message_errors("#prenomerrur","preom n'est pas valide!");
       return;
    }
    if(!regexemail.test(email.value)){
        email.style.border = "1px solid red";
        message_errors("#emailerrur","email n'est pas valide");
      return;
        
    }
    if(!regextele.test(tele.value)){
        tele.style.border = "1px solid red";
        message_errors("#teleerrur","telephone n'est pas valide");
       return;
        
    }
    
    if(contur2<=conteur.textContent ){
    const afffichier = document.querySelector('.artileinfos3');

    afffichier.innerHTML +=`
        <div  class="participant">
            <ul>
                <li style="list-style:none;">Nom : ${nom.value}</li>
                <li style="list-style:none;">Email : ${email.value}</li>
                <li style="list-style:none;">prenom : ${prenom.value}</li>
                <li style="list-style:none;">tele : ${tele.value}</li>
            </ul>
            <div align="right"><button class="supprimer">supprimer</button></div>
        </div>
    `
    information.push({
        participant:contur2,
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        telephone: tele.value,
    });
   

    contur2++;
    if(contur2<=conteur.textContent){
   titlform.textContent="participant:"+contur2+"/"+conteur.textContent;
    }
    
   }else{window.alert("vous avez terminer les participantes")}
   const supprimer=document.querySelectorAll(".supprimer");
     supprimer.forEach(suppr =>{
   suppr.addEventListener("click",()=>{

     suppr.parentElement.parentElement.remove();
     if(contur2>1){
      contur2--;
       titlform.textContent="participant:"+contur2+"/"+conteur.textContent;}
});
});

});

const btn3=document.querySelector("#btn3");
const infogen=document.getElementById("infogen");
btn3.addEventListener("click",()=>{
     const sect3=document.getElementById("s3");
    const sect4=document.getElementById("s4");
    if(contur2>conteur.textContent){
        sect3.style.display='none';
       sect4.style.display='flex';
    
       
      infogen.innerHTML=`
      <h3>${evenement}
      </h3>
      <p>${date}</p>
      <p>${ville}</p>
      <p>Nombre de billets:${conteur.textContent}</p>
      <p>
      </p>
      `
       const totle=document.getElementById("ptotale");

       totle.textContent="Total:"+conteur.textContent*prix+"DH";
       console.log(conteur.textContent*prix);
       }
      
    

    });
     


    