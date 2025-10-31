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

function message_errors(select,message){
    document.querySelector(select).innerHTML= message;
}
 
const form = document.getElementById("formul")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/
    const regextele = /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/
  
    const nom = form.querySelector('#nom');
    console.log(form.innerHTML);
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
        message_errors("#prenomerrur","nom n'est pas valide!");
        return;
    }
    if(!regexemail.test(email.value)){
        email.style.border = "1px solid red";
        message_errors("#emailerrur","email n'est pas valide");
        return;
        
    }
    if(!regextele.test(email.value)){
        email.style.border = "1px solid red";
        message_errors("#teleerrur","email n'est pas valide");
        return;
        
    }

    const afffichier = document.querySelector('.affichier');

    afffichier.innerHTML +=`
        <div>
            <ul>
                <li>Nom : ${nom.value}</li>
                <li>Email : ${email.value}</li>
                <li>prenom : ${prenom.value}</li>
                <li>tele : ${tele.value}</li>
            </ul>
        </div>
    `

})


    