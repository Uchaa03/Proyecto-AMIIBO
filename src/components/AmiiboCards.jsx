import React from 'react'

const AmiiboCards = ({children}) => {
    return (
        <section className="figures__cards">
            {children.map((amiibo, index) => (
                <article key={index} className="cards__card">
                    <img className="card__img" src={amiibo.image} alt={amiibo.name}/>
                    <h2 className="card__name">{amiibo.name}</h2>
                    <button className="card__button">Ver más</button>
                </article>
            ))}
        </section>
    )
}
export default AmiiboCards
