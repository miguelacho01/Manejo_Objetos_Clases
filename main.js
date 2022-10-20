class Persona{
    constructor(nombre, apellido, documento){
        this.nombre=nombre
        this.apellido=apellido
        this.documento=documento
    }
}

class Interfaz{
    anadirpersona(persona){
        const lista=document.getElementById('personas-list')
        const elemento = document.createElement('div')
        elemento.innerHTML=`
        <div class="card text-center mb-4">
        <div class="card-body">
            <strong>Nombre</strong>: ${persona.nombre}
            <strong>Apellido</strong>: ${persona.apellido}
            <strong>Documento</strong>: ${persona.documento}
            <a href="#" class="btn btn-danger" name="eliminar">ELIMINAR</a>
        </div>
    </div>`

    lista.appendChild(elemento)
    this.dejarblanco()
    }

    dejarblanco(){
        document.getElementById('personas-form').reset()
    }

    eliminarPersona(elemento){
            elemento.parentElement.parentElement.parentElement.remove()
    }

    mostrarmensaje(mensaje,tipo){
        const div=document.createElement('div')
        div.className=`alert alert-${tipo}`
        div.appendChild(document.createTextNode(mensaje))
        const contenedor =document.getElementsByClassName('container')
        const app=document.getElementById('app')
        contenedor[0].insertBefore(div,app)
        setTimeout(function(){
            document.querySelector('.alert').remove()
            document.querySelector('.btn').disabled=false

        },2000)
        
    }

}

//EVENTO QUE INTERACTUAN DESDE EL HTML
document.getElementById('personas-form').addEventListener('submit',evento=>{
    evento.preventDefault()
    const nombre=document.getElementById('nombre').value
    const apellido=document.getElementById('apellido').value
    const documento=document.getElementById('documento').value
    document.querySelector('.btn').disabled=true
    if(nombre===''||apellido===''||documento===''){
        const interfaz = new Interfaz
        interfaz.mostrarmensaje('Campos vacios','warning')
  
    } else{
        const persona=new Persona(nombre,apellido,documento)
        const interfaz = new Interfaz
        interfaz.anadirpersona(persona)
        interfaz.mostrarmensaje('Añadido correctamente','success')
    }
    
})

document.getElementById('personas-list').addEventListener('click',evento=>{
    if(evento.target.name=='eliminar'){
    const interfaz=new Interfaz
    interfaz.eliminarPersona(evento.target)
    interfaz.mostrarmensaje('Elemento eliminado','danger')
    }    
})
