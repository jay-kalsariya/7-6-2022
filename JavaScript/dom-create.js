
var newElement =document.createElement("h2");

var newText =document.createTextNode("This is a Text");

//var newComment =document.createComment("This is jast comment"); 


 newElement.appendChild(newText);

//document.getElementById("test").appendChild(newElement);
 
//document.getElementById("test").appendChild(newComment);

var newtext ="This is Heading";

var target =document.getElementById("test");
target.insertAdjacentElement("beforend",newElement); 


//console.log(newElement);
