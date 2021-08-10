var i = 0;
var txt = '<?php   '; /* The text */
var speed = 400; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ah-navphp-top").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i === txt.length) {
    document.getElementById('showme').style.display = 'block';
  }
}
typeWriter();
document.getElementById('ah-navphp-bot').innerText = '?>';

