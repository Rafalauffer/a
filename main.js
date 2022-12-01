menuListArray = ["Pizza De Calabresa",
"Pizza De Abacaxi",
"Pizza De Quatro Queijos",
"Pizza Portuguesa",
"Pizza Extravaganza",
"Pizza De Frango",
"Pizza De Chocolate Com MM's"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}