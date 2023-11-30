function sumar(){
    var v1 = document.getElementById('txtV1').value;   
    var v2 = document.getElementById('txtV2').value;  

    //parseInt es una función de js que convierte un texto a número 
    var sm = parseInt(v1) / parseInt(v2);
    document.getElementById('txtRes').value = sm;
    //Aplicando un color
    document.getElementById('txtRes').style.backgroundColor="#A3CFF5";
}
function limpiar(){
    document.getElementById('txtV1').value="";
    document.getElementById('txtV2').value="";
    document.getElementById('txtRes').value="";
    document.getElementById('txtV1').focus(); //ubica el cursor
    document.getElementById('txtRes').style.backgroundColor="#F9F1DB";   
}