
let moduloTareas = require('./tareas'); //requerimos modulotareas del archivo tareas.json
let process = require('process'); //usamos el modulo process para ver lo que lee por consola
// se asigna una variable para usar el process junto con la posicion
let comando = process.argv[2];
//acceder a las propiedades del objeto


switch (comando) {
    case "listar":
        let tareas = moduloTareas.leerJSON();
        //si la lista de tareas esta vacia se ejecuta la frase " tu lista de tareas esta vacia"
        if(tareas.lenght ===  0){
            console.log("tu lista de tarea esta vacia");
        }else{
            for(let i = 0; i< tareas.length; i++){
                console.log("Titulo: " + tareas[i].titulo + "- estado: " + tareas[i].estado);
                
            }
        }
        break;
    case "agregar":
        let titulo = process.argv[3]; //recive el titulo que pase por consola
        let estado = process.argv[4]; //estado pasado por consola
        moduloTareas.escribirJSON(titulo, estado)

        break;
    case "deshacer":
        moduloTareas.deshacer()
        break;

    case "filtrar":
        let filtrar = process.argv[3]
        let listaFiltrada = moduloTareas.filtrarPorEstado(filtrar)
        for (let i = 0; i < listaFiltrada.lenght; i++){
            console.log(listaFiltrada[i].titulo);
        }
    
        break;

    case "undefined":
        console.log("Atencion, tienes que pasar una accion");
        break;
    default:
        console.log("no entiendo lo que quieres hacer");
}