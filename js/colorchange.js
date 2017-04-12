(function () {
  var btnclass = document.getElementsByClassName("btn") ;

  var myFunction = function() {
  var newColour = this.value;
  document.body.style.backgroundColor = newColour;
  };

  for (var i = 0; i < btnclass.length; i++) {
    btnclass[i].addEventListener('click', myFunction, false);
  }
})();
