const fabricantes = [
    'Alfa Romeo', 'Caoa, Chery',
    'Chevrolet',  'Fiat',
    'Ford',       'Hyundai',
    'Land Rover', 'Mercedes Benz',
    'Opel',       'Renault',
    'Toyota',     'Volkswagen'
]

function getFabricateOption(){
    var select = document.getElementById('fabricante')
    var value = select.options[select.selectedIndex].value;
    
    console.log(value)
}