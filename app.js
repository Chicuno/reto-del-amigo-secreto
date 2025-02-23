var amigos = []
var amigo = 0

function agregarAmigo() {
    amigo = document.getElementById('amigo').value;
    if( amigo == 0) {
        alert("Por favor inserta un nombre");
    }else{
        amigos.push (document.getElementById('amigo').value);
        document.getElementById('amigo').value = "";
        desplegarLista();
        return;             
    }    
}