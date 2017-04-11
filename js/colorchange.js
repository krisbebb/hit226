
var boxclass = document.getElementsByClassName("btn") ;
console.log(boxclass[0].value);
var myFunction = function() {
    var newColour = this.value;
    document.body.style.backgroundColor = newColour;
};

for (var i = 0; i < boxclass.length; i++) {

    boxclass[i].addEventListener('click', myFunction, false);
}
