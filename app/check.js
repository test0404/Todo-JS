//SI ya un click dans mon doc
//Je fait le click sur l'ensemble du document car comme j'ai X button avec la même classe 
//j'arrive pas à dire de cliquer que sur ces bouttons a plusieurs j'ai donc une liste d'élément si je selectionne les bouttons ayant la classe cross et pas un suel élément !

document.addEventListener("click", handleCheck) ;

function handleCheck(evt) {
    //Je range l'élément sur lequel j'ai cliqué
    let nodeTarget= evt.target;

    //Si c'est un de mes fameux bouttons qui ont/contient la classe "check"
    if (nodeTarget.classList.contains("check")) {
        
        //Tu mets sur ce bouttons la classe si elle n'y est pas sinon tu l'enlève
        //Permet d'ajouter le signe validé ou de l'enlevé si on change d'avis
        nodeTarget.classList.toggle("check-validate");
        //Tu stock le voison (le p contenant le todo)
        let nodePSibling = nodeTarget.nextElementSibling;
        //Tu lui ajouter la classe si elle n'y est pas sinon tu l'enlève
        nodePSibling.classList.toggle("p-validate");
        
    }
    
    
}