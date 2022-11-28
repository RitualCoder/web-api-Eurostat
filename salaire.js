function display_salaire(x) {
    fetch('https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/earn_ses_agt21?format=JSON&lang=EN&')
    .then(res => res.json())
    .then(data => {
        console.log(data.dimension.geo.category.index);
        result3.textContent = `${data.value[x]}€/mois`;
        // increment index to load the correct value in the JSON
        x = x + 34;
        result1.textContent = `${data.value[x]}€/mois`;
        x = x + 34;
        result2.textContent = `${data.value[x]}€/mois`;
    })
}

function invert_color(percent, name) {
    var largeur = window.innerWidth;
    if (largeur > 1143) {
        document.getElementById(name).style.filter=`invert(${percent})`;
    }
}

result1.textContent = `0€/mois`;
result2.textContent = `0€/mois`;
result3.textContent = `0€/mois`;
var el = document.getElementById('country-select');
el.addEventListener('change', function() {
    display_salaire(parseInt(this.value));
}, false);
