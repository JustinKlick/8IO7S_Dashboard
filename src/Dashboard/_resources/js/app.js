let xmlhttp = new XMLHttpRequest();
let url = "/8IO7S_Dashboard/src/Dashboard/_storage/info.json"

xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status ===200){
        var myArr = JSON.parse(xmlhttp.responseText);
        var openTickets = 0;
        var currentWeek = 0;
        var newCurrentWeek = 0;
        var closedCurrentWeek = 0;
        var i = 0
        var closedTickets = 0
        for (i in myArr["issues"]){
            var weekDay = new Date();
            var currentMO = Date.parse(new Date(weekDay.getTime() + (0 - ((weekDay.getDay()+6)%7))*86400000));
            var currentSO = Date.parse(new Date(weekDay.getTime() + (6 - ((weekDay.getDay()+6)%7))*86400000));

            if (myArr["issues"][i]["fields"]["status"]["statusCategory"]["name"] != "Done"){
                openTickets = openTickets + 1
            }
            var ticketDate = Date.parse(myArr["issues"][i]["fields"]["created"])
            if (ticketDate >= currentMO && ticketDate <= currentSO){
                newCurrentWeek = newCurrentWeek + 1
            };
            if (myArr["issues"][i]["fields"]["status"]["statusCategory"]["name"] == "Done" && ticketDate >= currentMO && ticketDate <= currentSO){
                closedCurrentWeek = closedCurrentWeek + 1
            };


        };
        console.log(openTickets, newCurrentWeek, closedCurrentWeek);
        console.log(myArr)
        let openTicketCount = document.querySelector('OpenTicketsCount').innerHTML = openTickets; 
        let newTicktes = document.querySelector('newTickets').innerHTML = newCurrentWeek;
        let closedTickets = document.querySelector('closedTicket').innerHTML = closedCurrentWeek;

    };

};


xmlhttp.open("GET", url, true);
xmlhttp.send();


//let elem = document.querySelector('h3').innerHTML = "250";


