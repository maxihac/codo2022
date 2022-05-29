
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('formulario').addEventListener('submit',
        validar)
});

function validar(e) {
    e.preventDefault();
    var msg = document.getElementById('error-User');
    msg.innerText = '';
    if (this.querySelector('[name=User]').value == '') {
        msg.innerText = 'es obligatorio escribir un nombre de usuario';
        return;
    }
    if (!validateUser(this.querySelector('[name=User]').value)) {
        msg.innerText = 'Debes escribir un usuario con formato de email válido';
        return;
    }
    if (this.querySelector('[name=Pass]').value == '') {
        msg.innerText = 'Debes escribir una contrasena';
        return;
    }
    this.submit();
}

function validateUser(User) {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(User).toLowerCase());
}