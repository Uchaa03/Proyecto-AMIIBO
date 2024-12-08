import {addCard} from "../config/DexieDB.jsx";
import {useUserUid} from "./useUserUid.jsx";

export const addFavoriteHook = (amiiboItem, uid) => {
    if (uid) { //If actual uid is reach go to addcard
        const item = {
            amiiboId: amiiboItem.head.concat(amiiboItem.tail), //Generate unique id api
            uid: uid,
            serie: amiiboItem.amiiboSeries,
            game: amiiboItem.gameSeries,
            date: amiiboItem.release.eu
        }
        console.log(item)
        addCard(item)
    }
}