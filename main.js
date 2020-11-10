window.onload = function() {

     visor=document.getElementById("reloj");//localizar pantalla del reloj
     //asociar eventos a botones: al pulsar el botón se activa su función.
     document.cron.boton1.onclick = Start; 
     document.cron.boton2.onclick = Stop;
     document.cron.boton3.onclick = Continue;
     document.cron.boton4.onclick = Reset;
}
//variables de inicio:
var marcha=0;
var cro=0;

function Start(){
     if (marcha==0) { //solo si el cronómetro esta parado
          emp=new Date() //fecha actual
          elcrono=setInterval(tiempo,10); //función del temporizador.
          marcha=1 //indicamos que se ha puesto en marcha.
     }
}

function tiempo() { //función del temporizador
     actual=new Date() //fecha en el instante
     cro=actual-emp //tiempo transcurrido en milisegundos
     cr=new Date() //fecha donde guardamos el tiempo transcurrido
     cr.setTime(cro) 
     cs=cr.getMilliseconds() //milisegundos del cronómetro
     cs=cs/10; //paso a centésimas de segundo.
     cs=Math.round(cs)
     sg=cr.getSeconds(); //segundos del cronómetro
     mn=cr.getMinutes(); //minutos del cronómetro
     ho=cr.getHours()-1; //horas del cronómetro
     if (cs<10) {cs="0"+cs;}  //poner siempre 2 cifras en los números
     if (sg<10) {sg="0"+sg;} 
     if (mn<10) {mn="0"+mn;} 
     visor.innerHTML=ho+" : "+mn+" : "+sg+" : "+cs; //pasar a pantalla.
}

//parar el cronómetro
function Stop(){
     if(marcha==1){
          clearInterval(elcrono);
          marcha=0;
     }
}

//continuar
function Continue(){
     if (marcha==0) { //sólo si el crono está parado
          emp2=new Date(); 
          emp2=emp2.getTime(); //pasar a tiempo Unix
          emp3=emp2-cro; //restar tiempo anterior
          emp=new Date(); //nueva fecha inicial para pasar al temporizador
          emp.setTime(emp3); //datos para nueva fecha inicial.
          elcrono=setInterval(tiempo,10); //activar temporizador
          marcha=1;
     }
}
//Volver al estado inicial
function Reset() {
     if (marcha==1) { //si el cronómetro está en marcha:
     clearInterval(elcrono); //parar el crono
     marcha=0; //indicar que está parado
     }
     cro=0; //tiempo transcurrido a cero
     visor.innerHTML = "00 : 00 : 00"; //se escribe en el visor todo a 0
     document.cron.boton1.value="Start"; //estado inicial primer botón
     document.cron.boton2.value="Stop"; //estado inicial segundo botón
     document.cron.boton2.disabled=true;  //segundo botón desactivado	 
}