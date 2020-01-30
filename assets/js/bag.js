var contador = document.querySelector('.badge');
$(".count_click").click(function () {

    var numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero;

});
