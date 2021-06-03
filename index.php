<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">

  <link href="./css/reset.css" rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  
  <link href="./css/style.css" rel="stylesheet">
  
  <title>Frontend Mentor | Todo app</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body class="p-4">

  <div class="wrapper">

    <div class="div-titre d-flex flex-row justify-content-between align-items-center mb-5">
      <h1 class="m-0">T O D O</h1>
      <img class="icon-sun" src="./images/icon-sun.svg" alt="">
    </div>


    <div class="div-crea d-flex flex-row mb-3 align-items-center">
      <div class="check me-2 mt-1"></div>
      <form action="" method="POST">
        <input class="form-control p-0" type="text" placeholder="Créer un nouveau todo..." aria-label="default input example" onfocus="this.value=''">
      </form>
    </div>
    
    <div>
      <ul class="list-group">
        <li class="list-group-item d-flex flex-row" > 
          <button class="check no-check  me-2 mt-1"></button>
          <p class="flex-grow-1 m-2">Liste des todos</p>
          <button class="cross mt-1"></button>
        </li>

        <li class="list-group-item d-flex flex-row">
          <button class="check no-check me-2 mt-1"></button>
          <p class="flex-grow-1 m-2">Liste des todos</p>
          <button class="cross mt-1"></button>
        </li>

        <li class="li-clear list-group-item d-flex flex-row justify-content-between "  >
          <p class="flex-grow-1 m-2"><!-- Add dynamic number --> Todo restants</p>
          <p class="flex-grow-1 m-2 text-end">Clear Completed</p>
        </li>
      </ul>
    </div>

    <div class="div-filtre d-flex flex-row justify-content-center mt-3 align-items-center">
      <a href="" class="tri-all active me-3 mb-0">All</a>
      <a href="" class="tri-act me-3 mb-0">Active </a>
      <a href="" class="tri-comp me-3 mb-0">Completed</a>
    </div>
    

    <div class="drag mt-5 mb-5">
      <!-- <p class="text-center">Drag and drop to reorder list</p> -->
    </div>

    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Sonia</a>.
    </div>

  </div>

  <script src="./app/ajout-todo.js"></script>
  <script src="./app/cross.js"></script>
  <script src="./app/check.js"></script>
  <script src="./app/tri.js"></script>
  <!-- <script src="./app/drag.js"></script> -->
  <!-- No puedo utilizar la bdd with JS i'ts nul ?????-->
</body>
  
</html>
