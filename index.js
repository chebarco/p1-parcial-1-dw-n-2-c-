/*
 * BARCO, CECILIA| APELLIDO, NOMBRE
 */

// Discos
let discos = [];
let pistas = [];
//variable para contar cantidad de discos
let contadorDiscos = 0;

//aca declaro las clase de DISCO donde estara la  info del disco
class Disco {
  #nombre;
  #autor;
  #codigo;
  #pistas;

  constructor(nombre, autor, codigo, pistas) {
    this.#nombre = nombre;
    this.#autor = autor;
    this.#codigo = codigo;
    this.#pistas = pistas;
  }
  /**
   * @param {Nombre} nombre
   */
  set setNombre(nombre) {
    this.#nombre = nombre;
  }
  /**
   * @param {Autor} autor
   */
  set setAutor(autor) {
    this.#autor = autor;
  }
  /**
   * @param {Codigo} codigo
   */
  set setCodigo(codigo) {
    this.#codigo = codigo;
  }
  /**
   * @param {Pistas} pistas
   */
  set setPistas(pistas) {
    this.#pistas = pistas;
  }

  get getNombre() {
    return this.#nombre;
  }

  get getAutor() {
    return this.#autor;
  }

  get getCodigo() {
    return this.#codigo;
  }

  get getPistas() {
    return this.#pistas;
  }
}

//aca declaro las pistas que ingresara el usuario

class Pista {
  #nombrePista;
  #duracion;

  constructor(nombrePista, duracion) {
    this.#nombrePista = nombrePista;
    this.#duracion = duracion;
  }
  /**
   * @param {nombrePista} nombrePista
   */
  set setnombrePista(nombrePista) {
    this.#nombrePista = nombrePista;
  }
  /**
   * @param {Duracion} duracion
   */
  set setDuracion(duracion) {
    this.#duracion = duracion;
  }

  get getnombrePista() {
    return this.#nombrePista;
  }
  get getDuracion() {
    return this.#duracion;
  }
}

//La constante que crea el objeto Disco esta conectada al boton del html "ingresar info"
const cargarDisco = () => {
  let nombre = cargarNombreDiscos();
  let autor = cargarAutor();
  let codigo = cargarCodigo();

  do {
    let pista = cargarPista();
    if (pista !== null) {
      pistas.push(pista);
      console.log(pistas);
    } else {
      return;
    }
  } while (confirm("Te copa ingresar otra pista 😎?"));

  discos.push(new Disco(nombre, autor, codigo, pistas));
  contadorDiscos++;
  alert(`Tu total de discos que cargaste hasta ahora es de ${contadorDiscos}`);
};

//aca pido los nombres del disco
function cargarNombreDiscos() {
  do {
    nombre = prompt("Ingresa el nombre del Disco");
    if (nombre == "") {
      alert("No ingresaste ningun dato🥴, volve a intentar🙏");
    }
  } while (!(nombre != ""));
  console.log(nombre);
  return nombre;
}

//aca pido los nombres del autor
function cargarAutor() {
  do {
    autor = prompt(`Ingresa el Autor del Disco ${nombre}`);
    if (autor == "") {
      alert("no ingresaste ningun dato😱, volve a intentar😝");
    }
  } while (!(autor != ""));
  console.log(autor);
  return autor;
}

//aca pido el codigo del disco y ademas le aviso si esta o no repetido
function cargarCodigo() {
  let codigoFlag = false;

  do {
    do {
      codigo = parseInt(prompt(`Ingresa el Codigo del Disco ${nombre}`));

      if (discos.length > 0) {
        for (let auxiliarCodigo of discos) {
          if (auxiliarCodigo.getCodigo == codigo) {
            alert(
              "Error, el código del disco ya existe. Vuelva a ingresar otro nuevamente."
            );
          } else {
            codigoFlag = true;
          }
        }
      } else {
        codigoFlag = true;
      }
    } while (!codigoFlag);

    if (!(codigo >= 1 && codigo <= 999) && isNaN(codigo) && (codigo = null)) {
      alert("Error, ha ingresado un codigo invalido.");
    }
  } while (!(codigo >= 1 && codigo <= 999) && isNaN(codigo));
  console.log(codigo);
  return codigo;
}

//aca pido la duracion y ademas me fijo si supera los 180segundos para diferenciarla
function cargarPista() {
  let nombrePista;
  let duracion;
  let duracionFlag = false;

  //aca pido y valido la pista
  do {
    nombrePista = prompt(`Que tema te gusta de ${nombre} 🤔?`);
    if (nombrePista == "") {
      alert("No ingresaste ningun dato🥴, volve a intentar🙏");
    }
  } while (!(nombrePista !== ""));
  console.log(nombrePista);

  do {
    //aca pido y valido la duracion
    duracion = parseInt(
      prompt(
        `Cuanto dura "${nombrePista}" en segundos?(Considera que 1 minuto = 60 segundos)`
      )
    );
    if (isNaN(duracion) && (duracion == null)) {
      alert("no ingresaste nada");
    } else if (duracion >= 0 && duracion <= 7200) {
      duracionFlag = true;
      alert(`La duracion es de ${duracion}`);
    } else {
      alert("El numero no esta dentro del rango");
    }

    console.log(duracion);
  } while (!duracionFlag);

  return new Pista(nombrePista, duracion);
}





// aca voy a mostrar la informacion final
const html = document.getElementById("info");
const button = document.getElementById("reset");

function mostrarDisco() {
  if (discos.length > 0) {
    let innerHTML = html.innerHTML;

    for (let disco of discos) {
      innerHTML += `
        <div class="rocola">
        <div class="rocola.imagen">
        <img src="imagenes/rocola.png" class="card-img-top rocolala"  alt="...">
        </div>
        <h2 class="titulo-nombre">Autor: <p class="info-disco"> ${disco.getAutor} </p></h2>
        <h2 class="titulo-nombre">Disco:<p class="info-disco"> ${disco.getNombre}</p></h2>
        <h2 class="titulo-nombre">Codigo: <p class="info-disco">${disco.getCodigo}</p></h2>
      `;

      for (let pista of disco.getPistas) {
        innerHTML += `
          <h2 class="titulo-nombre">Pista: <p class="info-disco">${pista.getnombrePista}</p></h2>
        `;

        if (pista.getDuracion > 180) {
          innerHTML += ` <h2 class="titulo-nombre">Duracion:<p class="info-disco red"> ${pista.getDuracion}seg</p></h2>`;
        } else {
          innerHTML += ` <h2 class="titulo-nombre">Duracion:<p class="info-disco"> ${pista.getDuracion}seg</p></h2>`;
        }
      }
    }

    html.innerHTML = innerHTML;
  }
  button.addEventListener("click", () => {
    html.innerHTML = "";
  });
}

//busco la pista mediante el codigo numerico y la muestro

function buscarPista() {
  let buscarCodigo;
  do {
    buscarCodigo = parseInt(prompt("Ingresa el codigo del Disco"));
    if (buscarCodigo == codigo) {



      let innerHTML = html.innerHTML;

      for (let disco of discos) {
        innerHTML += `
          <div class="rocola">
          <div class="rocola.imagen">
          <img src="imagenes/rocola.png" class="card-img-top rocolala"  alt="...">
          </div>
          <h2 class="titulo-nombre">Autor: <p class="info-disco"> ${disco.getAutor} </p></h2>
          <h2 class="titulo-nombre">Disco:<p class="info-disco"> ${disco.getNombre}</p></h2>
          <h2 class="titulo-nombre">Codigo: <p class="info-disco">${disco.getCodigo}</p></h2>
        `;
  
        for (let pista of disco.getPistas) {
          innerHTML += `
            <h2 class="titulo-nombre">Pista: <p class="info-disco">${pista.getnombrePista}</p></h2>
          `;
  
          if (pista.getDuracion > 180) {
            innerHTML += ` <h2 class="titulo-nombre">Duracion:<p class="info-disco red"> ${pista.getDuracion}seg</p></h2>`;
          } else {
            innerHTML += ` <h2 class="titulo-nombre">Duracion:<p class="info-disco"> ${pista.getDuracion}seg</p></h2>`;
          }
        }
      }
  
      html.innerHTML = innerHTML;

      
    } else {
      alert("Ese codigo si que no esta 😔");
    }
  } while (!(buscarCodigo == codigo) && (buscarCodigo = null));
      
      button.addEventListener("click", () => {
        html.innerHTML = "";
      });
}
