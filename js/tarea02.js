// xpre es una variable global
var xpre = 8.40; // Por defecto es el valor de Lurin

function mostrar_precio() {
    // xd es una variable local
    var xd = document.getElementById('txtDistrito').value;
    
    // Utilicé un switch para hacer el código más limpio
    switch (xd) {
        case "1": // Aceite primor premium
            xpre = 8.40;
            break;
        case "2": // Vinagre Blanca
            xpre = 7.60;
            break;
        case "3": // Leche Gloria uht
            xpre = 5.00;
            break;
        case "4": // Panetones D´Onofrio
            xpre = 10.00;
            break;
        case "5": // Filete de Atún
            xpre = 6.20;
            break;
        default:
            xpre = 8.40; // Valor por defecto
    }

    document.getElementById('numP1').value = xpre;
}

function calcular() {
    var xres = "";
    // Obtener valores de los números
    var p1 = parseFloat(document.getElementById('numP1').value);
    var p2 = parseFloat(document.getElementById('numP2').value);

    // Validar que p1 y p2 sean números
    if (isNaN(p1) || isNaN(p2)) {
        alert("Ingresa valores numéricos válidos.");
        return;
    }

    // Hallar el producto
    var xprom = p1 * p2;

    console.log("Producto: " + xprom);

    // Colocar el producto
    document.getElementById('txtNota').value = xprom.toFixed(2);
}

function limpiar() {
    document.getElementById('numP1').value = "";
    document.getElementById('numP2').value = "";
    document.getElementById('txtNota').value = "";
    document.getElementById('txtDistrito').value = "1"; // Restablecer a la opción por defecto
    document.getElementById('txtDistrito').focus(); // Focalizar
}