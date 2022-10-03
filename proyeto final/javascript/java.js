/* ABONDANA LA PAGINA*/
window.onbeforeunload = preguntarAntesDeSalir;
function preguntarAntesDeSalir() {
    return "¿Seguro que quieres salir?";
}
/* PREGUNTA DE EDAD*/
while (true) {
    var edad = Number(prompt("Introduce tu edad."));
    if (edad >= 18) {
        alert("puedes entrar, eres mayor de edad.");
        break;
    } else {
        alert("¡no eres mayor de edad ! , no puedes ingresar...");
    } 
    
}
