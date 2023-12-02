//xpre es una variable global
var xpre=100; //Por defecto es el valor de Lurin

function mostrar_precio(){   
    //xd es una variable local            
    var xd = document.getElementById('txtDistrito').value;
    // if anidado
    if (xd == "1") {   //Lurin
        xpre =100;
    } else {
        if (xd == "2") {   //Pachacamac
            xpre =150;
        } else {
            if (xd == "3") {   //Cañete
                xpre =200;
            }else{
                if (xd == "4") {   //Mala
                    xpre =210;
                }else{
                    xpre =190; //Chincha
                }
            }
        }
    }
    document.getElementById('txtPrecio').value= xpre;           
}

function procesar(){
    //largo, ancho , area, valor es una variable local
    var largo = document.getElementById('txtLargo').value;
    var ancho = document.getElementById('txtAncho').value;
    var area = parseInt(largo) * parseInt(ancho);              
    document.getElementById('txtArea').value = area;

    var valor = area * xpre;
    document.getElementById('txtValor').value = valor;

}