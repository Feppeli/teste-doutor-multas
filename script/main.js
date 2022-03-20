$(document).ready(function () {
  var urlBase = `//fipe.parallelum.com.br/api/v1/motos/marcas`;

  /** Marcas**/

  $.getJSON(urlBase, function (data) {
    var items = ["<option value=\"\">ESCOLHA UMA MARCA</option>"];
    $.each(data, function (key, val) {
      items += ("<option value='" + val.codigo + "'>" + val.nome + "</option>");
    });
    $("#marcas").html(items);
  });

  /** Veiculo**/

  $("#marcas").change(function () {
    $.getJSON(urlBase + "/" + jQuery("#marcas").val() + "/" + "modelos", function (data) {
      var items = ["<option value=\"\">ESCOLHA UM VEICULO</option>"];
      $.each(data.modelos, function (key, val) {
        items += ("<option value='" + val.codigo + "'>" + val.nome + "</option>");
      });
      $("#modelos").html(items);
    });
  });

  /** Ano**/

  $("#modelos").change(function () {
    $.getJSON(urlBase + "/" + jQuery("#marcas").val() + "/" + "modelos" + "/" + jQuery("#modelos").val() + "/" + "anos", function (data) {
      var items = ["<option value=\"\">ESCOLHA O ANO</option>"];
      $.each(data, function (key, val) {
        console.log(data)
        items += ("<option value='" + val.codigo + "'>" + val.nome + "</option>");
      });
      $("#ano").html(items);
    });
  });

});


// # Tipo de  veículo
function getSelectVeiculo() {
  let selectVeiculos = document.querySelector('#veiculo')
  console.log(selectVeiculos)

  let selectVeiculosValue = selectVeiculos.options[selectVeiculos.selectedIndex].value;
  console.log(selectVeiculosValue)
  console.log(typeof(selectVeiculosValue))
}
