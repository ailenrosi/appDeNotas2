let fs = require ('fs') //requerir el metodo dentro de una variable


module.exports = moduloTareas  = {
    //cramos una propiedad llamada leerJSON, se utiliza : 
    leerJSON : ()=> {
        //primero leo el archivo JSON y despues lo parceo
        //.readFileSync recibe dos parametros 1. la ruta del archivo 2.codificacion(utf-8)
        let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8')
      return JSON.parse(listaDeTareas)
 
    }, 
    escribirJSON: (titulo, estado) => {//creo un metodo que recibe dos parametros para crear un nuevo objeto y guardaarlo en el array de tareas
        let nuevaTarea = { //creo un objeto nuevo que representa una nueva tarea
            titulo : titulo,
            estado: estado
        }
        let tareasAnteriores = moduloTareas.leerJSON() // guardo en la variable lo que me retorna leerJSON
        tareasAnteriores.push(nuevaTarea); //agrego el nuevo objeto al final del array de tareas
        moduloTareas.guardarJSON(tareasAnteriores)//utilizo el metodo guardar para guarda en el archivo.json el array con la nueva tarea
        //writeFileSync recibe como 1er parametro el archivo que se quiere escribir y como segundo parametro el elemento que se quiere escribir y por ultimo 'utf-8'
       

    },
    guardarJSON: (info) => {
        //pasar a string el array de tareas anteriores
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')

    },
    deshacer: () => {
        let tareas = moduloTareas.leerJSON(); //traer el array para poder modificarlo
        tareas.pop(); //modificar el array
        moduloTareas.guardarJSON(tareas) //guardar el array modificado
    },

    filtrarPorEstado: (estado) => {
        let listaDeTareas = moduloTareas.leerJSON();
        let tareasFiltradas = listaDeTareas.filter(tarea =>{
            return tarea.estado === estado
        })
        return tareasFiltradas


    }

}
console.log(moduloTareas.filtrarPorEstado("terminada"))