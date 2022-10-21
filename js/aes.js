function lenghtPassword(){
  if(document.getElementById('uno').checked){
    document.getElementById('password1').style.display = 'block';
    document.getElementById('uno').style.display = 'block';
    document.getElementById('suno').style.display = 'block';
    document.getElementById('password2').style.display = 'none';
    document.getElementById('dos').style.display = 'none';
    document.getElementById('sdos').style.display = 'none';
    document.getElementById('password3').style.display = 'none';
    document.getElementById('stres').style.display = 'none';
    document.getElementById('tres').style.display = 'none';

  }else if(document.getElementById('dos').checked){
    document.getElementById('password2').style.display = 'block';
    document.getElementById('dos').style.display = 'block';
    document.getElementById('sdos').style.display = 'block';
    document.getElementById('password1').style.display = 'none';
    document.getElementById('suno').style.display = 'none';
    document.getElementById('uno').style.display = 'none';
    document.getElementById('password3').style.display = 'none';
    document.getElementById('stres').style.display = 'none';
    document.getElementById('tres').style.display = 'none';

  }else if(document.getElementById('tres').checked){
    document.getElementById('password3').style.display = 'block';
    document.getElementById('tres').style.display = 'block';
    document.getElementById('stres').style.display = 'block';
    document.getElementById('password2').style.display = 'none';
    document.getElementById('sdos').style.display = 'none';
    document.getElementById('dos').style.display = 'none';
    document.getElementById('password1').style.display = 'none';
    document.getElementById('suno').style.display = 'none';
    document.getElementById('uno').style.display = 'none';
  }
}

function guardarArchivoCifrado(){

    var texto = document.getElementById("texto").value;
    var i=1;
      
    do{
      console.log("i: "+i)
      var password = document.getElementById("password"+i).value; 
      i++
      console.log("Contraseña: " + password)

    }while(password=="")
    
    console.log("Contraseña fuera de: " + password)   
    var textoCifrado = CryptoJS.AES.encrypt(texto, password).toString();

    var textcBlob = new Blob([textoCifrado], {type:'text/plain'});

    var nombreArchivo = "texto.txt";


    var enlace = document.createElement("a");
    
    enlace.download = nombreArchivo;

    enlace.innerHTML = "link oculto";
  
    
    window.URL = window.URL || window.webkitURL;

    enlace.href = window.URL.createObjectURL(textcBlob);

    enlace.onclick = destruir;

    enlace.style.display = "none";

    document.body.appendChild(enlace);
    
    enlace.click();
}
 
function destruir(event){
  
    document.body.removeChild(event.target);
}

function descifrar(evento){
  var archivo2=document.getElementById("archivo");
  var reader=new FileReader();
  reader.readAsText(archivo2.files[0]);
  reader.onload=function()
  {

    var i=1;
    do{
      var password = document.getElementById("password"+i).value; 
      i++
      console.log("Contraseña: "+ password)

    }while(password=="")
    
    console.log("Contraseña fuera de: " + password)

        var contenido = this.result;
        console.log(contenido)
        var descifrado = CryptoJS.AES.decrypt(contenido, password);
        console.log("Esto es el descifrado: " + descifrado.toString(CryptoJS.enc.Utf8) + "jeje");
        var decifradotxt=descifrado.toString(CryptoJS.enc.Utf8)
        console.log("Esto es el decifrado txt " + decifradotxt)
        document.getElementById("mdescifrado").innerHTML = decifradotxt;

        
  }
}
window.addEventListener('load', () =>{
  document.getElementById('archivo').addEventListener('change', descifrar);
});
 