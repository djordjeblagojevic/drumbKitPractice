
for (var i = 0; i<document.querySelectorAll(".key").length; i++) {



document.querySelectorAll(".key")[i].addEventListener("click", function() {

  var keyInnerHTML = this.innerHTML;

  switch (keyInnerHTML) {
    case " A <p> CLAP    </p>":
      var sound1 = new Audio('sounds/sound1.m4a');
      sound1.play();
      break;

    case " S <p> HIHAT   </p>":
        var sound2 = new Audio('sounds/sound2.m4a');
        sound2.play();
        break;

    case " D <p> KICK    </p>":
        var sound3 = new Audio('sounds/sound3.m4a');
        sound3.play();
        break;

    case " F <p> OPENHAT </p>":
        var sound4 = new Audio('sounds/sound4.m4a');
        sound4.play();
        break;

    case " G <p> BOOM    </p>":
        var sound5 = new Audio('sounds/sound5.m4a');
        sound5.play();
        break;

    case " H <p> RIDE    </p>":
        var sound6 = new Audio('sounds/sound6.m4a');
        sound6.play();
        break;

    case " J <p> SNARE   </p>":
        var sound7 = new Audio('sounds/sound7.m4a');
        sound7.play();
        break;

    case " K <p> TOM     </p>":
        var sound8 = new Audio('sounds/sound8.m4a');
        sound8.play();
        break;

    case " L <p> TINK    </p>":
        var sound9 = new Audio('sounds/sound9.m4a');
        sound9.play();
        break;

    default:  console.log(keyInnerHTML);

  }




});


}
