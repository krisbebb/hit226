(function () {
  var boxclass = document.getElementsByClassName("btn") ;

  var myFunction = function() {
  var newColour = this.value;
  document.body.style.backgroundColor = newColour;
  };

  for (var i = 0; i < boxclass.length; i++) {
    boxclass[i].addEventListener('click', myFunction, false);
  }
})();
