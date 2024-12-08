import React from 'react'

const AmiiboModal = ({amiibo, closeModal}) => {
    if (!amiibo) return null //If not any amiibo return null for show anything

    return (
        <section className="figures__modal">
            <article className="modal__card">
                <img className="card__img" src={amiibo.image} alt={amiibo.name}/>
                <section className="card__article">
                    <h1 className="card__title">{amiibo.name}</h1>
                    <p className="card__text">
                        <span className="text__spam">Amiibo Serie: </span>
                        {amiibo.amiiboSeries}
                    </p>
                    <p className="card__text">
                        <span className="text__spam">Juego: </span>
                        {amiibo.gameSeries}
                    </p>
                    <p className="card__text">
                        <span className="text__spam">Fecha Lanzamiento: </span>
                        {amiibo.release.eu}
                    </p>
                    <button className="modal__close-button" onClick={closeModal}>Close</button>
                </section>
            </article>
        </section>
    )
}
export default AmiiboModal
