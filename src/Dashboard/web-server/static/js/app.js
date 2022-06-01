//import {key} from './key.js';


let xmlhttp = new XMLHttpRequest();
let url = "static/info.json"

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
            var ticketstatus = myArr["issues"][i]["fields"]["status"]["name"]
            if (ticketstatus != "Done" && ticketstatus != "Closed" && ticketstatus != "ready for update"){
                openTickets = openTickets + 1
            }
            var ticketDate = Date.parse(myArr["issues"][i]["fields"]["created"])
            if (ticketDate >= currentMO && ticketDate <= currentSO){
                newCurrentWeek = newCurrentWeek + 1
            };
            if (ticketstatus == "Done" && ticketstatus != "Closed" && ticketstatus != "ready for update" && ticketDate >= currentMO && ticketDate <= currentSO){
                closedCurrentWeek = closedCurrentWeek + 1
            };


            var tickettyp = myArr["issues"][i]["fields"]["issuetype"]["name"]

            var ticketkey = myArr["issues"][i]["fields"]["project"]["key"]
            if (myArr["issues"][i]["fields"]["customfield_10362"]== null || myArr["issues"][i]["fields"]["customfield_10362"]["completedCycles"].length == 0){
                var firstresponse = "wait for response";
            }else{
                var firstresponse = myArr["issues"][i]["fields"]["customfield_10362"]["completedCycles"][0]["remainingTime"]["millis"];
            }
            
            
            var ticketname = myArr["issues"][i]["fields"]["summary"]
            
            if (myArr["issues"][i]["fields"]["assignee"] == null){
                var ticketassignee = "not assigned"
            }else{
                var ticketassignee = myArr["issues"][i]["fields"]["assignee"]["displayName"]
            }
            if (myArr["issues"][i]["fields"]["duedate"] == null){
                var duedate = "no duedate set"
            }else{
                var duedate = myArr["issues"][i]["fields"]["duedate"]
            }
            var startofDay = weekDay.setUTCHours(0,0,0,0)

            
            var label = myArr["issues"][i]["fields"]["labels"][1]
            if(label == "queue"){
                

                var p = document.createElement("p");
                var small = document.createElement("small");
                var h3 = document.createElement("h3");
                small.appendChild(document.createTextNode(ticketassignee));
                h3.appendChild(document.createTextNode(ticketname));
                p.appendChild(document.createTextNode(ticketkey));
                var div = document.createElement("div");
                div.className = "command";
                div.appendChild(p);
                div.appendChild(h3);
                div.appendChild(small);
            
                var queueElement = document.getElementById("ticketQueue").appendChild(div);
            }
            
            if(ticketstatus != "Done"&& ticketstatus != "Decline" && ticketstatus != "Closed" && ticketstatus != "raw data Delatet" && firstresponse >= 0 && firstresponse <= 7200000 
                || tickettyp != "Feature request" && tickettyp != "Change request" && ticketstatus != "raw data Delatet" && ticketstatus != "Done"&& ticketstatus != "Decline" && ticketstatus != "Closed" && firstresponse >= 0 && firstresponse <= 86400000){

                var p = document.createElement("p");
                var small = document.createElement("small");
                var h3 = document.createElement("h3");
                small.appendChild(document.createTextNode(ticketassignee));
                h3.appendChild(document.createTextNode(ticketname));
                p.appendChild(document.createTextNode(ticketkey));
                var div = document.createElement("div");
                div.className = "sla";
                div.appendChild(p);
                div.appendChild(h3);
                div.appendChild(small);
            
                var queueElement = document.getElementById("ticketQueue").appendChild(div);
            }
            
            if(tickettyp != "Feature request" && tickettyp != "Change request" && ticketstatus != "Waiting for customer" && ticketstatus != "Done" && Date.parse(duedate)<= startofDay){
                

                var p = document.createElement("p");
                var small = document.createElement("small");
                var h3 = document.createElement("h3");
                small.appendChild(document.createTextNode(ticketassignee));
                h3.appendChild(document.createTextNode(ticketname));
                p.appendChild(document.createTextNode(ticketkey));
                var div = document.createElement("div");
                div.className = "dueToday";
                div.appendChild(p);
                div.appendChild(h3);
                div.appendChild(small);
            
                var queueElement = document.getElementById("ticketQueue").appendChild(div);
            }


            if(tickettyp != "Feature request" && tickettyp != "Change request" && ticketstatus != "Waiting for customer" && ticketstatus != "Done" && Date.parse(duedate) <= currentMO - 345600000){
                

                var p = document.createElement("p");
                var small = document.createElement("small");
                var h3 = document.createElement("h3");
                small.appendChild(document.createTextNode(ticketassignee));
                h3.appendChild(document.createTextNode(ticketname));
                p.appendChild(document.createTextNode(ticketkey));
                var div = document.createElement("div");
                div.className = "dueToday";
                div.appendChild(p);
                div.appendChild(h3);
                div.appendChild(small);
            
                var queueElement = document.getElementById("ticketQueue").appendChild(div);
            }

        };
        
        document.getElementById('openTicketsCount').innerHTML = openTickets;
        document.getElementById('newTickets').innerHTML = newCurrentWeek;
        document.getElementById('closedTicket').innerHTML = closedCurrentWeek;
        document.getElementById('customerSatisfaction').innerHTML = customerSetisfaction;
        
    };
    

};


xmlhttp.open("GET", url, true);
xmlhttp.send();