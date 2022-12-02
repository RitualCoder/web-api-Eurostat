/*********************** FOR MEDIAN SALARY ***********************/
let jsondata_sal = {};
const country_name_sal = new Map();
const sal_id = new Map();

function catch_salaire () {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_agt21?format=JSON&lang=FR&sex=T&indic_se=ERN&isco88=TOTAL&age=TOTAL&unit=EUR')
    .then(res => res.json())
    .then(data => {
        set_codename (data, country_name_sal);
        set_index (data, sal_id);
        jsondata_sal = data;
    });
}

/************************ FOR POPULATION *************************/
let jsondata_pop = {};
const country_name_pop = new Map();
const id_pop = new Map();

function catch_pop() {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tps00001?format=JSON&lang=FR&Time=2020')
    .then(res => res.json())
    .then(data => {
        set_codename (data, country_name_pop);
        set_index (data, id_pop);
        jsondata_pop = data;
    });
}

/**************************** FOR PIB ***************************/

let jsondata_pib = {};
const country_name_pib = new Map();
const id_pib = new Map();

function catch_pib() {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/NAMA_10_GDP?format=JSON&lang=FR&time=2019&unit=CP_MEUR&na_item=B1GQ')
    .then(res => res.json())
    .then(data => {
        set_codename (data, country_name_pib);
        set_index (data, id_pib);
        jsondata_pib = data;
    });
}

/**************************** FOR LIFE **************************/

let jsondata_life = {};
const country_name_life = new Map();
const id_life = new Map();

function catch_life() {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/DEMO_MLEXPEC?format=JSON&lang=FR&time=2018')
    .then(res => res.json())
    .then(data => {
        set_codename (data, country_name_life);
        set_index (data, id_life);
        jsondata_life = data;
    });
}

/************************** FOR EDUCATION ************************/

let jsondata_edu = {};
const country_name_edu = new Map();
const id_edu = new Map();

function catch_edu() {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/EDUC_UOE_FINE04?format=JSON&lang=FR&time=2018&isced11=ED5-8&unit=MIO_EUR')
    .then(res => res.json())
    .then(data => {
        set_codename (data, country_name_edu);
        set_index (data, id_edu);
        jsondata_edu = data;
    });
}

/*************************** FOR MEDICAL *************************/

let jsondata_med = {};
const country_name_med = new Map();
const id_med = new Map();

function catch_med() {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/TPS00207?format=JSON&lang=FR&time=2019&unit=MIO_EUR')
    .then(res => res.json())
    .then(data => {
        set_codename (data, country_name_med);
        set_index (data, id_med);
        jsondata_med = data;
    });
}


function set_codename (data, map) {
    for (const i in data.dimension.geo.category.label) {
        map.set(data.dimension.geo.category.label[i], i);
    }
}

function set_index (data, map) {
    for (const i in data.dimension.geo.category.index) {
        map.set(i, data.dimension.geo.category.index[i]);
    }
}


function display(data, x, map1, map2, id, format) { // data = JSON, x = select value (string), id = id for add content HTML
    let codename = map1.get(x);
    let values = map2.get(codename);
    document.getElementById(id).textContent = format.replace("{}", data.value[values].toLocaleString());
}

function change_text_color() {
    var array = ["pop1", "pop2", "pib1", "pib2","med1", "med2", "edu1", "edu2", "sal1", "sal2", "vie1", "vie2"];
    if (document.getElementById("pop1").textContent != "---" && document.getElementById("pop2").textContent != "---" ) {
        for (var i = 0; i < array.length; i+=2) {
            var str1 = document.getElementById(array[i]).textContent;
            var str2 = document.getElementById(array[i+1]).textContent;
            var res1 = str1.replace(/[A-z\s]+/g, "");
            var res2 = str2.replace(/[A-z\s]+/g, "");
            var res1 = res1.replace(",", ".");
            var res2 = res2.replace(",", ".");
            if (parseFloat(res1) > parseFloat(res2)) {
                document.getElementById(array[i]).style.color = "green";
                document.getElementById(array[i+1]).style.color = "red";
            }
            else if (parseFloat(res1) < parseFloat(res2)) {
                document.getElementById(array[i]).style.color = "red";
                document.getElementById(array[i+1]).style.color = "green";
            }
            else if (parseFloat(res1) == parseFloat(res2)) {
                document.getElementById(array[i]).style.color = "black";
                document.getElementById(array[i+1]).style.color = "black";
            }
        }
    }
}

pop1.textContent = `---`;
pop2.textContent = `---`;
pib1.textContent = `---`;
pib2.textContent = `---`;
sal1.textContent = `---`;
sal2.textContent = `---`;
edu1.textContent = `---`;
edu2.textContent = `---`;
med1.textContent = `---`;
med2.textContent = `---`;
vie1.textContent = `---`;
vie2.textContent = `---`;

console.log(parseFloat("12 000.4dgee".replace(/[A-z\s]+/g, "")));
catch_salaire();
catch_pop();
catch_pib();
catch_life();
catch_med();
catch_edu();
var el1 = document.getElementById('country1');

el1.addEventListener('change', function() {
    
    display(jsondata_pib, this.value, country_name_pib, id_pib, "pib1", "{} millions");
    display (jsondata_sal, this.value, country_name_sal, sal_id, "sal1", "{} €/mois");
    display(jsondata_pop, this.value, country_name_pop, id_pop, "pop1", "{} habitants");    
    display(jsondata_life, this.value, country_name_life, id_life, "vie1", "{} ans");
    display(jsondata_edu, this.value, country_name_edu, id_edu, "edu1", "{} millions");
    display(jsondata_med, this.value, country_name_med, id_med, "med1", "{} millions");
    change_text_color();
}, false);

var el2 = document.getElementById('country2');
el2.addEventListener('change', function() {
    display (jsondata_sal, this.value, country_name_sal, sal_id, "sal2", "{} €/mois");
    display(jsondata_pop, this.value, country_name_pop, id_pop, "pop2", "{} habitants");
    display(jsondata_pib, this.value, country_name_pib, id_pib, "pib2", "{} millions");
    display(jsondata_life, this.value, country_name_life, id_life, "vie2", "{} ans");
    display(jsondata_edu, this.value, country_name_edu, id_edu, "edu2", "{} millions");
    display(jsondata_med, this.value, country_name_med, id_med, "med2", "{} millions");
    change_text_color();
}, false); 