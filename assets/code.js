var imagenes = [];
imagenes["Cien"] = "assets/img/cien.svg";
imagenes["Cincuenta"] = "assets/img/cincuenta.svg";
imagenes["Veinte"] = "assets/img/veinte.svg";
imagenes["Diez"] = "assets/img/diez.svg";
imagenes["Cinco"] = "assets/img/cinco.svg";

class Billete
{
    constructor(n, v, c)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.valor = v;
        this.cantidad = c;

        this.imagen.src = imagenes[this.nombre];
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.nombre, bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "No tengo esa cantidad de dinero";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                var l = 0;
                while(l < e.cantidad)
                {
                    resultado.innerHTML += "<img src=" + imagenes[e.nombre] + " alt=" + ">" + "<br>";
                    e.cantidad = e.cantidad - 1;
                }
            }
        }
    }
}

var caja = [];
var entregado = [];
caja.push(new Billete("Cien", 100, 10) );
caja.push(new Billete("Cincuenta", 50, 10) );
caja.push(new Billete("Veinte", 20, 10) );
caja.push(new Billete("Diez", 10, 10) );
caja.push(new Billete("Cinco", 5, 10) );
var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);