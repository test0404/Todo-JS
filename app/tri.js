//SI ya un click dans mon doc
//Je fait le click sur l'ensemble du document car comme j'ai X button avec la même classe 
//j'arrive pas à dire de cliquer que sur ces bouttons a plusieurs j'ai donc une liste d'élément si je selectionne les bouttons ayant la classe cross et pas un suel élément !

// document.addEventListener("click", handleTri) ;

// function handleTri(evt) {
//     evt.preventDefault();
//     //Je range l'élément sur lequel j'ai cliqué
//     let nodeTarget= evt.target;

//     //Si c'est un de mes fameux bouttons qui ont/contient la classe "cross"
//     if (nodeTarget.classList.contains("tri-act")) {
//         document.getElementsByClassName("no-check").hidden = true;
//         console.log(document.getElementsByClassName("no-check"));
//     }
//     if (nodeTarget.classList.contains("tri-comp")) {
//         document.getElementsByClassName("check").hidden = true;
//     }

// }

//J'y arrive po à cacher PLUSIEURS truck