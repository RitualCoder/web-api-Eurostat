function display_salaire(x, index_select) {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/TEC00001?format=JSON&lang=EN&Time=2018')
    .then(res => res.json())
    .then(data => {
        var result = make_array(data);
        
    })
}



function make_array(data) {
    var result = [];
    for (var i in data.value) {
        result.push(data.value[i]);
    }
    console.log(result);
    return result;
}

function do_index(data) {
    var i = 0;
    data.forEach(element => {
        country_id[i] = data.dimension.geo.category.index.country[i];
        i++;
    });
    console.log("ok");
}

display_salaire(0,0);

let country = ['AL', 'AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RS', 'SE', 'SI', 'SK', 'TR', 'UK'];
let country_id = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var AL = "Albania";
var AT = "Austria";
var BE = "Belgium";
var BG= "Bulgaria";
var CH= "Switzerland";
var CY= "Cyprus";
var CZ= "Czechia";
var DE= "Germany (until 1990 former territory of the FRG)";
var DK= "Denmark";
var EE= "Estonia";
var EL= "Greece";
var ES= "Spain";
var FI= "Finland";
var FR= "France";
var HR= "Croatia";
var HU= "Hungary";
var IE= "Ireland";
var IS= "Iceland";
var IT= "Italy";
var LT= "Lithuania";
var LU= "Luxembourg";
var MT= "Malta";
var NL= "Netherlands";
var NO= "Norway";
var PL= "Poland";
var PT= "Portugal";
var RO= "Romania";
var RS= "Serbia";
var SE= "Sweden";
var SI= "Slovenia";
var SK= "Slovakia";
var TR= "Türkiye";
var UK= "United Kingdom";

