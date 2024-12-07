import React from 'react'

const ModalForms = ({children}) => { //Use props to pass different forms to components
    return (
        <main>
            <section className="main__modal">
                {children}
            </section>
        </main>
    )
}

export default ModalForms

