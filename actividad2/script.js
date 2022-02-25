// aqui adentro va a hacer lógica de javascript
// ahora los comentarios son con dos 

// deckarar variables
x = 5;
x= "this is possible somehow"
console.log("hola mundo menos ")
function ejemplo(){

    console.log("HOLA MUNDO")
   //alert("hola mundo alerta")
}

function boton2(){
    alert("BOTON 2")
}

function boton3(){
    alert("BOTON 3")

    // el documento se encuentra jerarquizado en una estructura que se llama DOM

    // podemos acceder a un elemento específico por medio del id
    document.getElementById("parrafito").innerHTML = "<h1> CAMBIE PARA SIEMPRE. <h1/>";
}

function cambiarDatoDeInput(){

    Texto = document.getElementById("textito").value
    Email = document.getElementById("lilEmail").value
    Password = document.getElementById("lilPassword").value
    alert("Tus datos son: \n\nTexto: "+Texto+"\nEmail: "+Email+"\nContraseña: "+Password+"\nTu IP: 192.228.17.57 \n\nSip, te acabo de doxear jsjs")
    
}