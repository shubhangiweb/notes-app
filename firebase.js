
var firebaseConfig = {
    apiKey: "AIzaSyCoJX5Ee5SyeVbecA54ur8oTfo2yWLjvSI",
    authDomain: "notesapp-10710.firebaseapp.com",
    projectId: "notesapp-10710",
    storageBucket: "notesapp-10710.appspot.com",
    messagingSenderId: "208598198685",
    appId: "1:208598198685:web:afe017683c18799cd66774",
    measurementId: "G-EXTYC3945X"
  };
  firebase.initializeApp(firebaseConfig);
 

const auth=firebase.auth();
function signup(){
    console.log("shubh");
  var email=document.getElementById("userEmail").value;
  var password=document.getElementById("userPassword").value;
  const promise = auth.createUserWithEmailAndPassword(email,password);
  promise.catch(e => alert(e.message));
  alert("Signed Up");
}

function signin(){
    console.log("Logging in");
  var uemail=document.getElementById("txtemail").value;
  var upassword=document.getElementById("txtpassword").value;
  const promise = auth.signInWithEmailAndPassword(uemail,upassword);
  promise.catch(e => alert(e.message));
  alert("Signed In"+ uemail);
  location.replace("file:///D:/Notes%20App/homepage.html")
}
auth.onAuthStateChanged(function(user){
if(user){
    var uemail=user.uemail;
alert("Active User " + uemail);
}
else{
    //no user signed in
    alert("No active user");
}
});