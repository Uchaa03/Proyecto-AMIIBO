import { useContext, useEffect, useState } from "react";
import { getUser } from "../config/DexieDB.jsx";
import { UserContext } from "../context/userContext.jsx";

//Get User ID
export const useUserUid = () => {
    const [actualUser, setActualUser] = useState(null)
    const { user } = useContext(UserContext); // Get user in context logued

    useEffect(() => {
        if (user) {
            async function getUserDB() {
                const userDB = await getUser(user.uid)
                setActualUser(userDB)
            }

            getUserDB()
        }
    }, [user])

    return actualUser
}
