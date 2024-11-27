import {Formik} from "formik";
import {NavLink} from "react-router-dom";
import isLoggedHook from "../hooks/isLoggedHook.jsx";
import {login} from "../config/Firebase.jsx";
import * as Yup from "yup"

const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ //Regex For email

const Login = () => {
    isLoggedHook() //If user is logued, go to figures.
    const onSubmit = async ({email, password}, {setSubmitting, setErrors, resetForm}) =>{
        try {
            await login({email,password}) //Function to login with firebase
            resetForm()
        }catch (error) {
            if (error.code === "auth/invalid-credential"){
                resetForm()
                return setErrors({credentials:"Credenciales invalidas"})
            }
            console.log(error.code)
            console.log(error.message)
        }finally {
            setSubmitting(false)
        }
    }

    //Validation for inputs
    const validationSchema = Yup.object().shape({
        email: Yup.string()
                    .trim()
                    .matches(regexMail, "El correo no es válido")
                    .required("El correo es necesario"),
        password: Yup.string() //.matches for a real password validation
                        .trim()
                        .min(8, "La contraseña debe tener al menos 8 caracteres")
                        .max(20, "La contraseña no debe exceder los 20 caracteres")
                        .matches(/[A-Z]/, "La contraseña debe incluir al menos una letra mayúscula")
                        .matches(/[a-z]/, "La contraseña debe incluir al menos una letra minúscula")
                        .matches(/[0-9]/, "La contraseña debe incluir al menos un número")
                        .matches(/[!@#$%^&*]/, "La contraseña debe incluir al menos un carácter especial (!@#$%^&*)")
                        .matches(/^\S*$/, "La contraseña no debe contener espacios")
                        .required("La contraseña es necesaria")
    })

    return (
        <Formik //Form login with Formik
            initialValues={{email: '', password: ''}}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >{
            ({
                values,
                handleChange,
                handleSubmit,
                isSubmitting,
                handleBlur,
                errors,
                touched
            }) => (
                <form onSubmit={handleSubmit}>
                    <label>Correo Electrónico</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Introduce tu Correo"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.email && touched.email && (<p>{errors.email}</p>)}
                    {errors.credentials && <p>{errors.credentials}</p>}
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Introduce tu contraseña"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    {errors.password && touched.password && (<p>{errors.password}</p>)}
                    {errors.credentials && <p>{errors.credentials}</p>}
                    <button type="submit" disabled={isSubmitting}>Enviar</button>
                    <NavLink to="registro">¿No tienes cuenta?<b>Registrate</b></NavLink>
                </form>
            )
        }

        </Formik>
    )
}
export default Login
