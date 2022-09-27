/* ABONDANA LA PAGINA*/
window.onbeforeunload = preguntarAntesDeSalir;
function preguntarAntesDeSalir()
{
    return "¿Seguro que quieres salir?";
}
/* PREGUNTA DE EDAD*/
let edad = Number(prompt("Introduce tu edad."));
if (edad >= 18) {
    alert("puedes entrar, eres mayor de edad.");
} else {
    alert("no eres mayor de edad, estas bajo su responsabilidad.");
};
