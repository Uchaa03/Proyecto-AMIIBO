import React, {useState} from 'react'
import AmiiboModal from "./AmiiboModal.jsx";

const AmiiboCards = ({children}) => {
    const [selectedAmiibo, setSelectedAmiibo] = useState(null) //For select amiibo
    const [modal, setModal] = useState(false) //For show modal

    const showModal = (amiibo) => {
        setSelectedAmiibo(amiibo) //Select amiibo and shwo modal
        setModal(true) //Show modal
    }

    const closeModal = () => {
        setModal(false) //Close Modal
        setSelectedAmiibo(null)//When amiibo is null modal is closed
    }

    return (
        <section className="figures__cards">
            {children.map((amiibo, index) => (
                <article key={index} className="cards__card">
                    <img className="card__img" src={amiibo.image} alt={amiibo.name}/>
                    <h2 className="card__name">{amiibo.name}</h2>
                    <button
                        className={index % 2 !== 0?
                            "card__button--secondary":
                            "card__button"}
                        onClick={() => showModal(amiibo)} //Send amiibo to modal
                    >
                        Ver más
                    </button>
                </article>
            ))}
            {modal && <AmiiboModal amiibo={selectedAmiibo} closeModal={closeModal} />}
        </section>
    )
}
export default AmiiboCards
