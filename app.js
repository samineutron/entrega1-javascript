
const misPerfumes = []

const datoLocal = localStorage.getItem("perfumes")

if (!datoLocal) {
  localStorage.setItem("perfumes", JSON.stringify(misPerfumes))
}

class Perfume {
  constructor(nombre, marca,contenido, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.contenido = contenido;
    this.precio = precio;
  }
}

function aniadirPerfume() {
  const nombre = prompt("Ingrese el nombre del Perfume")
  const marca = prompt("Ingrese la marca del Perfume")
  const contenido = prompt("Ingrese el conenido (ml) del Perfume")
  const precio = prompt("Ingrese el precio del Perfume")

  const nuevoPerfume = new Perfume(nombre, marca,contenido, precio)

  const datoPerfume = JSON.parse(localStorage.getItem("perfumes"))
  datoPerfume.push(nuevoPerfume)
  localStorage.setItem("perfumes", JSON.stringify(datoPerfume))
  console.log("Se ha añadido el Perfume: ", nuevoPerfume)
  
}

function eliminarPerfume() {
  const datoPerfume = JSON.parse(localStorage.getItem("perfumes"))
  console.log("");
  datoPerfume.forEach((dato, indice) => {
    console.log("El perfume se llama ", dato.nombre, ". Y se encuentra en la posición ", indice)
  });

  const posicion = prompt("Ingrese la posicion del Perfume a eliminar, y `no` si desea cancelar");

  if (posicion == "no") {
    return;
  }

  console.log("Se ha eliminado el Perfume: ", datoPerfume[posicion])
  datoPerfume.splice(posicion, 1)
  localStorage.setItem("perfumes", JSON.stringify(datoPerfume))
}

function mostrarPerfume() {
  const datoPerfume = JSON.parse(localStorage.getItem("perfumes"));
  console.log("");
  datoPerfume.forEach( (perfume) => {
    console.log("Nombre: ", perfume.nombre, ", Marca: ",perfume.marca, ", Contenido: ",perfume.contenido, ", Precio: ", perfume.precio)
  });
}

while (true) {
  const respuesta = prompt(`Bienvenido a tu colección de perfumes!
    Qué deseas hacer?:
    1.- Añadir perfume
    2.- Eliminar perfume
    3.- Ver mi coleccion de perfumes
    4.- Salir`);

  if (respuesta == 1) {
    aniadirPerfume();
  } else if (respuesta == 2){
    eliminarPerfume();
  } else if (respuesta == 3){
    mostrarPerfume();
  } else if (respuesta == 4){
    break;
  }
}