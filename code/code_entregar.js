var imagenes = [];
imagenes["Cienmil"] = "entregar/assets/img/cienmil.svg";
imagenes["Cincuentamil"] = "entregar/assets/img/cincuentamil.svg";
imagenes["Veintemil"] = "entregar/assets/img/veintemil.svg";
imagenes["Diezmil"] = "entregar/assets/img/diezmil.svg";
imagenes["Cincomil"] = "entregar/assets/img/cincomil.svg";
imagenes["Dosmil"] = "entregar/assets/img/dosmil.svg";
imagenes["Mil"] = "entregar/assets/img/mil.svg";
imagenes["Quinientos"] = "entregar/assets/img/quinientos.svg";
imagenes["Docientos"] = "entregar/assets/img/docientos.svg";
imagenes["Cien"] = "entregar/assets/img/cien.svg";
imagenes["Cincuenta"] = "entregar/assets/img/cincuenta.svg";
imagenes["Veinte"] = "entregar/assets/img/veinte.svg";
imagenes["Diez"] = "entregar/assets/img/diez.svg";
imagenes["Cinco"] = "entregar/assets/img/cinco.svg";

var imagenesPlural = [];
imagenesPlural["Cienmiles"] = "entregar/assets/img/cienmiles.svg";
imagenesPlural["Cincuentamiles"] = "entregar/assets/img/cincuentamiles.svg";
imagenesPlural["Veintemiles"] = "entregar/assets/img/veintemiles.svg";
imagenesPlural["Diezmiles"] = "entregar/assets/img/diezmiles.svg";
imagenesPlural["Cincomiles"] = "entregar/assets/img/cincomiles.svg";
imagenesPlural["Dosmiles"] = "entregar/assets/img/dosmiles.svg";
imagenesPlural["Miles"] = "entregar/assets/img/miles.svg";
imagenesPlural["Quinientoes"] = "entregar/assets/img/quinientoes.svg";
imagenesPlural["Docientoes"] = "entregar/assets/img/docientoes.svg";
imagenesPlural["Cienes"] = "entregar/assets/img/cienes.svg";
imagenesPlural["Cincuentas"] = "entregar/assets/img/cincuentas.svg";
imagenesPlural["Veintes"] = "entregar/assets/img/veintes.svg";
imagenesPlural["Diezes"] = "entregar/assets/img/diezes.svg";
imagenesPlural["Cincos"] = "entregar/assets/img/cincos.svg";

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
