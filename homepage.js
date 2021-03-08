shownotes();
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
    <div class="notecard" my-2 mx-2 style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Note ${index+1}</h5>
<p class="card-text">${element}</p>
<button href="#" class="btn btn-primary">Delete Note</a>
</div>
</div>`;
});
let notesget=document.getElementById("notes");
if (notesObj.length!=0){
    notesget.innerHTML=html;
}
else{
    notesget.innerHTML=`Nothing to show!`;
}
}