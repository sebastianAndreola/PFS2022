import TelefonoConRadio from "./TelefonoConRadio.js";
import TelefonoConCamara from "./TelefonoConCamara.js";

let celu1= new TelefonoConCamara(100,458698);
let celu2= new TelefonoConRadio(100,458698);

//celu1.prenderApagar();
celu1.hacerLlamada(45463377);
celu1.terminarLlamada();
celu1.sacarFoto();

//celu2.prenderApagar();
celu2.hacerLlamada(45443377);
celu2.terminarLlamada();
celu2.mandarMensaje(154889966,"Hola te espero como siempre a la misma hora!!");
celu2.setFrecuenciaActual(1468);
celu2.prenderApagar();