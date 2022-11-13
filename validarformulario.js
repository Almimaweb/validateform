window.addEventListener("load", function() {
    //capturamos los elementos del formulario
    const formulario1 = document.querySelector("#formulario1");
    const usuario = document.querySelector("#user");
    const passwd = document.querySelector("#passwd");
    const passwd2 = document.querySelector("#passwd2");
    const fechaNac = document.getElementById("fechaNac");
    // const numeroEntero = document.querySelector("#numeroEntero");
    // const numeroReal = document.querySelector("#numeroReal");
    // const numeroTelefono = document.querySelector("#numeroTelefono");
    // const telefonoInternacional = document.querySelector("#telefonoInternacional");
    // const fecha = document.querySelector("#fecha");
    // const email = document.querySelector("#email");
    // const dni = document.querySelector("#dni");
    // const url = document.querySelector("#url");


    formulario1.addEventListener ("submit" , evento => {
        evento.preventDefault();
        evento.stopPropagation();

        let valido = true;

        if(!validaUser(usuario)){
            valido = false;
        }

        if (!validaPasswd(passwd)) {
            valido = false
        }

        if (!validaPasswd2(passwd2, passwd)) {
            valido = false;
        }

        if (!validaFecha(fechaNac)) {
            valido = false;
        }

        // if (!validaPostal(codigoPostal)) {
        //     valido = false;
        // }

        if (valido) {
            formulario1.submit();
        }
        

    });

    //funciones de validación
    function validaUser(el) {
        if (el.value.length > 20) {
            marcaError(el , "El usuario es demasiado largo");
            return false;
        } else {
            marcaValido(el);
            return true;
        }
    }

    function validaPasswd(el) {
        if (el.value.length < 6) {
            marcaError(el, "La contraseña debe tener al menos 6 carácteres")
            return false;
        } else if (el.value.length > 13) {
            marcaError(el, "La contraseña no puede tener más de 13 carácteres")
            return false;
        } else {
            marcaValido(el);
            return true;
        }
    }

    function validaPasswd2(passwd2 , passwd1) {
        if (passwd2.value === passwd1.value) {
            passwd2.parentNode.querySelector(".error-feedback").textContent = "";
            return true;
        } else {
            passwd2.parentNode.querySelector(".error-feedback").textContent = "Las contraseñas no coinciden"
            return false;
        }
    }

    function validaFecha(el) {
        if (el.value) {
            el.parentNode.querySelector(".error-feedback").textContent = "";
            return true;
        } else {
            el.parentNode.querySelector(".error-feedback").textContent = "Tienes que seleccionar una fecha.";
            return false;
        }
    }



    //  function validaPostal(el) {
    //      var input = document.getElementById("codigoPostal").value;
    //      console.log(parseInt(input))
    //      if (input.length != 5 && parseInt(input) >= 1000 && parseInt(input) <= 5299)  {
    //         marcaValido(el)
    //          return true;
    //      }else {
    //         marcaError(el, "El código postal no existe.")
    //          return false;
    //      }
    //  }

    // function validaEntero() {
    //     var input = document.getElementById("numeroEntero").value;
    //     console.log(parseInt(input))
    //     if (input % 1 == 0)  {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }

    // function validaReal() {
    //     var input = document.getElementById("numeroEntero").value;
    //     console.log(parseInt(input))
    //     if (input(!isNaN))  {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }

    // function validaTelefono() {
    //     var input = document.getElementById("numeroEntero").value;
    //     console.log(parseInt(input))
    //     if (input(!isNaN))  {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }


    //variables del formulario2
    const formulario2 = document.querySelector("#formulario2");
    const codigoPostal2 = document.getElementById("codigoPostal2");
    codigoPostal2.addEventListener("blur" , e=> {
        const codigoPostal2 = e.target;
        validaPostal2(codigoPostal2);

    });

    const numeroEntero = document.getElementById("numeroEntero");
    numeroEntero.addEventListener("blur" , e=> {
        const numeroEntero = e.target;
        validaEntero(numeroEntero);
    });

    const numeroReal = document.getElementById("numeroReal");
    numeroReal.addEventListener("blur" , e=> {
        const numeroReal = e.target;
        validaReal(numeroReal);
    });

    const numeroTel = document.getElementById("numeroTel");
    numeroTel.addEventListener("blur" , e=> {
        const numeroTel = e.target;
        validaTel(numeroTel);
    });

    const numeroTelInter = document.getElementById("numeroTelInter");
    numeroTelInter.addEventListener("blur" , e=> {
        const numeroTelInter = e.target;
        validaTelInter(numeroTelInter);
    });

    const mail = document.getElementById("mail");
    mail.addEventListener("blur" , e=>  {
        const mail = e.target;
        validaMail(mail);
    });

    const dni = document.getElementById("dni");
    dni.addEventListener("blur", e => {
        const dni = e.target;
        validaDni(dni);
    });

    const url = document.getElementById("url");
    url.addEventListener("blur" , e => {
        const url = e.target;
        validaUrl(url);
    });

    const contra = document.getElementById("contra");
    contra.addEventListener("blur" , e => {
        const contra = e.target;
        validaContra(contra);
    })

        

    formulario2.addEventListener("submit" , evento => {
        evento.preventDefault();
        evento.stopPropagation();

        let valido2 = true

        if (!validaPostal2(codigoPostal2)) {
            valido2 = false;
        }

        if (!validaEntero(numeroEntero)) {
            valido2 = false;
        }

        if (!validaReal(numeroReal)) {
            valido2 = false;
        }

        if (!validaTel(numeroTel)) {
            valido2 = false;
        }

        if (!validaTelInter(numeroTelInter)) {
            valido2 = false;
        }

        if (!validaMail(mail)) {
            valido2 = false;
        }

        if (!validaDni(dni)) {
            valido2= false;
        }

        if (!validaUrl(url)) {
            valido2=false;
        }

        if (!validaContra(contra)) {
            valido2 = false;
        }
    });



    //funciones del formulario2
    function validaPostal2(el) {
        let codigo = el.value.toString();
        if (/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(codigo)) {
           marcaValido(el); 
           return true;
        } else {
            marcaError(el, "El código postal no existe")
            return false;
        }
    }

    function validaEntero(el) {
        let entero = el.value.toString();
        if (/^[0-9]+([,][0-9]+)?$/.test(entero)) {
            marcaValido(el);
            return true;
        } else {
            marcaError(el, "No es un número entero.")
            return false;
        }
    }

    function validaReal(el) {
        let real = el.value.toString();
        if (/^-?\d+(\.\d+)?$/.test(real)) {
            marcaValido(el);
            return true;
        } else {
            marcaError(el , "No es un número real")
            return false;
        }
    }

    function validaTel(el) {
        let tel = el.value.toString();
        if (/^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/.test(tel)) {
            marcaValido(el);
            return true;
        } else {
            marcaError(el, "El número de teléfono no existe o no pertenece a España.");
            return false;
        }
    }

    function validaTelInter(el) {
        let inter = el.value.toString();
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inter)) {
            marcaValido(el);
            return true;
        } else {
            marcaError(el, "El número de teléfono no existe.");
            return false;
        }
    }

    //  function validaEdad(el) {
    //      var hoy = new Date();
    //      var cumpleanos = new Date(el);
    //      var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    //      var m = hoy.getMonth() - cumpleanos.getMonth();
    //      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    //          edad--;
    //      }
    //      if (edad >= 18) {
    //          marcaValido(el);
    //          return true;
    //      } else {
    //          marcaError(el, "Debes ser mayor de edad.");
    //          return false;
    //      }
    //  }

    function validaMail(el) {
        let m = el.value.toString();
        if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(m)) {
            marcaValido();
            return true;
        } else {
            marcaError(el, "La dirección de correo electrónico no es válida.");
            return false;
           
        }
    }

    function validaDni(el) {
        let d = el.value.toString();
        if (/^\d{8}[a-zA-Z]$/.test(d)) {
            marcaValido();
            return true;
        } else {
            marcaError(el, "El dni no es válido.")
            return false;
        }
    }

    function validaUrl(el) {
        let u = el.value.toString();
        if (/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(u)) {
            marcaValido();
            return true;
        } else {
            marcaError(el, "La url no es válida");
            return false;
        }
    }

    function validaContra(el) {
        let c = el.value.toString();
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(c)) {
            marcaValido();
            return true;
        } else {
            marcaError(el, "La contraseña no es segura.");
            return false;
        }
    }



     function marcaError(elemento, mensaje) {
         elemento.parentNode.querySelector(".error-feedback").textContent = mensaje;
         elemento.parentNode.classList.add("error");
         console.log(mensaje,elemento);
     }

     function marcaValido(elemento) {
         elemento.parentNode.querySelector(".error-feedback").textContent = "";
         elemento.parentNode.classList.remove("error");
     }


});