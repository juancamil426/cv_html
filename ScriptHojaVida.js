/* Modal 1*/
var modal1 = document.getElementById('myModal1');
var mod1 = document.getElementById('myModl1');
var span1 = document.getElementsByClassName('close')[0];

mod1.onclick = function() {
    modal1.style.display = 'block';
}

span1.onclick = function() {
    modal1.style.display = 'none';
}

/* Modal 2*/
var modal2 = document.getElementById('myModal2');
var mod2 = document.getElementById('myModl2');
var span2 = document.getElementsByClassName('close')[1];

mod2.onclick = function() {
    modal2.style.display = 'block';
}

span2.onclick = function() {
    modal2.style.display = 'none';
}

/* Modal 3*/

var modal3 = document.getElementById('myModal3');
var mod3 = document.getElementById('myModl3');
var span3 = document.getElementsByClassName('close')[2];

mod3.onclick = function() {
    modal3.style.display = 'block';
}

span3.onclick = function() {
    modal3.style.display = 'none';
}

/* Modal 4*/
var modal4 = document.getElementById('myModal4');
var mod4 = document.getElementById('myModl4');
var span4 = document.getElementsByClassName('close')[3];

mod4.onclick = function() {
    modal4.style.display = 'block';
}

span4.onclick = function() {
    modal4.style.display = 'none';
}

/* Modal 5*/
var modal5 = document.getElementById('myModal5');
var mod5 = document.getElementById('myModl5');
var span5 = document.getElementsByClassName('close')[4];

mod5.onclick = function() {
    modal5.style.display = 'block';
}

span5.onclick = function() {
    modal5.style.display = 'none';
}

/* Modal 6*/
var modal6 = document.getElementById('myModal6');
var mod6 = document.getElementById('myModl6');
var span6 = document.getElementsByClassName('close')[5];

mod6.onclick = function() {
    modal6.style.display = 'block';
}

span6.onclick = function() {
    modal6.style.display = 'none';
}

/* Modal 7*/
var modal7 = document.getElementById('myModal7');
var mod7 = document.getElementById('myModl7');
var span7 = document.getElementsByClassName('close')[6];

mod7.onclick = function() {
    modal7.style.display = 'block';
}

span7.onclick = function() {
    modal7.style.display = 'none';
}

/* Modal 8*/
var modal8 = document.getElementById('myModal8');
var mod8 = document.getElementById('myModl8');
var span8 = document.getElementsByClassName('close')[7];

mod8.onclick = function() {
    modal8.style.display = 'block';
}

span8.onclick = function() {
    modal8.style.display = 'none';
}

/* Modal 9*/
var modal9 = document.getElementById('myModal9');
var mod9 = document.getElementById('myModl9');
var span9 = document.getElementsByClassName('close')[8];

mod9.onclick = function() {
    modal9.style.display = 'block';
}

span9.onclick = function() {
    modal9.style.display = 'none';
}

/* Modal 10*/
var modal10 = document.getElementById('myModal10');
var mod10 = document.getElementById('myModl10');
var span10 = document.getElementsByClassName('close')[9];

mod10.onclick = function() {
    modal10.style.display = 'block';
}

span10.onclick = function() {
    modal10.style.display = 'none';
}

/* Modal 11*/
var modal11 = document.getElementById('myModal11');
var mod11 = document.getElementById('myModl11');
var span11 = document.getElementsByClassName('close')[10];

mod11.onclick = function() {
    modal11.style.display = 'block';
}

span11.onclick = function() {
    modal11.style.display = 'none';
}

/* Modal 12*/
var modal12 = document.getElementById('myModal12');
var mod12 = document.getElementById('myModl12');
var span12 = document.getElementsByClassName('close')[11];

mod12.onclick = function() {
    modal12.style.display = 'block';
}

span12.onclick = function() {
    modal12.style.display = 'none';
}

window.onclick = function(event) 
{
    if (event.target == modal1 || event.target == modal2 || event.target == modal3 || event.target == modal4 ||
        event.target == modal5 || event.target == modal6 || event.target == modal7 || event.target == modal8 ||
        event.target == modal9 || event.target == modal10 || event.target == modal11 || event.target == modal12)
    {
      modal1.style.display = 'none';
      modal2.style.display = 'none';
      modal3.style.display = 'none';
      modal4.style.display = 'none';
      modal5.style.display = 'none';
      modal6.style.display = 'none';
      modal7.style.display = 'none';
      modal8.style.display = 'none';
      modal9.style.display = 'none';
      modal10.style.display = 'none';
      modal11.style.display = 'none';
      modal12.style.display = 'none';
    }
  }

