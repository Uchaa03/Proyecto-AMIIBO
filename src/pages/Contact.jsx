import {Formik} from "formik";
import * as Yup from "yup"
import {emailValidation, requestValidation} from "../hooks/ValidateFormsHook.jsx";

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
        <>
            <main>
                <section className="main__modal">
                    <img className="modal__img" src="" alt="Imagen de Contacto"/>
                    <header className="modal__header">
                        <h1 className="header__title">Contacto</h1>
                    </header>
                    <Formik
                        className="modal__form"
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
                </section>
            </main>
        </>
    );
};

export default Contact;