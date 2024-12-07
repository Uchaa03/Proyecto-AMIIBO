import {Formik} from "formik";
import {NavLink} from "react-router-dom";
import isLoggedHook from "../hooks/isLoggedHook.jsx";
import {singup} from "../config/Firebase.jsx";
import * as Yup from "yup";
import {
    confirmpasswordValidation,
    emailValidation, favoritecharacterValidation,
    passwordValidation,
    usernameValidation
} from "../hooks/ValidateFormsHook.jsx";
import ModalForms from "../components/ModalForms.jsx";
import React from "react";

const Signup = () => {
    isLoggedHook() //If user is registred, go to figures.
    const onSubmit = async ({email, password}, {setSubmitting, setErrors, resetForm}) =>{
        try {
            console.log("inciando sesion")
            await singup({email,password}) //Function to login with firebase
            resetForm()
        }catch (error) {
            console.log(error.code)
            if (error.code === "auth/email-already-in-use"){
                resetForm()
                return setErrors({credentials:"El correo ya esta en uso"})
            }
            console.log(error.code)
            console.log(error.message)
        }finally {
            console.log("finalizao")
            setSubmitting(false)
        }
    }

    const validationSchema = Yup.object({
        username: usernameValidation,
        email: emailValidation,
        password: passwordValidation,
        confirmpassword: confirmpasswordValidation,
        favoritecharacter: favoritecharacterValidation
    })

    return (
        <ModalForms>
            <img className="modal__img" src="/src/assets/img/BrowserSingup.png" alt="Imagen de Contacto"/>
            <article className="modal__form">
                <header className="form__header">
                    <h1 className="header__title">Contacto</h1>
                </header>
                <Formik //Form login with Formik
                    initialValues={{username: '', email: '', password: '', confirmpassword: '', favoritecharacter: ''}}
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
                            <label>Nombre de Usuario</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Introduce tu Nombre de Usuario"
                                value={values.username}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.username && touched.username && (<p>{errors.username}</p>)}
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
                            <label>Confirmar Contraseña</label>
                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder="Introduce tu contraseña"
                                value={values.confirmpassword}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.confirmpassword && touched.confirmpassword && (<p>{errors.confirmpassword}</p>)}
                            <select
                                name="favoritecharacter"
                                value={values.favoritecharacter}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            >
                                <option value="">Selecciona tu personaje favorito</option>
                                <option value="mario">Mario</option>
                                <option value="luigi">Luigi</option>
                                <option value="zelda">Zelda</option>
                                <option value="toad">Toad</option>
                                <option value="kirby">Kirby</option>
                                <option value="yoshi">Yoshi</option>
                                <option value="tom_nook">Tom Nook</option>
                                <option value="isabelle">Isabelle</option>
                            </select>
                            {errors.favoritecharacter && touched.favoritecharacter && (<p>{errors.favoritecharacter}</p>)}
                            <button type="submit" disabled={isSubmitting}>Enviar</button>
                            {errors.credentials && touched.credentials && (<p>{errors.credentials}</p>)}
                            <NavLink to="/iniciosesion">¿Tienes cuenta?<b>Accede</b></NavLink>
                        </form>
                    )
                }
                </Formik>
            </article>
        </ModalForms>
    )
}
export default Signup
