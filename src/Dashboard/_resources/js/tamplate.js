newElements = function(item){
    var p1 = document.createElement('p');
    var t1 = document.createTextNode(item);
    p1.appendChild(t1);
    var Ausgabebereich = document.getElementById('main');
    Ausgabebereich.appendChild(p1);
}