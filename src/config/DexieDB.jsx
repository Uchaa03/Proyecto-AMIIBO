//Import library dexie for a better use of IndexedDB
import Dexie from "dexie";

//Create Database
export const db = new Dexie('AmiiboDB')
db.version(1).stores({ //Declaration Schema DB
    users: 'uid, username, email, favoritecharacter', //Use ++ if primary key autoincrement is necessary
    favorites: '++id, amiiboid, uid, name, serie, game, date' //For store favorite cards
})

//Add new signed User
export async function addUser(user) {
    try {
        await db.users.add(user) //Add object user to DexieDB
        console.log("Usuario agregado correctamente")
    } catch (error) {
        console.log(error)
    }
}

//Get user
export async function getUser(uid) {
    try{
        return await db.users.get(uid) //Return User
    }catch (error) {
        console.log(error)
    }
}

//Add Card to favorites
export async function addCard(item){
    try {
        await db.favorites.add(item)
        console.log("Carta agregada a favorito")
    }catch (error) {
        console.log(error.code)
    }
}
