//zadanie 9-3
var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor',dinosaurUpperCased);
var textHalf = length/2;
var partofTextCharsAfter = textCharsAfter.slice(0,textHalf)
console.log(partofTextCharsAfter);