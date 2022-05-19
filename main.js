//Script para Overlay de Menú mobile

var btn = document.getElementById("rmp_menu_trigger-15393");
var Div = document.createElement("div");
var Body =  document.body;
Div.setAttribute("id", "overlayMenu");
Div.setAttribute("style","background-color:#2E3030; opacity: 0.9; color:#f2f2f2; width:100%; height: 100vh; z-index:100 !important; position: fixed;top:-.5px");
btn.addEventListener("click", function() {
console.log('acabas de tocar menú mobile')
document.body.appendChild(Div)


});

window.addEventListener('click', function(e){   
  if (document.getElementById('rmp-container-15393').contains(e.target)){
    // Clicked in Menu mobile
    console.log('tocaste el menú de nuevo')
  } else{
    // Clicked out Menu mobile
   console.log('tocaste afuera del menú mobile');
   document.body.removeChild(Div);
 
   
   
  }
});






















