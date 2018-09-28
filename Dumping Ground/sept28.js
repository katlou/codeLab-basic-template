// WARNING!!!!!!!!!!! THIS CODE DOES NOT WORK!!!!!!!!!!!!!!

var name = "Lara Teich";
var i = {'index': 0};


var myVar = setInterval(printName(i), 1000);

function printName(i) {
  if (i.index < name.length) {
    console.log(name[i.index]);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(name[i.index]);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("first").appendChild(node);     // Append <li> to <ul> with id="myList"
  }

  i.index += 1;
}
