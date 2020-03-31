// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

// Seleziono le classi da modificare

var burgerA = $(".hamburger-menu a");
var burgerMenu = $(".hamburger-menu");
var classX = $(".fa-times");
var burgerMini = $(".fa-bars")

// Creo una variabile per far funzionare la condizione

var trueBurger = false;

// Apporto le modifiche necessarie affinchè la classe si possa visualizzare correttamente

// burgerMenu.show();

burgerMenu.css({"min-height": "unset", "height": "unset", "line-height": 2, "min-width": "unset", "width": 250, "list-style-type":"none", "background-color": "white", "box-shadow": "1px 1px 1px #E78D5C33", "border": "solid #E78D5C33 0.5px", "position": "absolute", "top": 35, "right": 40, "left": "unset", "border-radius": 7});

burgerA.css({"font-size": 20, "text-decoration": "none", "border-bottom": "none", "color": "#565A5C"})



// Creo una condizione per far apparire e scomparire il menu burger

burgerMini.click(function(){

  if (trueBurger === false){
    burgerMenu.show();
    trueBurger = true;
    console.log(trueBurger);
  } else if (trueBurger){
    burgerMenu.hide();
    trueBurger = false;
  }
})

// creo funzione per chiudere il menu a tendina anche quando è sopra il 1000px

classX.on({
  click: function(){
    burgerMenu.hide();
    trueBurger = false;
  }
})
