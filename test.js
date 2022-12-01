/* function catch_salaire(name, index_select) {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/TEC00001?format=JSON&lang=FR&Time=2018')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        set_codename(data);
        set_index(data);
        display_salaire(data, name)
    })
}

function set_codename (data) {
    for (const i in data.dimension.geo.category.label) {
        country_name.set(data.dimension.geo.category.label[i], i);
    }
}

function set_index (data) {
    for (const i in data.dimension.geo.category.index) {
        //console.log(i);
        id.set(i, data.dimension.geo.category.index[i]);
    }
}

function display_salaire (data, x) {
    var codename;
    country_name.forEach(function(values, keys) {
        if (keys == x) {
            codename = values;
        }
    })
    id.forEach(function(values, keys) {
        if (codename == keys) {
            display.textContent = `${data.value[values]} €`;
        }
    })
}

const country_name = new Map();
const id = new Map();

catch_salaire(0,0);

console.log(country_name);
console.log(id);

var el1 = document.getElementById('country1');
el1.addEventListener('change', function() {
    catch_salaire(this.value, 0);
}, false);


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

 */

/*********************** FOR MEDIAN SALARY ***********************/
let jsondata = {};
const country_name = new Map();
const id = new Map();

function catch_salaire () {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_agt21?format=JSON&lang=FR&sex=T&indic_se=ERN&isco88=TOTAL&age=TOTAL&unit=EUR')
    .then(res => res.json())
    .then(data => {
        set_codename (data);
        set_index (data);
        jsondata = data;
        console.log("deuxieme then");
    });
}


function set_codename (data) {
    for (const i in data.dimension.geo.category.label) {
        country_name.set(data.dimension.geo.category.label[i], i);
    }
}

function set_index (data) {
    for (const i in data.dimension.geo.category.index) {
        //console.log(i);
        id.set(i, data.dimension.geo.category.index[i]);
    }
}


function display_salaire (data, x) {
    var codename;
    country_name.forEach(function(values, keys) {
        if (keys == x) {
            codename = values;
        }
    })
    console.log(codename);
    id.forEach(function(values, keys) {
        if (codename == keys) {
            display.textContent = `${data.value[values]} €`;
        }
    })
}

var el1 = document.getElementById('country1');

catch_salaire();
console.log("Après la fonc");
console.log("Après la ");

el1.addEventListener('change', function() {
    console.log(country_name);
    console.log(this.value);
    display_salaire (jsondata, this.value);
    //console.log(this.value);
}, false);
