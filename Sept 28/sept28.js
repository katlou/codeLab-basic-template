// // WARNING!!!!!!!!!!! THIS CODE DOES NOT WORK!!!!!!!!!!!!!!
//
// var name = "Lara Teich";
// var i = {'index': 0};
//
//
// var myVar = setInterval(printName(i), 1000);
//
// function printName(i) {
//   if (i.index < name.length) {
//     console.log(name[i.index]);
//
//     var node = document.createElement("LI");                 // Create a <li> node
//     var textnode = document.createTextNode(name[i.index]);         // Create a text node
//     node.appendChild(textnode);                              // Append the text to <li>
//     document.getElementById("first").appendChild(node);     // Append <li> to <ul> with id="myList"
//   }
//
//   i.index += 1;
// }

// var testzone = document.querySelector("#first");
// var name = "Marlon";
//
// function loopMachine (data, delay, i) {
//   setTimeout(function(){
//     if (i<data.length) {
//       var newElement = document.createElement('p');
//       newElement.innerHTML = data[i];
//       testzone.appendChild(newElement);
//       loopMachine(name, delay, i+1);
//     } else {
//       return
//     }
//   }, delay)
// }
//
// loopMachine(name, 500, 0);

// var i = 0;
// var txt = 'Lara Teich';
// var speed = 500;
//
// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("first").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
//
// typeWriter();
