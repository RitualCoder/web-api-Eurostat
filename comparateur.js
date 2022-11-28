/*********************** FOR MEDIAN SALARY ***********************/

function catch_salary() {
    var salary1 = [];
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_agt21?format=JSON&lang=EN&sex=T&indic_se=ERN&isco88=TOTAL&age=TOTAL&unit=EUR')
    .then(res => res.json())
    .then(data => {
        for (const i in data.value) {
            // console.log(`${i}: ${data.value[i]}`);
            salary1.push(data.value[i]);
        }
    });
    return salary1;
}

function display_salary(array, x, index_select) {
    if (index_select == 1) {
        sal1.textContent = `${(array[x])}€/mois`;
    }
    if (index_select == 2) {
        sal2.textContent = `${array[x]}€/mois`;
    }
}

/************************ FOR POPULATION *************************/

function catch_pop() {
    var population1 = [];
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tps00001?format=JSON&lang=EN&Time=2021')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        for (const i in data.value) {
            // console.log(`${i}: ${data.value[i]}`);
            population1.push(data.value[i]);
        }
        // console.log(population1);
    });
    return population1;
}

function display_pop(array, x, index_select) {
    if (index_select == 1) {
        // console.log(x);
        pop1.textContent = `${(array[x] / 1000000).toFixed(2)} millions`;
    }
    if (index_select == 2) {
        pop2.textContent = `${(array[x] / 1000000).toFixed(2)} millions`;
    }
}

/**************************** FOR PIB ***************************/

function catch_pib() {
    var pib1 = [];
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/NAMA_10_GDP?format=JSON&lang=EN&time=2019&unit=CP_MEUR&na_item=B1GQ')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        for (const i in data.value) {
            // console.log(`${i}: ${data.value[i]}`);
            pib1.push(data.value[i]);
        }
        // console.log(pib1);
    })
    return pib1;
}

function display_pib(array, x , index_select) {
    if (index_select == 1) {
        pib1.textContent = `${(array[x] / 1000).toFixed(2)} milliards €`;
    }
    if (index_select == 2) {
        pib2.textContent = `${(array[x] / 1000).toFixed(2)} milliards €`;
    }
}

/**************************** FOR LIFE **************************/

function catch_life() {
    var life1 = [];
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/DEMO_MLEXPEC?format=JSON&lang=EN&time=2018')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        for (const i in data.value) {
            // console.log(`${i}: ${data.value[i]}`);
            life1.push(data.value[i]);
        }
        // console.log(life1);
    })
    return life1;
}

function display_life(array, x , index_select) {
    if (index_select == 1) {
        vie1.textContent = `${array[x]} ans`;
    }
    if (index_select == 2) {
        vie2.textContent = `${array[x]} ans`;
    }
}

/************************** FOR EDUCATION ************************/

function catch_education() {
    var edu1 = [];
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/EDUC_UOE_FINE04?format=JSON&lang=EN&time=2018&isced11=ED5-8&unit=MIO_EUR')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        for (const i in data.value) {
            // console.log(`${i}: ${data.value[i]}`);
            edu1.push(data.value[i]);
        }
        // console.log(edu1);
    })
    return edu1;
}

function display_education(array, x , index_select) {
    if (index_select == 1) {
        edu1.textContent = `${array[x].toLocaleString()} millions €`;
    }
    if (index_select == 2) {
        edu2.textContent = `${array[x].toLocaleString()} millions €`;
    }
}

/*************************** FOR MEDICAL *************************/

function catch_medical() {
    var med1 = [];
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/TPS00207?format=JSON&lang=EN&time=2019&unit=MIO_EUR')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for (const i in data.value) {
            // console.log(`${i}: ${data.value[i]}`);
            med1.push(data.value[i]);
        }
        console.log(med1);
    })
    return med1;
}

function display_medical(array, x , index_select) {
    if (index_select == 1) {
        med1.textContent = `${array[x].toLocaleString()} millions €`;
    }
    if (index_select == 2) {
        med2.textContent = `${array[x].toLocaleString()} millions €`;
    }
}


function convert_index_population(x) {
    if (x > 1 && x < 16) {
        x = x - 2;
    }
    else if (x == 33) {
        x = x + 3;
    }
    else if (x == 34) {
        x = x + 2;
    }
    return x;
}

function convert_index_pib(x) {
    if (x > 1 && x < 15){
        x = x + 1;
    }
    else if (x >= 15 && x < 32){
        x = x + 2;
    }
    else if (x == 32) {
        x = x + 3;
    }
    else if (x == 33) {
        x = x + 4;
    }
    return x;
}

function convert_index_edu(x) {
    // console.log(x);
    if (x > 1 && x < 15){
        x = x - 3;
    }
    else if (x >= 15 && x < 33){
        x = x - 2;
    }
    else if (x == 33) {
        x = x - 1;
    }
    // console.log(x);
    return x;
}

function convert_index_med(x) {
    console.log(x);
    if (x >= 15 && x < 32){
        x = x + 1;
    }
    else if (x == 32) {
        x = x + 2;
    }
    else if (x == 33) {
        x = x + 3;
    }
    console.log(x);
    return x;
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

var el1 = document.getElementById('country1');
var array_salary = catch_salary();
var array_population = catch_pop();
var array_pib = catch_pib();
var array_life = catch_life();
var array_education = catch_education();
var array_medical = catch_medical();

console.log(array_population);
el1.addEventListener('change', function() {
    display_salary(array_salary, parseInt(this.value), 1);
    display_pop(array_population, convert_index_population(parseInt(this.value)), 1);
    display_pib(array_pib, convert_index_pib(parseInt(this.value)), 1);
    display_life(array_life, convert_index_pib(parseInt(this.value)), 1);
    display_education(array_education, convert_index_edu(parseInt(this.value)), 1);
    display_medical(array_medical, convert_index_med(parseInt(this.value)), 1);
}, false);

var el2 = document.getElementById('country2');
el2.addEventListener('change', function() {
    display_salary(array_salary, parseInt(this.value), 2);
    display_pop(array_population, convert_index_population(parseInt(this.value)), 2);
    display_pib(array_pib, convert_index_pib(parseInt(this.value)), 2);
    display_life(array_life, convert_index_pib(parseInt(this.value)), 2);
    display_education(array_education, convert_index_edu(parseInt(this.value)), 2);
    display_medical(array_medical, convert_index_med(parseInt(this.value)), 2);
}, false);