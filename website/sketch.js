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
  b: "FF+[+F-F-F[A]]-[-F+F+F]"
}
rules[1]= {
  a: "A",
  b: "TB"
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
	 createP("axiom = F <br>  rules 0 = {a: F,b: FF+[+F-F-F[A]]-[-F+F+F]}<br> rules 1= {a: A, b: TB}")
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
    } else if (current == "B"){
      noStroke();
      if(Math.floor(Math.random() * 3)){
          fill(255,69,0);
      }else{
          fill(34,139,34);
      }

      ellipse(0, 0, 5 , 5);
    } else if (current == "T"){
      if(Math.floor(Math.random() * 2)){
        rotate(angle/4);
      }else{
          rotate(-angle/4);
      }
      stroke(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1));
     line(0,0,0,-len/2);
     translate(0, -len/2);

    }


  }
}



function draw() {

}
