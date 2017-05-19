//zadanie 9-3
var text = (new String("Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."));
var dinosaur = (new String("triceratops"));
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor','dinosaurUpperCased');

console.log(textCharsAfter.length/2);