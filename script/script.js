const input = document.querySelector("input");
const add = document.querySelector("#add");
const lista = document.querySelector(".tarefas-lista ul");
const itens = document.querySelectorAll(".tarefas-lista ul");

function criaElemento(tag,classe,conteudo){
  let elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null ; 
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

function criaIcones(tag,classe,atributo,caminho){
  const icone = document.createElement(tag);
  icone.classList.add(classe)
  caminho ? icone.setAttribute(atributo,caminho) : null;
  console.log(icone)
  return icone;
}

//add um item na lista
function addItem() {
  if (input.value !== "") {
    const novoItem = criaElemento("li","item",input.value);
    const icones = document.createElement("div");
    const check = criaIcones("img","icone","src","./img/check.svg");
    const del = criaIcones("img","icone","src","./img/xis.svg");

    //cria um novo item na lista
    lista.appendChild(novoItem);

    input.value = "";
    //cria o conteiner de icones
    novoItem.appendChild(icones);
    icones.classList.add("icones");
    //add o icon check
    icones.appendChild(check);
    // add o icon del
    icones.appendChild(del);

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
