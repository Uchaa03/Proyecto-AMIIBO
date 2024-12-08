import React from 'react'

const AmiiboCards = ({children}) => {
    return (
        <section className="amiibo-cards">
            {children.map((amiibo, index) => (
                <article key={index} className="card">
                    <img src={amiibo.image} alt={amiibo.name} className="card__image"/>
                    <h2 className="card__name">{amiibo.name}</h2>

                    <div className="card__overlay">
                        <button className="card__button">Ver más</button>
                    </div>
                </article>
            ))}
        </section>
    )
}
export default AmiiboCards
