var content = document.getElementById("content");
var inputBar = document.getElementById("input");
var update = document.getElementById("update");
// update.style.display = "none";
// var Id = 0;

function addItem() {
    if(inputBar.value==" "){
        alert("Please enter a value : ")
    }
    else{
        content.innerHTML+=  `
        <br>
        <li><span>${inputBar.value}</span>
           <button onclick="deleteOne()">Delete</button>
           <button onclick="editOne()">Edit</button>
           <button onclick="done()">Done</button>
        </li>
        
        `
        inputBar.value = "";
        inputBar.focus();
    }
   
}

function deleteAll(){
    content.innerHTML = "";
}

function deleteOne(){
    event.target.parentNode.remove()
}

function editOne(e){
    inputBar.value = e;
    inputBar.focus();
}
function editOne(){
    a = prompt("Enter a value : ")
    event.target.parentNode.children[0].innerHTML = a;
}

function done() {
    // console.log(event.target.parentNode.children[0]);
    var doneTask = event.target.parentNode.children[0];
    if(doneTask.style.textDecoration === "line-through"){
        doneTask.style.textDecoration = "none";
        // content.children[2].children[3].innerHTML = "Done";
    }
    else{
    doneTask.style.textDecoration = "line-through";
    // content.children[2].children[3].innerHTML = "Not Done";
    }
    // console.log(content.children[2].children[3].innerHTML);
}











// function eiditfromInput(){
//     // event.target.parentNode.children[0].value
//     event.target.parentNode.parentNode.children[1].children[0].children[1].children[0].innerHTML+= event.target.parentNode.children[0].value

// }





// function addItem() {
//     Id++;

//     // Creating li Inside ul.
//     var li = document.createElement("li");
//     content.appendChild(li);

//     // Creating Done Button inside li.
//     var doneButton = document.createElement("button");
//     doneButton.setAttribute("onClick", "done()");
//     // Creating Image inside done button.
//     var doneButtonImage = document.createElement("img");
//     doneButtonImage.setAttribute("src", "./icons/check.png");
//     doneButtonImage.style.height = "30px";
//     doneButtonImage.style.width = "30px";
//     // Putting doneButtonImage inside doneButton.
//     doneButton.appendChild(doneButtonImage);
//     // Putting donebutton inside li.
//     li.appendChild(doneButton);
    
//     // Creating text area inside li.
//     var paragraph = document.createElement("p");
//     paragraph.innerText = inputBar.value;
//     paragraph.setAttribute("id",Id);
//     // Putting paragraph inside li.
//     li.appendChild(paragraph);
    
//     // Creating Edit Button inside li.
//     var editButton = document.createElement("button");
//     editButton.setAttribute("onClick", "edit()");
//     // Creating Image Inside editButton.
//     var editButtonImage = document.createElement("img");
//     editButtonImage.setAttribute("src", "./icons/edit.png" );
//     editButtonImage.style.height = "30px";
//     editButtonImage.style.width = "30px";
//     // Putting editButtonImage inside editButton.
//     editButton.appendChild(editButtonImage);
//     // Putting editButton inside li.
//     li.appendChild(editButton);
    
//     // Creating delete button inside li.
//     var deleteButton = document.createElement("button");
//     deleteButton.setAttribute("onClick", "remove()");
//     // Creatining image inside deleteButton.
//     var deleteButtonImage = document.createElement("img");
//     deleteButtonImage.setAttribute("src", "./icons/bin.png");
//     deleteButtonImage.style.height = "30px";
//     deleteButtonImage.style.width = "30px";
//     // Putting editButtonImage inside editButton.
//     deleteButton.appendChild(deleteButtonImage);    
//     // Putting editButton inside li.
//     li.appendChild(deleteButton);

//     var br = document.createElement("br");
//     content.appendChild(br);

//     inputBar.value = "";
// }

// function edit(){
//     update.style.display = "inline-block";
//     inputBar.value = document.getElementById(Id).innerText;
// }
// function updating(){
//     document.getElementById(Id).innerText = inputBar.value;
//     inputBar.value = "";
// }































































































































































































































































































































































































































































































// var content = document.getElementById("content");
// var inputBar = document.getElementById("input");
// var id = 0;
// function addItem(){
//     id++;
//     var br = document.createElement("br");
//     content.append(br);
//     var li = document.createElement("li");
//     li.style.display = "flex";
//     li.style.width = "45%";
//     li.style.height = "75px";
//     li.style.justifyContent = "space-between";
//     li.style.backgroundColor = "black";
//     li.style.alignItems = "center";
//     content.appendChild(li);
//     var paragraph = document.createElement("p");
//     li.appendChild(paragraph);
//     paragraph.innerText = inputBar.value;
//     paragraph.setAttribute("id",id);
//     paragraph.style.height = "30px";
//     paragraph.style.backgroundColor = "blue";
//     // paragraph.style.width = "40px";
//     // paragraph.style.position = "relative";
//     // paragraph.style.bottom = "16px";
//     paragraph.style.color = "white";
//     paragraph.style.marginLeft = "3px";
//     var editButton = document.createElement("button");
//     editButton.innerText = "Edit";
//     editButton.style.width = "40px";
//     editButton.style.height = "20px";
//     editButton.setAttribute("onClick", "editButton()");
//     li.appendChild(editButton);
//     inputBar.value = "";
// }
// function editButton(){
//     inputBar.value = document.getElementById(id).innerText;
//     document.getElementById(id).innerText = inputBar.value;
//     // inputBar.value = "";
// }