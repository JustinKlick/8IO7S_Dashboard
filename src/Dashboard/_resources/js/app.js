let xmlhttp = new XMLHttpRequest();
let url = "/8IO7S_Dashboard/src/Dashboard/_storage/info.json"

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status ===200){
        var myArr = JSON.parse(xmlhttp.responseText);
        let openTickets = 0;
        var newCurrentWeek = 0;
        var closedCurrentWeek = 0;
        var customerSetisfaction = 0;
        var i = 0  

        for (i in myArr["issues"]){
            var weekDay = new Date();
            var currentMO = Date.parse(new Date(weekDay.getTime() + (0 - ((weekDay.getDay()+6)%7))*86400000));
            var currentSO = Date.parse(new Date(weekDay.getTime() + (6 - ((weekDay.getDay()+6)%7))*86400000));

            if (myArr["issues"][i]["fields"]["status"]["statusCategory"]["name"] != "Done"){
                openTickets = openTickets + 1
                console.log(openTickets)
            }
            var ticketDate = Date.parse(myArr["issues"][i]["fields"]["created"])
            if (ticketDate >= currentMO && ticketDate <= currentSO){
                newCurrentWeek = newCurrentWeek + 1
            };
            if (myArr["issues"][i]["fields"]["status"]["statusCategory"]["name"] == "Done" && ticketDate >= currentMO && ticketDate <= currentSO){
                closedCurrentWeek = closedCurrentWeek + 1
            };
            
            var p = document.createElement("p");
            var small = document.createElement("small");
            var h3 = document.createElement("h3");
            small.appendChild(document.createTextNode("small note"));
            h3.appendChild(document.createTextNode("big Node"));
            p.appendChild(document.createTextNode("test"));
            var div = document.createElement("div");
            div.className = "queueElement";
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(small);
            
            var queueElement = document.getElementById("ticketQueue").appendChild(div);


        };
        console.log(openTickets, newCurrentWeek, closedCurrentWeek);

        document.getElementById('openTicketsCount').innerHTML = openTickets;
        document.getElementById('newTickets').innerHTML = newCurrentWeek;
        document.getElementById('closedTicket').innerHTML = closedCurrentWeek;
        document.getElementById('customerSatisfaction').innerHTML = customerSetisfaction;
        

        
    };

};


xmlhttp.open("GET", url, true);
xmlhttp.send();