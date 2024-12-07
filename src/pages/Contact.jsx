import {Formik} from "formik"
import * as Yup from "yup"
import {emailValidation, requestValidation} from "../hooks/ValidateFormsHook.jsx"
import ModalForms from "../components/ModalForms.jsx"
import React from "react"

const Contact = () => {

    //Submit values
    const onSubmit = ({email, request}, {setSubmitting, resetForm}) => {
        console.log("Mensaje Enviado Correctamente")
        setSubmitting(false)
        resetForm()
    }

    const validationSchema = Yup.object({
        email: emailValidation,
        request: requestValidation
    })

    return (
        <ModalForms>
            <img className="modal__img" src="/src/assets/img/ZeldaContact.png" alt="Imagen de Contacto"/>
            <article className="modal__form">
                <header className="form__header">
                    <h1 className="header__title">Contacto</h1>
                </header>
                <Formik
                    className="form__content"
                    initialValues={{email: "", request: ""}}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          errors,
                          touched,
                          isSubmitting
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Introduce tu Correo"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email && (<p>{errors.email}</p>)}

                            <textarea
                                name="request"
                                placeholder="Comenta lo que necesitas"
                                value={values.request}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.request && touched.request && (<p>{errors.request}</p>)}
                            <button type="submit" disabled={isSubmitting}>Enviar</button>
                        </form>
                    )}
                </Formik>
            </article>
        </ModalForms>
    )
}

export default Contact