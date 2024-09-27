console.log("Bonjour, chargement du fichier");


function gestionDuFormulaire(event){

   event.preventDefault();
   console.log(event)

    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operation =document.getElementById("operation").value;

    let resultat =0;
    if(operation==="1"){
         resultat = parseInt(firstNumber) + parseInt(secondNumber);
    }else if (operation==="2"){
        resultat= parseInt(firstNumber) * parseInt(secondNumber);
    }

    const operationLabel = operation === "1" ? "+" : "*";
    document.getElementById("resul").innerHTML = `${firstNumber} ${operationLabel} ${secondNumber} = ${resultat}`;

    console.log("==================================");
    console.log(firstNumber, secondNumber, resultat, typeof resultat);
    console.log("==================================");
}



function gestionDuneOperation(event){
    console.log(event)

    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operation =document.getElementById("operation").value;

    let resultat =0;
    if(operation==="1"){
        resultat = parseInt(firstNumber) + parseInt(secondNumber);
    }else if (operation==="2"){
        resultat= parseInt(firstNumber) * parseInt(secondNumber);
    }

    const operationLabel = operation === "1" ? "+" : "*";
    document.getElementById("resul").innerHTML = `${firstNumber} ${operationLabel} ${secondNumber} = ${resultat}`;

    console.log("==================================");
    console.log(firstNumber, secondNumber, resultat, typeof resultat);
    console.log("==================================");
}

