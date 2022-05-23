let xmlhttp = new XMLHttpRequest();
let url = "/8IO7S_Dashboard/src/Dashboard/_storage/info.json"

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status ===200){
        let myArr = JSON.parse(xmlhttp.responseText);
        console.log(myArr.ticket);
        for (i = 0; i <= myArr.tickets.length; i++){
            var p1 = document.createElement('p');
            var t1 = document.createTextNode(myArr.tickets[i]["key"]);
            p1.appendChild(t1);
            var Ausgabebereich = document.getElementById('main');
            Ausgabebereich.appendChild(p1);
            console.log( myArr.tickets[i]["key"]);
        };
    };
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


let elem = document.querySelector('h3').innerHTML = "250";


