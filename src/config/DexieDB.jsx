//Import library dexie for a better use of IndexedDB
import Dexie from "dexie";
import {UserContext} from "../context/userContext.jsx";
import {useContext} from "react";

export const db = new Dexie('AmiiboDB')
db.version(1).stores({ //Declaration Schema DB
    users: 'uid, username, email, favoritecharacter' //Use ++ if primary key autoincrement is necessary
})

export async function addUser(user) {
    try {
        console.log(user)
        await db.users.add(user) //Add object user to DexieDB
        console.log("Usuario agregado correctamente")
    } catch (error) {
        console.log(error)
    }
}

export async function getUser(uid) {
    console.log(uid)
    try{
        return await db.users.get(uid) //Return User
    }catch (error) {
        console.log(error)
    }
}