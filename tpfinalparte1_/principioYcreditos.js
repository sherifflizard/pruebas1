function pantallaempezar() {
  background(10, 0, 0);
  fill(150,100,150);
  textAlign(CENTER);
  textSize(32);
  text("LAPUTA \nEL CASTILLO EN EL CIELO", width / 2, height / 2);
  boton();
}

function creditos() {
  push();
  background( 0);

 
  fill(255);
  textAlign(CENTER);
  textSize(20);
  strokeWeight(100);
  text("Pelicula original : El castillo en el cielo dirigida por Hayao Miyasaki \n imagenes: MetaAi \n programacion: Rossi, Strack", width / 2, height / 2);
 
  pop();
}
