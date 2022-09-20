var inputs = document.getElementsByClassName("formulario__input");
for (var i = 0; i < inputs.lendth; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.lendth >= 1) {
            this.nextElementSibling.classlist.add("fijar");
        } else {
            this.nextElementSibling.classlist.remove("fijar");
        }
    })
}