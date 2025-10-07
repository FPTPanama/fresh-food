

export const validEmail = ( email, requerido = true) => {

    // si es requerido
    if (requerido && !email) { return { ok: false, mensaje: 'Can´t be empty'}};
  
    // Utiliza el patrón RegExp para encontrar caracteres no permitidos al principio
    // const regexInicioInvalido = new RegExp(/^[^a-zA-Z0-9]/);
    // const empiezaMal = regexInicioInvalido.test(email);
  
    // if (empiezaMal) {
    //   return { ok: false, mensaje: "La primera letra no es válida" };
    // }
  
    // Utiliza el patrón RegExp para encontrar caracteres especiales en la parte antes del '@'
    const regexCaracteresEspeciales = new RegExp(/[()<>@,;:"[\]ç%&áéíóúàèìòùäëÏöüâêîôû\s]/g);
    const tieneCaracteres = email && regexCaracteresEspeciales.test(email.split("@")[0]);
  
    if (tieneCaracteres) {
      return { ok: false, mensaje: "No puede contener caracteres especiales antes del '@'" };
    }
  
    // Utiliza un patrón más simple para verificar el formato general del correo electrónico
    const regexFormatoCorrecto = new RegExp(/^[\w.-]+@[a-zA-Z0-9.-]+(\.[\w-]{2,16})+$/);
    const esFormatoCorrecto = email && regexFormatoCorrecto.test(email);
  
    if (!esFormatoCorrecto) {
      return { ok: false, mensaje: "Formato incorrecto: ejemplo@dominio.com" };
    }
  
  
  
    return { ok: true, mensaje: "Correcto!" };
  
  };



  export const validNombre = (texto, requerido = false) => {
    // Creamos regex para no permitir caracteres invalidos
    const regexCaracteresInvalidos = new RegExp(/^[a-zA-Z _]*$/);

    let minLength = 2;
    let maxLength = 150;

    const longitud = texto && compruebaLongitud(texto, 2, 150);

    if (longitud && !longitud.ok) {
        return { ok: false, mensaje: `Debe tener entre ${minLength} y ${maxLength} carácteres`}
    }

    const tieneCaracteresInvalidos = texto && regexCaracteresInvalidos.test(texto)
    if(!tieneCaracteresInvalidos) { return {ok: false, mensaje: 'Texto con carácteres no validos'}}
    return {ok: true, mensaje: 'Texto valido'}

}


 const compruebaLongitud = (textoParaValidar, minLength, maxLength) => {
    if (!textoParaValidar) {
      return { ok: false, mensaje: "No puede estar vacio" }
    }
  
    let length = textoParaValidar.length;
  
    if (minLength && length < minLength) {
      return { ok: false, mensaje: `Debe tener como mínimo ${minLength} caracteres y tiene ${length}.` };
    };
    if (maxLength && length > maxLength) {
      return { ok: false, mensaje: `Debe tener como máximo ${maxLength} caracteres y tiene ${length}.` };
    };
  
    return { ok: true, mensaje: 'Correcto!' };
  
};

export const validPhone = (telefono) => {

    let minLength = 2;
    let maxLength = 20;

    const longitud = telefono && compruebaLongitud(telefono, 2, 20);
    if (longitud && !longitud.ok) {
        return { ok: false, mensaje: `Debe tener entre ${minLength} y ${maxLength} carácteres`}
    }

    if (!telefono || telefono === '') {
      return { ok: false, mensaje: "El teléfono no puede estar vacío" };
    }

    const regexCaracteresInvalidos = new RegExp(/^[a-zA-Z _0-9+]*$/);

    const tieneCaracteresInvalidos = telefono && regexCaracteresInvalidos.test(telefono)
    if(!tieneCaracteresInvalidos) { return {ok: false, mensaje: 'Texto con carácteres no validos'}}
    return {ok: true, mensaje: 'Texto valido'}

    

  

  
  }


  
  
  