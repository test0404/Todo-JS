//SI ya un click dans mon doc
//Je fait le click sur l'ensemble du document car comme j'ai X button avec la même classe 
//j'arrive pas à dire de cliquer que sur ces bouttons a plusieurs j'ai donc une liste d'élément si je selectionne les bouttons ayant la classe cross et pas un suel élément !

document.addEventListener("click", handleCross) ;

function handleCross(evt) {
    //Je range l'élément sur lequel j'ai cliqué
    let nodeTarget= evt.target;

    //Si c'est un de mes fameux bouttons qui ont/contient la classe "cross"
    if (nodeTarget.classList.contains("cross")) {
        //Tu me donne le li parent
        let nodeLi=nodeTarget.parentNode;
        //Tu supprime le li parent !
        nodeLi.remove();
    }

}

