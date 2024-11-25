import {Formik} from "formik";
import * as Yup from "yup"

const regexMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ //Regex For email

const Contact = () => {

    //Submit values
    const onSubmit = ({email, request}, {setSubmitting, resetForm}) => {
        console.log("Mensaje Enviado Correctamente")
        setSubmitting(false)
        resetForm()
    }

    //Validation valuesf
    const validationSchema =
        Yup.object().shape(
    {
                email: Yup //Email Validation
                        .string()
                        .trim()
                        .matches(regexMail,"Email no válido")
                        .required("El campo email es requerido"),

                request: Yup //Request validation
                        .string()
                        .trim()
                        .min(10, "Introduce una frase real")
                        .required("El campo password es obligatorio")
    })

    return (
        <>
            <header>
                <h1>Contacto</h1>
            </header>
            <section>
                <Formik
                    initialValues={{ email: "", request: ""}}
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
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Introduce tu Correo"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.email && touched.email && (<p>{errors.email}</p>)}
                            </div>

                            <div>
                                <textarea
                                    name="request"
                                    placeholder="Comenta lo que necesitas"
                                    value={values.request}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.request && touched.request && (<p>{errors.request}</p>)}
                            </div>

                            <button type="submit" disabled={isSubmitting}>Enviar</button>
                        </form>
                    )}
                </Formik>
            </section>
            <footer></footer>
        </>
    );
};

export default Contact;