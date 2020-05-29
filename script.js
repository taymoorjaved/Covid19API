window.addEventListener('DOMContentLoaded', (event) => {
    
        fetch("https://api.covid19api.com/summary")
            .then(response => response.json())
            .then(resultObj => {
                let myTable = document.getElementById("my-table");
            
                let allKeys = Object.keys(resultObj);
                let mykeys = Object.values(resultObj.Countries);
                let mynew = Object.keys(mykeys[0]);

                for (v = 0; v < mynew.length; v++) {

                    if (mynew[v] !== "CountryCode" && mynew[v] !== "Slug" && mynew[v] !== "NewConfirmed" && mynew[v] !== "NewDeaths" && mynew[v] !== "NewRecovered") {
                        let tableHeader = document.getElementById('table-header');
                        let headerrow = document.createElement('th');
                        headerrow.onclick = function (e){
                          debugger;                          
                        }
                        headerrow.innerHTML = mynew[v];
                        tableHeader.appendChild(headerrow);
                    }
                }

                resultObj.Countries.forEach((obj) => { 


                    let currentObjKeys = Object.keys(obj);

                    let row = document.createElement("tr"); 

                    currentObjKeys.forEach((key) => {
                        if (key !== "CountryCode" && key !== "Slug" && key !== "NewConfirmed" && key !== "NewDeaths" && key !== "NewRecovered"){
                            let td = document.createElement('td');
                            td.innerHTML = obj[key];
                            row.appendChild(td);
                        }
                    })
                    myTable.appendChild(row);
                });               
            })
            .catch(error => console.log('error', error));
    
    
    });

    document.getElementById("search").addEventListener('keyup', (event) => {
        var searchVal = event.currentTarget.value;

        var trArr = document.querySelectorAll('#my-table tr');
        
        for (i = 0; i < trArr.length; i++) {
            let currentTr = trArr[i];
            let firstTd = currentTr.querySelectorAll('td')[0];

            if (firstTd.innerHTML.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1) {
                currentTr.style.display = ''
            } else {
                currentTr.style.display = 'none'
            }
        }
        
    })

    function sortbyTotalConfirmed() {
    let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("tables");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortbyTotalDeaths() {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tables");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2];
            y = rows[i + 1].getElementsByTagName("TD")[2];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortbyTotalRecovered() {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tables");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows; debugger;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[3];
            y = rows[i + 1].getElementsByTagName("TD")[3];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}



setTimeout(function () { 
var el = document.querySelectorAll("#table-header th");

for (var j = 0; j < el.length; j++) {
    el[j].addEventListener('click', function () { 
    
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("tables");
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[1];
                y = rows[i + 1].getElementsByTagName("TD")[1];
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }

    }
    
    
    , false);
}
}, 1000);
