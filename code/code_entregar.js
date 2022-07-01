var imagenes = [];
imagenes["Cienmil"] = "assets/img/cienmil.svg";
imagenes["Cincuentamil"] = "assets/img/cincuentamil.svg";
imagenes["Veintemil"] = "assets/img/veintemil.svg";
imagenes["Diezmil"] = "assets/img/diezmil.svg";
imagenes["Cincomil"] = "assets/img/cincomil.svg";
imagenes["Dosmil"] = "assets/img/dosmil.svg";
imagenes["Mil"] = "assets/img/mil.svg";
imagenes["Quinientos"] = "assets/img/quinientos.svg";
imagenes["Docientos"] = "assets/img/docientos.svg";
imagenes["Cien"] = "assets/img/cien.svg";
imagenes["Cincuenta"] = "assets/img/cincuenta.svg";
imagenes["Veinte"] = "assets/img/veinte.svg";
imagenes["Diez"] = "assets/img/diez.svg";
imagenes["Cinco"] = "assets/img/cinco.svg";

var imagenesPlural = [];
imagenesPlural["Cienmiles"] = "assets/img/cienmiles.svg";
imagenesPlural["Cincuentamiles"] = "assets/img/cincuentamiles.svg";
imagenesPlural["Veintemiles"] = "assets/img/veintemiles.svg";
imagenesPlural["Diezmiles"] = "assets/img/diezmiles.svg";
imagenesPlural["Cincomiles"] = "assets/img/cincomiles.svg";
imagenesPlural["Dosmiles"] = "assets/img/dosmiles.svg";
imagenesPlural["Miles"] = "assets/img/miles.svg";
imagenesPlural["Quinientoes"] = "assets/img/quinientoes.svg";
imagenesPlural["Docientoes"] = "assets/img/docientoes.svg";
imagenesPlural["Cienes"] = "assets/img/cienes.svg";
imagenesPlural["Cincuentas"] = "assets/img/cincuentas.svg";
imagenesPlural["Veintes"] = "assets/img/veintes.svg";
imagenesPlural["Diezes"] = "assets/img/diezes.svg";
imagenesPlural["Cincos"] = "assets/img/cincos.svg";

class Billete
{
    constructor(p, s, v, c)
    {
        this.imagen = new Image();
        this.plural = p;
        this.singular = s;
        this.valor = v;
        this.cantidad = c;

        this.imagen.src = imagenes[this.singular];
        this.imagen.src = imagenesPlural[this.plural];
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
            entregado.push(new Billete(bi.plural, bi.singular, bi.valor, papeles) );
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
            if(e.cantidad > 0 && e.cantidad < 2)
            {
                resultado.innerHTML += "<div>" + e.cantidad + "<img src=" + imagenes[e.singular] + " alt=" + ">" + "</div>";
            }
            else if(e.cantidad > 0)
            {
                resultado.innerHTML += "<div>" + e.cantidad + "<img src=" + imagenesPlural[e.plural] + " alt=" + ">" + "</div>";
            }
        }
    }
    return entregado;
}

var caja = [];
var entregado = [];
caja.push(new Billete("Cienmiles", "Cienmil", 100000, 100) );
caja.push(new Billete("Cincuentamiles", "Cincuentamil", 50000, 100) );
caja.push(new Billete("Veintemiles", "Veintemil", 20000, 100) );
caja.push(new Billete("Diezmiles", "Diezmil", 10000, 100) );
caja.push(new Billete("Cincomiles", "Cincomil", 5000, 100) );
caja.push(new Billete("Dosmiles", "Dosmil", 2000, 100) );
caja.push(new Billete("Miles", "Mil", 1000, 100) );
caja.push(new Billete("Quinientoes", "Quinientos", 500, 100) );
caja.push(new Billete("Docientoes", "Docientos", 200, 100) );
caja.push(new Billete("Cienes", "Cien", 100, 100) );
caja.push(new Billete("Cincuentas", "Cincuenta", 50, 100) );
caja.push(new Billete("Veintes", "Veinte", 20, 100) );
caja.push(new Billete("Diezes", "Diez", 10, 100) );
caja.push(new Billete("Cincos", "Cinco", 5, 100) );

var dinero;
var div;
var papeles;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
var f = document.getElementById("finalizar");
var m = document.getElementById("menu");
f.addEventListener("click", _ => {location.reload();});
b.addEventListener("click", entregarDinero);
