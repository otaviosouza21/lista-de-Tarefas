const input = document.querySelector("input");
const add = document.querySelector("#add");
const lista = document.querySelector(".tarefas-lista ul");
const itens = document.querySelectorAll(".tarefas-lista ul");

//add um item na lista
function addItem() {
  if (input.value !== "") {
    const novoItem = document.createElement("li");
    const icones = document.createElement("div");
    const check = document.createElement("img");
    const del = document.createElement("img");

    //cria um novo item na lista
    lista.appendChild(novoItem);
  
    novoItem.innerHTML = input.value;
    novoItem.classList.add("item");
    input.value = "";

    //cria o conteiner de icones
    novoItem.appendChild(icones);
    icones.classList.add("icones");

    //add o icon check
    check.setAttribute("src", "./img/check.svg");
    icones.appendChild(check);
    check.classList.add("icone");

    // add o icon del
    del.setAttribute("src", "./img/xis.svg");
    icones.appendChild(del);
    del.classList.add("icone");

    del.addEventListener("click", function () {
      novoItem.remove();
    });

    check.addEventListener("click", function () {
      novoItem.classList.toggle("check");
    });

    setTimeout(()=>{
      novoItem.classList.add("show");
    },0)
  }
}

//evento para add item pelo botao
add.addEventListener("click", addItem);

//evento para add item pelo Enter
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});
