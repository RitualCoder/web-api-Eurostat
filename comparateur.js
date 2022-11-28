function display_salaire(x, index_select) {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_agt21?format=JSON&lang=EN')
    .then(res => res.json())
    .then(data => {
        if (index_select == 1) {
            sal1.textContent = `${data.value[x]}€/mois`;
        }
        if (index_select == 2) {
            sal2.textContent = `${data.value[x]}€/mois`;
        }
    })
}

function display_pop(x, index_select) {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tps00001?format=JSON&lang=EN&Time=2021')
    .then(res => res.json())
    .then(data => {
        if (index_select == 1) {
            pop1.textContent = `${(data.value[x] / 1000000).toFixed(2)} millions`;
        }
        if (index_select == 2) {
            pop2.textContent = `${(data.value[x] / 1000000).toFixed(2)} millions`;
        }
    })
}

function display_pib(x, index_select) {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tec00001?format=JSON&lang=EN&time=2019')
    .then(res => res.json())
    .then(data => {
        if (index_select == 1) {
            console.log(data);
            console.log(x);
            pib1.textContent = `${(data.value[x] / 1000).toFixed(2)} milliards`;
        }
        if (index_select == 2) {
            pib2.textContent = `${(data.value[x] / 1000).toFixed(2)} milliards`;
        }
    })
}

function convert_index_population(x) {
    if (x > 1 && x < 16) {
        x = x - 1;
    }
    if (x >= 16 && x <= 32) {
        x = x + 1;
    }
    if (x == 33) {
        x = x + 2;
    }
    if (x == 34) {
        x = x + 3;
    }
    console.log("ok", x);
    return x;
}

function convert_index_pib(x) {
    console.log(x);
    if (x == 0){
        x = 86;
    }
    else if (x >= 5 && x < 15) {
        x = x + 85;
    }
    else if (x >= 15 && x < 33) {
        x = x + 87;
    }
    else if (x == 33) {
        x = x + 88;
    }
    else if (x == 34) {
        x = x + 89;
    }
    console.log("ok", x);
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
el1.addEventListener('change', function() {
    display_salaire(parseInt(this.value), 1);
    display_pop(convert_index_population(parseInt(this.value)), 1);
    display_pib(convert_index_pib(parseInt(this.value)), 1);
}, false);

var el2 = document.getElementById('country2');
el2.addEventListener('change', function() {
    display_salaire(parseInt(this.value), 2);
    display_pop(convert_index_population(parseInt(this.value)), 2);
    display_pib(convert_index_pib(parseInt(this.value)), 2);
}, false);