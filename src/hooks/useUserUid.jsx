import { useContext, useEffect, useState } from "react";
import { getUser } from "../config/DexieDB.jsx";
import { UserContext } from "../context/userContext.jsx";

// Hook personalizado que obtiene el usuario desde la base de datos
export const useUserUid = () => {
    const [actualUser, setActualUser] = useState(null);
    const { user } = useContext(UserContext); // Obtener el usuario desde el contexto

    useEffect(() => {
        if (user) {
            async function getUserDB() {
                const userDB = await getUser(user.uid);  // Obtener el usuario de la base de datos
                setActualUser(userDB);
            }

            getUserDB();
        }
    }, [user]); // Depender de `user` para ejecutar el efecto cuando cambie

    return actualUser;
}
