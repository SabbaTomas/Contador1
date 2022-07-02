let seleccioando = document.getElementsByClassName("selected");
let contadores = document.getElementById("contador_main");
let cantidadDeContadores = document.getElementsByClassName("nums");
let contadores1= document.querySelectorAll("h3"); 


let contador = 0;

contadores1.forEach(numero => {
  numero.addEventListener('click', () => {
    for(let item of cantidadDeContadores){
      if(item.classList.contains("selected")){
        item.classList.remove("selected");
      }
    }
    if(!numero.classList.contains("selected")){
      numero.classList.add('selected');
    }
  })
});

const cambiarContador = () => {
    console.log("hola");
}

const incrementar = () => {
  actualizarContador(++contador);
};

const decrementar = () => {
  if (contador > 0) {
    actualizarContador(--contador);
  }
};

const reiniciar = () => {
  contador = 0;
  actualizarContador(contador);
};

const agregarContador = () => {
  if (cantidadDeContadores.length < 3) {
    for(let item of cantidadDeContadores){
      if(item.classList.contains("selected")){
        item.classList.remove("selected");
      }
    }
    const h3 = document.createElement("h3");
    h3.classList.add('nums', 'selected');
    h3.innerHTML = 0;
    contadores.appendChild(h3);
  }
};

const quitarContador = () => {
    if(cantidadDeContadores.length > 1) {
        contadores.lastChild.remove();
    }
};

const actualizarContador = (num) => {
  for(let item of cantidadDeContadores){
    if(item.classList.contains("selected")){
      item.innerHTML = num;
    }
  }
};

