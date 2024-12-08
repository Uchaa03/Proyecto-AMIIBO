import {useContext, useEffect, useState} from 'react'
import { UserContext } from "../context/userContext.jsx"
import { Navigate } from "react-router-dom"
import {getUser} from "../config/DexieDB.jsx";

const Favorites = () => {
    const { user } = useContext(UserContext)
    const [actualUser, setActualUser] = useState("null")
    const [favorites, setFavorites] = useState([])

    if (!user) {
        return <Navigate to="/iniciosesion" />
    }

    useEffect(() => { //For get actual user data
        async function getUserDB() {
            const userDB = await getUser(user.uid)
            setActualUser(userDB)
        }
        getUserDB()
    }, [])

    if (!actualUser) {
        return <h1>Cargando...</h1>
    }

    return (
        <main className="favorites">
            <section className="favorites__user">
                <h1>{`Holaa ${actualUser.username}`}</h1>
            </section>
            <section className="favorites__cards">
                {favorites? <h2>No hay Favoritos</h2> :""}
            </section>
        </main>
    )
}
export default Favorites
