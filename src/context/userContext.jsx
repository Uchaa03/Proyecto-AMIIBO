import {createContext, useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const UserContext = createContext(false)

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)

    useEffect(() => { //When user change check is logued or not
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
              if (user) { //If user is logued change state.
                  setUser(user)
                  const uid = user.uid;
                  console.log(uid)
              }
        })
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider