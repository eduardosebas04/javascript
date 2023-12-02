function calcular() {
    var xres = "";
    var xnota = document.getElementById('txtNota').value;
    if (parseFloat(xnota) >= 11) {
        xres = "Aprobado";
        document.getElementById('txtRes').style.color = "blue";
    } else {
        xres = "Desaprobado";
        document.getElementById('txtRes').style.color = "red";
    }
    document.getElementById('txtRes').value = xres;
}

function limpiar() {
    document.getElementById('txtNota').value = "";
    document.getElementById('txtRes').value = "";
    document.getElementById('txtNota').focus();
}