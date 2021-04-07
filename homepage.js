
shownotes();
//Add notes
function shownotes(){
    
    let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
let html="";
notesObj.forEach(function(element,index){
    html +=`
    <div class="notecard" my-2 mx-2 style="width: 18rem;" style="position:relative;  display:flex;">
<div class="card-body" style=" overflow:unset;  position:relative; background-color:blanchedalmond ; text-align: center; margin-bottom:5%; border-radius: 7px; box-shadow: 5px 9px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);">
<div class="header" style="float:right; margin-top:2px; margin-right:2px">
<i class="fas fa-times" id="${index}" onclick="deleteNote(this.id)" style="cursor: pointer;"></i>
   </div>
   <h4 style="margin:auto; color: brown;">${element.time}</h4>
   <div style=" align-items: center; justify-content: center;">
<h5 class="card-title" style="font-family: 'Akaya Kanadaka', cursive; font-weight:bolder; text-align: center; margin-top:0px; padding:0px; font-size: 20px; color:rgb(34, 32, 32)";>Note ${index+1}</h5>
<p id="text" contentEditable="true" class="card-text" style=" font-family: 'Montserrat', sans-serif; font-size: 17px; text-align: center;">${element.text}</p>
<button id="${index}" onclick="editNote(this.id)"class="btn btn-primary" style=" font-family: 'Nunito', sans-serif;
background-color:rgb(48, 47, 47);
border-radius: 5px;
border: 2px solid #5e9ec4;
display:inline-block;
box-shadow: 0 9px 16px 0 rgba(236, 235, 235, 0.459), 0 6px 20px 0 rgba(0,0,0,0.19);
color: #FFFFFF;
font-size: 18px;
padding: 5px;
width: 110px;
transition: all 0.5s;
cursor: pointer;
text-align: center;
opacity:1;
margin-bottom:0%;
background-image: linear-gradient(bottom, rgb(41, 42, 43) 0%, rgb(97, 187, 203) 100%);
background-image: -o-linear-gradient(bottom, rgb(30, 31, 32) 0%, rgb(97, 191, 203) 100%);
background-image: -moz-linear-gradient(bottom, rgb(40, 41, 43) 0%, rgb(97, 178, 203) 100%);
background-image: -webkit-linear-gradient(bottom, rgb(64, 65, 66) 0%, rgb(97, 169, 203) 100%);
background-image: -ms-linear-gradient(bottom, rgb(24, 25, 26) 0%, rgb(97, 178, 203) 100%);">Edit Note</a>
</div>
</div>
</div>`;
});
let notesget=document.getElementById("notes");
if (notesObj.length!=0){
    notesget.insertAdjacentHTML("afterend", html);
}
else{
    notesget.innerHTML=`<h3 style="text-align: center; font-family: 'Akaya Kanadaka', cursive; color:black;">You Have Not Created Anything Yet !!</h3>`;
}

}
// delete a note!!
function deleteNote(index){
    console.log("deleted Note",index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
    location.reload();
}
// to edit notes
function editNote(index,element){
    console.log("edited Note",index);
    alert("Notes "+index+" Edited");
}