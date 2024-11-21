import ValidateFormsHook from "../hooks/ValidateFormsHook.jsx";
import {useState} from "react";

const Contact = () => {

    const [email, setEmail] = useState("")
    const [request, setRequest] = useState("")
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorRequest, setErrorRequest] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Mensaje de contacto enviado") //In DIW, create a toast for send message

        //Reset useState values
        setEmail("")
        setRequest("")
        setErrorEmail(null)
        setErrorRequest(null)
    }

    const handleBlur = e => {
        const {value , name} = e.target //Destructuring event.target
        if (name === "email") {
            setErrorEmail(ValidateFormsHook(value, name)) //Values for show errors)
            setEmail(value)
        }
        if (name === "request") {
            setErrorRequest(ValidateFormsHook(value, name))
            setRequest(value)
        }
    }

    //For control state of values in react
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "email") {
            setEmail(value)
        }
        if (name === "request") {
            setRequest(value)
        }
    }

    const formValid = !(email && request && !errorEmail && !errorRequest) //Boolean for disable button

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
                        errorEmail !== null?
                            (<p>{errorEmail}</p>): ''
                    }
                    <textarea
                        name="request"
                        placeholder="Comenta lo que necesitas"
                        value={request}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    { //If request is incorrect show error
                        errorRequest !== null?
                            (<p>{errorRequest}</p>):''
                    }
                    <button type="submit" disabled={formValid}>Enviar</button>
                </form>
            </section>
            <footer></footer>
        </>
    )
}
export default Contact
