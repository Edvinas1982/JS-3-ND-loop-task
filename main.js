// Turime masyvą, kurio kiekvienas elementas yra masyvas iš keturių elementų:
// a) data kaip tekstinė eilutė, pvz: ‘2017-07-06 19:59:45’
// b) automobilio numeris, pvz.: ‘LRS123’
// c) automobilio nuvažiuotas kelias metrais
// d) automobilio sugaištas laikas sekundėmis
// Išveskite visus automobilius į html lentelę kartu su suskaičiuotu automobilio greičiu
// kilometrais per valandą.

var masyvas = [
    ['2017-07-06 19:59:45', 'LRS123', 1500, 28],
    ['2018-12-14 1:05:00', 'KOK331', 2520, 71],
    ['1997-05-28 14:22:09', 'AZS444', 9500, 381],
    ['1922-04-18 7:45:12', 'WOW999', 300, 89]
]

// var data = document.querySelector('.data');
// var numeris = document.querySelector('.numeris');
// var atstumas = document.querySelector('.atstumas');
// var laikas = document.querySelector('.laikas');
// var greitisKmh = document.querySelector('.greitisKmh')

// // var greitis = Math.round((masyvas[0][2] / masyvas[0][3])*3.6)
// // console.log(greitis)

// // for (var j = 0; j < masyvas.length; j++) {
// //     laikasDiv.innerHTML += '<h3>' + masyvas[j][0] + '</h3>';
// // }

// for (var i = 0; i < masyvas.length; i++) {
//     data.innerHTML += '<th>' + masyvas[i][0] + '</th>';
//     numeris.innerHTML += '<th>' + masyvas[i][1] + '</th>';
//     atstumas.innerHTML += '<th>' + masyvas[i][2] + '</th>';
//     laikas.innerHTML += '<th>' + masyvas[i][3] + '</th>';
//     var greitis = Math.round((masyvas[i][2] / masyvas[i][3])*3.6);
//     greitisKmh.innerHTML += '<th>' + greitis + '</th>';
// }

// Attempt nr2

var table = document.getElementById('table');

for ( i = 0; i < masyvas.length; i++) {
    masyvas[i].push(Math.round((masyvas[i][2] / masyvas[i][3])*3.6));
    var row = table.insertRow(table.length);
    for (var j = 0; j < masyvas[i].length; j++) {
        var cell = row.insertCell(j);
        cell.innerHTML = masyvas[i][j];
    }
}