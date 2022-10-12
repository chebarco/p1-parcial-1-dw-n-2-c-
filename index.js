/*
 * BARCO, CECILIA| APELLIDO, NOMBRE
 */

// Discos
let discos = [];

//variable para contar cantidad de discos
let contadorDiscos = 0;

//aca delcaro las clase de DISCO donde estara la  info del disco
class Disco {
  #nombre;
  #autor;
  #codigo;
  #pista;

  constructor(nombre, autor, codigo, pista) {
    this.#nombre = nombre;
    this.#autor = autor;
    this.#codigo = codigo;
    this.#pista = pista;
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
   * @param {Pista} pista
   */
  set setPista(pista) {
    this.#pista = pista;
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

  get getPista() {
    return this.#pista;
  }
}

//aca declaro las pistas que ingresara el usuario

class Pista {
  #nombre;
  #duracion;

  constructor(nombre, duracion) {
    this.#nombre = nombre;
    this.#duracion = duracion;
  }
  /**
   * @param {Nombre} nombre
   */
  set setNombre(nombre) {
    this.#nombre = nombre;
  }
  /**
   * @param {Duracion} duracion
   */
  set setDuracion(duracion) {
    this.#duracion = duracion;
  }

  get getNombre() {
    return this.#nombre;
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
  let pista = cargarPista();

  discos.push(new Disco(nombre, autor, codigo, pista));
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
    autor = prompt("Ingresa el Autor");
    if (autor == "") {
      alert("no ingresaste ningun dato😱, volve a intentar😝");
    }
  } while (!(autor != ""));
  console.log(autor);
  return autor;
}

//aca pido el codigo del disco y ademas le aviso si esta o no repetido
function cargarCodigo() {
  do {
    codigo = parseInt(prompt("Ingresa un codigo numero entre el 1 al 999"));
    if (codigo >= 1 && codigo <= 999) {
      alert(`El codigo es de ${codigo}`);
    } else {
      alert("El numero no esta dentro del rango");
    }
  } while (!(codigo >= 1 && codigo <= 999));

  console.log(codigo);
  return codigo;
}

//aca pido la duracion y ademas me fijo si supera los 180segundos para diferenciarla
function cargarPista() {
  let pista = [];
  let duracion;
  //aca pido y valido la pista
  do {
    do {
      do {
        pista = prompt("Que tema te gusta? 🤔");
        if (pista == "") {
          alert("No ingresaste ningun dato🥴, volve a intentar🙏");
        }
      } while (!(pista !== ""));
      console.log(pista);

      do {
        //aca pido y valido la duracion
        do {
          duracion = parseInt(
            prompt(
              "Cuanto dura el tema en segundos?(Considera que 1 minuto = 60 segundos)"
            )
          );
          if (duracion >= 0 && duracion <= 7200) {
            alert(`La duracion es de ${duracion}`);
          } else {
            alert("El numero no esta dentro del rango");
          }
        } while (isNaN(duracion));

        console.log(duracion);
      } while (!(pista == "") && isNaN(duracion));
    } while (confirm("Quiere ingresar otra pista?"));
  } while (confirm("Quiere ingresar otra duracion?"));
}





// aca voy a mostrar la informacion final
const html = document.getElementById("info");
const discosDuracion = document.getElementById("discosDuracion");
const button = document.getElementById("reset");

const mostrarDisco = () => {
  if (discos.length > 0) {
    for (let r in discos) {
      html.innerHTML = `
            <div class="rocola">
            <div class="rocola.imagen">
            <img src="imagenes/rocola.png" class="card-img-top rocolala"  alt="...">
            <div>
            <h2 class="titulo-nombre">Autor: ${discos[r].getAutor}</h2>
            <h2 class="titulo-nombre">Disco: ${discos[r].getNombre}</h2>
            <h2 class="titulo-nombre">Codigo: ${discos[r].getCodigo}</h2>
            </div>
          </div> 
          `;
      for (let p in discos[r].getPista) {
        if (discos[r].getPista[p].getDuracion >= 180) {
          discosDuracion.innerHTML = `<li style ="color: red"> Nombre: ${discos[r].getPista[p].getNombre}, Duracion: ${discos[r].getPista[p].getDuracion}  `;
        } else {
          `<li style ="color: green"> Nombre: ${discos[r].getPista[p].getNombre}, Duracion: ${discos[r].getPista[p].getDuracion} `;
        }
      }
    }
  }
  button.addEventListener("click", () => {
    html.innerHTML = "";
    discosDuracion.innerHTML = "";
  });
};


