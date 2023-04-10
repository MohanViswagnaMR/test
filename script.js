console.log("Mohan Viswagna MR");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6oYGzHrDmQ_RNYCY0ycvTLqboT6GRHNs",
  authDomain: "test-6d3e4.firebaseapp.com",
  databaseURL: "https://test-6d3e4-default-rtdb.firebaseio.com",
  projectId: "test-6d3e4",
  storageBucket: "test-6d3e4.appspot.com",
  messagingSenderId: "147282171713",
  appId: "1:147282171713:web:f288a2a8c38af1d01bb3c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

//Enter
var Enter_D = document.querySelector("#Enter_D");
var Enter_ID = document.querySelector("#Enter_ID");
var Enter_Name = document.querySelector("#Enter_Name");
var Enter_age = document.querySelector("#Enter_age");
//function button
var insert = document.querySelector("#insert");
var update = document.querySelector("#update");
var remove = document.querySelector("#remove");
var find_button = document.querySelector("#find_button");
//display or find
var Find_D = document.querySelector("#Find_D");
var Find = document.querySelector("#Find");
var find_name = document.querySelector("#find_name");
var find_age = document.querySelector("#find_age");

//function
function InsertData(){
    set(ref(db, "People/" + EnterID.value),{
        Name: EnterName.value,
        ID: EnterID.value,
        Age: EnterAge.value
    })
    .then(()=>{
        alert("Data added successfuly")
    })
    .catch((error)=>{
        alert(error)
    })
}
insert.addEventListener('click', InsertData);
function FindData(){

}
find_button.addEventListener('click', FindData);
function UpdateData(){
    
}
update.addEventListener('click', UpdateData);
function RemoveData(){
    
}
remove.addEventListener('click', RemoveData);

