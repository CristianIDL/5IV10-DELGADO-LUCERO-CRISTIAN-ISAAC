/**Camos a crear una funcion recursiva que se encarguq de mandar aq llamar a la funcion como un obkjetp en caso de qiue no se pueda ejkecutar */
/**Las funciones anonimas se crean cuando vamos a usar un objeto dentro de una funcion*/
var cesar = cesar || (function(){
    var proceso = function(txt, desp, action){
        var replace = (function(){
        //primero necesito una matriz del abecedario
        var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var l = abc.length;
        /** necesitamos una fuincnion que pueda obtener la posicion que va a venir por parte de la calve privada o desplazamiento */

        return function(c){
            //necesotamos saber la posicion
            var i = abc.indexOf(c.toLowerCase());

            /**Necesitamos saber dondes estamos dentro de la matriz abc y como la vamos a recorrer para el momento del cifrado */
            if(i != -1){
                //primero obtenemos la posicion para el desplazamiento
                var pos = i;
                //necesito saber la operacion a realizar c o d
                if(action){
                    //cifrar hacia adelante
                    pos+=desp;
                    //definir como se va a mover
                    pos-=(pos >= l)?1:0;
                }else{
                    //descifrar para atras
                    pos -= desp;
                    //movimiento
                    pos += (pos < 0)?1:0;
                }
                return abc[pos];
            }
            return c;
         };
    })();
    //tenemos que saber que ek texto esté acorde a mi abc

    //comprime elementos de la a-z y los hace globales
    var re = (/([a-z])/ig);

    //una funcion que se ncargue del intercambio de las posiciones acorde a si coincide eñ textp a cofrar con la expresión rnegular

    return String(txt).replace(re, function(match){
        return replace(match);
    });
  
    };

    return{
        encode : function(txt, desp){
            return proceso(txt, desp, true);
        },
        decode : function(txt, desp){
            return proceso(txt, desp, false);
        }
    };
    
})();

function cifrar(){
    document.getElementById("resultado").innerHTML = cesar.encode(document.getElementById("cadena").value, 3)
}

function descifrar(){
    document.getElementById("resultado").innerHTML = cesar.decode(document.getElementById("cadena").value, 3)
}