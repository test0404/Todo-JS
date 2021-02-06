
//Je selectionne mon formulaire (mieux que l'input car j'arrive pas à reset l'input après soumission)
let nodeForm = document.querySelector("body > div > div.div-crea.d-flex.flex-row.mb-3.align-items-center > form");


nodeForm.addEventListener('submit', handleTodo) ;
//Quand je subit (entrée)

function handleTodo(evt) {
    
    //Tu n'envois pas les données / Stop le comportement par défaut
    evt.preventDefault();

    let nodeInput = document.querySelector("body > div > div.div-crea.d-flex.flex-row.mb-3.align-items-center > form > input")
    //Je range l'input
    let text=nodeInput.value; 
    //Je stock la valeur entrée dans l'input

    let nodeUl = document.querySelector("body > div > div:nth-child(3) > ul");
    //Je range la balise ul

    let nodeLi = document.createElement("li");
    nodeLi.classList.add("list-group-item", "d-flex", "flex-row")
    //Je créer la balise li et j'ajoute les classes qu'il faut
    //Est - il possible de créer tout d'un seul coup ?? le li puis les div et p à l'intérieur avec les classes qu'il faut

    let nodeBut = document.createElement("button");
    nodeBut.classList.add("check","me-2", "mt-1");
    nodeLi.append(nodeBut);
    //Je créer la div check et je la met dans la li

    let nodeP = document.createElement("p");
    nodeP.textContent = text ;
    nodeP.classList.add("flex-grow-1", "m-2");
    nodeLi.append(nodeP);
    //Je créer le paragraphe avec les classes qu'il  faut
    //J'ajoute le texte entré
    //Je met tout ça dans li

    let nodeButX = document.createElement("button");
    nodeButX.classList.add("cross","mt-1");
    nodeLi.append(nodeButX);
    //Je créer la div cross et je met dans li
    
    nodeUl.prepend(nodeLi) ;
    //Je range le li et tout ce qui a dedans dans ul

    nodeForm.reset();
    //Je reset le form pour enlever le texte dans l'input

}