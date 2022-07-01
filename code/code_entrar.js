var botonesNumeros = document.querySelectorAll(".numero");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var contraseña = "";

alert("La contraseña es 1234");

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        recibirContraseña(boton.innerHTML);
    });
});

function pintar() {
    if (contraseña.length == 0){
        uno.textContent = "*";
    }
    else if (contraseña.length == 1){
        dos.textContent = "*";
    }
    else if (contraseña.length == 2){
        tres.textContent = "*";
    }
    else if (contraseña.length == 3){
        cuatro.textContent = "*";
    }
}

function borrarPintura() {
    if (contraseña.length == 1){
        uno.textContent = "";
    }
    if (contraseña.length == 2){
        dos.textContent = "";
    }
    if (contraseña.length == 3){
        tres.textContent = "";
    }
    if (contraseña.length == 4){
        cuatro.textContent = "";
    }
}

function borrar() {
    borrarPintura ();
    contraseña = contraseña.toString().slice(0,-1);
    return contraseña;
}

function recibirContraseña(numero){
    pintar();
    contraseña = contraseña + numero;
    return contraseña;
}

function ir(){
    var c = 1234;
    if(contraseña == c){
        window.location="index.html";
    }
    else{
        alert("La contraseña es 1234");
    }
}