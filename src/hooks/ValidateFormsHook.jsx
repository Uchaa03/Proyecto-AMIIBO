//Regex for validations.
const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/


//Hook For Validate inputs forms
const ValidateFormsHook = (value, inputName) => {
    let error = null

    if (value.trim() !== "") { //If input is not empty validate de value for name.
        if (inputName === "email"){ //Email Validation
            if (!regexMail.test(value)) {
                error = "Formato de correo no valido"
                return error
            }
            return error //If it's ok error return null
        }
        if (inputName === "request"){ //Simple request validation
            if (value.length < 10) {
                error = "Introduce una petición real"
                return error
            }
            return error
        }
    }
    error = "El campo no puede estar vacío"
    return error
}
export default ValidateFormsHook
