console.log('welcome to NotesApp');
let addbtn =document.getElementById('addbtn'); 
addbtn.addEventListener("click",function(e){
    let addtxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    
//Add Date..
let now = new Date();
let dateTime = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;
let tempObj = { text: addtxt.value, time: dateTime };

notesObj.push(tempObj);
localStorage.setItem('notes',JSON.stringify(notesObj));
	//..
    addtxt.value="";
    console.log(notesObj);
    shownotes();
    location.replace("homepage.html");
    });

    function shownotes(){
        let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
}