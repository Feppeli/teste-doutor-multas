function creatPage(){

    // Recebendo o valor do veículo
    var veiculo = document.querySelector('#veiculo')
    var veiculoValue = veiculo.options[veiculo.selectedIndex].value;
    console.log(veiculoValue)


    // mostrando a página de acordo com o valor do veiculo
    var redirecionandoHtml = document.createElement("div");
    redirecionandoHtml.innerHTML = `
    <object type="text/html" data="./paginasApi/${veiculoValue}.html"></object>
    `
    document.getElementById('paginaFipe').appendChild(redirecionandoHtml)
}