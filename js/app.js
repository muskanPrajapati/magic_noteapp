console.log("this is an note taking");
showText();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(e){

    let addText = document.getElementById("addText");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }

    let myObj = {
        title: addTitle.value,
        text: addText.value
    }

    noteObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addText.value = "";
    addTitle.value = "";
    showText();
}
)

function showText() {
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes)
    }
    let html = "";
    noteObj.forEach(function(element, index) {
        html+= `
            <div class="card">
                <h3>${element.title}</h3>
                <p class = "card-text">${element.text}</p>
                <button id = "${index}"onClick="deleteNode(this.id)" class = "btn"> REMOVE</button>
            </div>`;
    });

    let noteEle = document.getElementById("notes");
    if(noteObj.length != 0){
        noteEle.innerHTML = html;
    }
    else{
        noteEle.innerHTML = `Nothing to show!! Use "ADD NOTE" section to add notes`
    }
     
}

//to delete a node 
 function deleteNode(index){
    let notesArray = JSON.parse(localStorage.getItem("notes"));
    notesArray.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArray))
    showText();
 }


