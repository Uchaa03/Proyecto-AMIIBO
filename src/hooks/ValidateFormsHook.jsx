//Regex for validations.
const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ //Regex For email

//Hook For Validate inputs forms
const ValidateFormsHook = (value, inputName) => {
    if (value.trim() !== "") {
        if (inputName === "email" && !regexMail.test(value)){ //Email Validation
            return "Formato de correo no valido"
        }
        if (inputName === "request" && value.length < 10){ //Simple request validation
            return "Introduce una petición real"
        }
        return null
    }
    return "El campo no puede estar vacío"
}
export default ValidateFormsHook
