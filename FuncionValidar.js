function validarForma() {

    let x = document.forms["MiForma"]["Nombre"].value;
    if (x == "") {
      alert("Por favor ingresa tu nombre! Lo necesitamos para nuestra base de datos :)");
      return false;
    }

    let y = document.forms["MiForma"]["Comentario"].value;
    if (y == "") {
      alert("Por favor ingresa un comentario " + x);
      return false;
    }
    
   
}

