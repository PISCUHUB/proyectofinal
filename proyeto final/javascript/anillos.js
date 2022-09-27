/*hoja de calculo*/
function calculo() {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var total30 = (1200 * cantidad) * 0.30;
    var total_net1 = (1200 * cantidad) - total30;
    var total15 = (1200 * cantidad) * 0.15;
    var total_net2 = (1200 * cantidad) - total15;
    if (cantidad >= 10) {
        document.getElementById("precio__total").value = total_net1;
        document.getElementById("descuento").value = 30 + "%";

    } else {
        document.getElementById("precio__total").value = total_net2;
        document.getElementById("descuento").value = 15 + "%";
    }
}
/* ABONDANA LA PAGINA*/
window.onbeforeunload = preguntarAntesDeSalir;
function preguntarAntesDeSalir()
{
    return "¿Seguro que quieres salir?";
}
