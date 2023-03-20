var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


// function createListElement(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     var deleteBtn = document.createElement("button");
//     deleteBtn.appendChild(document.createTextNode("Delete"));
//     deleteBtn.addEventListener("click", deleteListItem);
//     li.appendChild(deleteBtn);
//     ul.appendChild(li);
//     input.value= "";
//     // li.addEventListener("click", toggleDone); // add click event listener
//     }
//     var listItems = document.querySelectorAll("li");
//     listItems.forEach(item => {
//       item.style.paddingRight = "20px";
//     });


// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
  
//     var deleteBtn = document.createElement("button");
//     deleteBtn.appendChild(document.createTextNode("Delete"));
//     deleteBtn.addEventListener("click", function() {
//       li.remove();
//     });
//     li.appendChild(deleteBtn);
  
//     ul.appendChild(li);
//     input.value = "";
  
//     li.addEventListener("click", function() {
//       li.classList.toggle("done");
//     });
//   }

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.addEventListener("click", function() {
      li.classList.toggle("deleted");
    });
    li.appendChild(deleteBtn);
    
    ul.appendChild(li);
    input.value = "";
    
    li.addEventListener("click", function() {
      li.classList.toggle("done");
    });
  }
  
  
function inputLength(){
    return input.value.length;
}

function addListAfterClick(){
    if(input.value.length>0){
        createListElement();
    }
}
// function toggleDone() {
//     this.classList.toggle("done");
// }
function deleteListItem() {
    this.parentNode.remove();
}

function addListAfterkey(event){
    if(input.value.length>0 && event.keyCode ===13){
        createListElement();
    }
}




button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterkey);
