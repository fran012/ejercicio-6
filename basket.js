var jugadores=[];
var canasta2=[];
var canasta3=[];
var tiempoJugador=[];
var maximoAnotador=-1
var maximaAnotacion=0
var totalDobles1=0
var media=0
var media2=0
var totalTriples1=0
var pos=0
var pos2=0
var pos3=0
var totalTiempo1=0
let jugador="";

  function pedirJugador() {
    do {
  jugador=prompt("Dime nombre del jugador");
          if (jugador!="salir" && jugador!="Salir") {
                jugadores.push(jugador);
                canastas2=Number(prompt("Dime número de canastas de dos"));
                canasta2.push(canastas2);
                canastas3=Number(prompt("Dime número de canastas de tres"));
                canasta3.push(canastas3);
                tiempo=Number(prompt("Dime tiempo del jugador en minutos"));
                tiempoJugador.push(tiempo);
}} while (jugador !="salir" && jugador!="Salir")

}
  function calcularMax(i) {
    let maximaAnotacionTemp=canasta2[i]*2+canasta3[i]*3;
    if (maximaAnotacionTemp>maximaAnotacion) {
  maximaAnotacion=maximaAnotacionTemp
  maximoAnotador=i;
    }
  }

while (pedirJugador());

for (var i = 0; i < jugadores.length; i++) {
  calcularMax(i)
}
  function mediaDobles(i) {
  totalDobles1=totalDobles1+canasta2[i]
  if (pos>=canasta2.length) {
    mediaDobles=totalDobles1/pos;}}

    for (var i = 0; i < canasta2.length; i++) {
      pos=pos+1
      mediaDobles(i)}

function mediaTriples(i) {
  totalTriples1=totalTriples1+canasta3[i]
  if (pos2>=canasta3.length) {
    mediaTriples=totalTriples1/pos2;}}

    for (var i = 0; i < canasta3.length; i++) {
      pos2=pos2+1
      mediaTriples(i)}

  function mediaTiempo(i) {
        totalTiempo1=totalTiempo1+tiempoJugador[i]
        if (pos3>=tiempoJugador.length) {
          mediaTiempo1=totalTiempo1/pos3;}}

          for (var i = 0; i < tiempoJugador.length; i++) {
            pos3=pos3+1
            mediaTiempo(i)}

console.log("Total de dobles: "+totalDobles1+" /  "+"Media de dobles: "+mediaDobles);
console.log("Total de triples: "+totalTriples1+" /  "+"Media de triples: "+mediaTriples);
console.log("Total de tiempo jugado: "+totalTiempo1+" min /  "+"Media de tiempo por jugador: "+mediaTiempo1+" min ");
console.log("Nº jugadores: "+jugadores.length);
console.log("Maximo anotador: "+jugadores[maximoAnotador]);
console.log("maxima anotacion: "+ maximaAnotacion );
