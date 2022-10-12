function leer(){
    return document.getElementById("todo").value
}

function agregar(){
    nodo = document.createElement("li")
    texto = document.createTextNode(leer())
    // texto = document.createTextNode(document.getElementById("todo").value)
    nodo.appendChild(texto);
    nodo.setAttribute("id",leer())
    document.getElementById("lista").appendChild(nodo)
}

function buscarId() {
    //listaTodo = document.getElementsByTagName("li")
    // for(let x in listaTodo){
    //     listaTodo.childNodes(x)
    //     //textContent
    //     //childNodes
    // }
    //buscar id
    if(document.getElementById(leer()) != null)
        console.log("Existe")
    else
        console.log("No existe")
        alert("ojo! ya existe")
}

function buscarFor() {
    listaTodo = document.getElementsByTagName("li");
    for (let i = 0; i < listaTodo.length; i++) {
        const tarea = listaTodo[i];
        if(leer() == tarea.textContent)
            alert("Ya existe")
        
    }
}

function buscarOf() {
    listaTodo = document.getElementsByTagName("li")
    for (const iterator of listaTodo){
        if(leer() == iterator.textContent)
            alert("Ya existe")
    }
}

function buscar() {
    listaTodo = document.getElementsByTagName("li")
    for (const tarea in listaTodo) {
        if (Object.hasOwnProperty.call(listaTodo, tarea)) {
           const element = listaTodo[tarea]
            // if(leer() == listaTodo[tarea].childNodes[0])
            //    console.log("Ya existe")
            
            //console.log(listaTodo[tarea])
            //if(leer() == listaTodo.childNodes[tarea])
            //    alert("Ya existe")
            if(leer() == element.textContent)
                alert("Ya existe")
            
        }
    }
  }
