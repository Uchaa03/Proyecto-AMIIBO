import ValidateFormsHook from "../hooks/ValidateFormsHook.jsx";
import {useState} from "react";

const Contact = () => {

    const [email, setEmail] = useState("")
    const [request, setRequest] = useState("")
    const [inputName, setInputName] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Mensaje de contacto enviado") //In diw create a toast for send message

        setEmail("")
        setRequest("")
        setInputName("")
        setErrorMessage(null)
    }

    const handleBlur = e => {
        console.log(e.target.name)
        const  error = ValidateFormsHook(e.target.value, e.target.name) //Values for show errors
        console.log(error)
        //Set inputName and error if return anything
        setInputName(e.target.name)
        setErrorMessage(error)
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        if (e.target.name === "request") {
            setRequest(e.target.value)
        }
    }

    //For control state of values in react
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "email") {
            setEmail(value)
        } else if (name === "request") {
            setRequest(value)
        }
    }

    const formValid = !(email && request && !errorMessage) //Boolean

    return (
        <>
            <header className="">
                <h1>Contacto</h1>
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Introduce tu Correo"
                        value={email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    { //If email is incorrect show error
                        errorMessage !== null && inputName === "email"?
                            (<p>{errorMessage}</p>):
                            ''
                    }
                    <textarea
                        name="request"
                        placeholder="Comenta lo que necesitas"
                        value={request}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    { //If request is incorrect show error
                        errorMessage !== null && inputName === "request"?
                            (<p>{errorMessage}</p>):
                            ''
                    }
                    <button type="submit" disabled={formValid}>Enviar</button>
                </form>
            </section>
            <footer></footer>
        </>
    )
}
export default Contact
