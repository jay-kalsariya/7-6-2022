// var newElement =document.createElement("li");

// var newText =document.createTextNode("WOW new text");

// newElement.appendChild(newText);

var target = document.getElementById("list1").children[0];

var copyElement =target.cloneNode(true);

//var oldElements =target.children[1];

console.log(copyElement);

document.getElementById("test").appendChild(copyElement)

//target.removeChild(oldElements);