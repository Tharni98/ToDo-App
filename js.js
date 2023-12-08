const txt = document.getElementById("txt");
const add = document.getElementById("add");
const task = document.getElementById("task");

add.addEventListener("click",function (e) {
    if (txt.value.length > 0) {

    e.preventDefault()
    const listItem = document.createElement("li");
    const addItem = document.createElement("span");
    const deleteButton = document.createElement("button");
    const doneButton = document.createElement("button");

    addItem.classList.add("item");
    addItem.innerText = txt.value;
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    doneButton.classList.add("done");
    doneButton.innerText = "Done";

    listItem.appendChild(addItem);
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    task.appendChild(listItem);
        deleteButton.addEventListener("click",function(){
            task.removeChild(listItem);
        })
    doneButton.addEventListener("click", function () {
        const span = listItem.querySelector(".item")
        span.style.color = "#ADFF2F";
        span.style.textDecoration = "line-through";
    })

    txt.value = ""
        txt.focus();
    }else{
    e.preventDefault();
}
})