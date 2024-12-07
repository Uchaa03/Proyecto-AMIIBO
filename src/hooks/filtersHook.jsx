//Funtion for extract amiiboSeries to filter amiibos
export function searchFilterSeries(amiibos) {
    return amiibos.map(amiibo => amiibo.amiiboSeries)
        .reduce((unique, item) => {
            if (!unique.includes(item)) unique.push(item) //For add amiiboSeries unique values
            return unique
        }, [])
}

//Funtion for extract gameSeries to filter amiibos
export function searchFilterGames(amiibos) {
    return amiibos.map(amiibo => amiibo.gameSeries)
        .reduce((unique, item) => {
            if (!unique.includes(item)) unique.push(item) //For add gameSeries unique values
            return unique
        }, [])
}