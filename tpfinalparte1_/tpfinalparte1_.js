//Comisión 4
//Christian Strack, legajo: 119149/4
//Fransisca Rossi, legajo : 120365/7
//-------------------------------------




// arrays
let misTextos = [];
let imagenes = [];



// CONF TEXTOS
let anchoTexto;
let tamTexto;
let inicioTexto;
let posTextoActual = 0;
let colortext;







  //==================no cambiar nada
  function preload() {
    
  soundFormats('mp3');
  soundFile = loadSound('data/ding.mp3');
  for (let i = 0; i < 23; i++) {
    imagenes[i] = loadImage("data/img" + i + ".jpg");
  }
  misTextos = loadStrings('data/aventura.txt');
}



//----------

function setup() {
  createCanvas(640, 480);

  estadito = pantallaempezar;
}
//---------------------


// Función draw
function draw() {
estadito();

}






//------------------------------------------
// Función de cambio de pantalla al hacer clic
function mouseClicked() {
    if (!soundFile.isPlaying()) {
      soundFile.play();
   
   //if (estadito === pantallaempezar){
   // estadito =  
   //}
    
  }
}
