//veriables: A B
//axiom: A
//rules: (A -> AB), (B -> A)
var angle;
var axiom = "F";
var sentence = axiom;
var len = 100;

var rules = []
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

// rules[1] = {
//   a: "B",
//   b: "A"
// }

function generate() {
  len *= 0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }

  }

  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function setup() {
  createCanvas(400, 400);
  angle = radians(25);
  background(51);
  createP(axiom);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
}

function turtle() {

  resetMatrix();
  translate(width / 2, height);
//  stroke(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1));
  for(var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);

    if(current == "F"){
       stroke(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1));
      line(0,0,0,-len);
      translate(0, -len);
    }  else if (current == "+"){
      rotate(angle);
    } else if (current == "-"){
      rotate(-angle);
    } else if (current == "["){
      push();
    } else if (current == "]"){
      pop();
    }


  }
}



function draw() {

}
