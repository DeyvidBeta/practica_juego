let random = Math.ceil(Math.random()*10)
console.log(random)

let numeroInput = document.querySelector('.numeroInput')
const intentos = document.querySelector('.intentos') // intentos anteriores
const resultado = document.querySelector('.resultado') // ultimo resultado
const orientar = document.querySelector('.orientar') // orientar
const jugar = document.querySelector('.jugar')

let contador = 1
let min = 1
let max = 20

const validar = () =>{
    let numero = Number(numeroInput.value)

    if (contador <= 6) {


        if (numero >= min && numero <= max) {
            if (numero === random) {
                resultado.textContent=`¡G A N A S T E!`
                setGameOver()
            } else if (numero < random) {
                    resultado.textContent=`El número secreto es mayor`
                } else {
                    resultado.textContent=`El número secreto es menor`
            }
        } else {
            resultado.textContent=`Debes de ingresar un número entre el ${min} y ${max}`

        }
    } else {
        resultado.textContent=`¡P E R D I S T E! Agotaste tus intentos`
        setGameOver()
    }


    numeroInput.value=''
    numeroInput.focus();
    contador++
}


function setGameOver() {
  numeroInput.disabled = true;
  jugar.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Juega de nuevo';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}


function resetGame() {
  contador = 1

  // const resetParas = document.querySelectorAll('.resultParas p');
  // for (let i = 0 ; i < resetParas.length ; i++) {
  //   resetParas[i].textContent = '';
  // }

  resetButton.parentNode.removeChild(resetButton);

  jugar.disabled = false;
  numeroInput.disabled = false;
  numeroInput.value = '';
  numeroInput.focus();

  resultado.style.backgroundColor = 'white';
  resultado.textContent=``

  random = Math.ceil(Math.random()*10)
  console.log(random)
}

