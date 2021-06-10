const añadir = document.getElementById('add');
const campoDeTexto = document.getElementById('campo-de-texto')
const lista = document.getElementById('notes');
const deleter = document.getElementsByTagName('li');
añadir.onclick = ()=>{
    if(!campoDeTexto.value){
        alert('Agregue una tarea a realizar')
    }
    else{
        const contenido = "<li><i onclick='func(this)' class='bx bx-checkbox'></i>"+ campoDeTexto.value+"<i onclick='eliminarElemento(this)' class='bx bx-trash'></i></li>"
        lista.insertAdjacentHTML('beforeend',contenido);
        campoDeTexto.value = ''
    }
}

function eliminarElemento(elemento){
    elemento.parentElement.remove();
    
}
function func($elemento){
    $elemento.classList.toggle('bx-checkbox');
    $elemento.classList.toggle('bxs-checkbox-checked');
  
}
function deleteAll(){
    Array.from(lista.children).forEach(element=>element.remove());
}
