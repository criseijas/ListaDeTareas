let input = document.querySelector("[data-input]");
let addBtn = document.querySelector("[data-btn]");
let ul = document.querySelector("[data-list]");
let empty = document.querySelector("[data-empty]");


addBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let text = input.value;

    if(text !== ""){

    let li = document.createElement("li");
    let p = document.createElement("p");

    p.textContent = text;

    li.appendChild(p);
    li.appendChild(BtnDelete());
    ul.appendChild(li);

    input.value = "";
    console.log(empty);
    empty.style.display = "none";

    }

    
})

function BtnDelete(){
    
    deleteBtn = document.createElement("button");

    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete__btn";

    deleteBtn.addEventListener("click", (e) =>{

        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if(items.length === 0){
            empty.style.display = "block";
        }
    });

    return deleteBtn;
}