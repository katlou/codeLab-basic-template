var i = 0;
var txt = 'Lara Teich';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("first").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
