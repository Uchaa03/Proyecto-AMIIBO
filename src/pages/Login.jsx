import {Formik} from "formik";
import {NavLink} from "react-router-dom";
import isLoggedHook from "../hooks/isLoggedHook.jsx";
import {login} from "../config/Firebase.jsx";
import * as Yup from "yup";
import {emailValidation, passwordValidation} from "../hooks/validateFormsHook.jsx";
import ModalForms from "../components/ModalForms.jsx";
import React from "react";

const validationSchema = Yup.object({ //Object for customized hook
    email: emailValidation,
    password: passwordValidation
})

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

    return (
        <ModalForms>
            <img className="modal__img" src="/src/assets/img/YoshiLoginpng.png" alt="Imagen de Contacto"/>
            <article className="modal__form">
                <header className="form__header">
                    <h1 className="header__title">Contacto</h1>
                </header>
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
            </article>
        </ModalForms>
    )
}
export default Login
