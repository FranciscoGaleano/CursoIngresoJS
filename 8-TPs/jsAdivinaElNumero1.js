/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numero;

	
function comenzar()
{
	
	numeroSecreto = Math.floor((Math.random()*100)+1);
	
	contadorIntentos = 0;

	console.log(numeroSecreto);




	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}

function verificar()
{

	numero = document.getElementById('numero').value;

	contadorIntentos = contadorIntentos + 1;

	document.getElementById('intentos').value = contadorIntentos;

	

	if(contadorIntentos > 9){

		return alert("-GAME OVER-");
		
	}

	if(numeroSecreto == numero && contadorIntentos == 1){

		alert("NOPE");
	}
	else{

		if(numeroSecreto == numero){

			alert("Usted es el ganador! Y en sólo " + contadorIntentos + " intentos.");

		}
		else{

			if(numeroSecreto < numero){

				alert("Te pasaste!");

			}
			else{

				alert("Te faltan!");

			}

		}

	}

}

			
		
	


	/*if(numeroSecreto == numero){

		alert("Usted es el ganador! Y en sólo " + contadorIntentos + " intentos.");

	}
	else{

		if(numeroSecreto < numero){

			alert("Número equivocado! Te pasaste por algunos...");

		}
		else{

			alert("Número equivocado! Te faltan algunos...");
		}

		


	}
	
}*/