import { useEffect, useState } from "react";
import {searchFilterGames, searchFilterSeries, searchFilterType} from "../hooks/filtersHook.jsx";
import Cards from "../components/Cards.jsx";
import PaginationHook from "../hooks/paginationHook.jsx";

const Accesories = () => {
    const [accesories, setAccesories] = useState([])
    const [filterSeries, setFilterSeries] = useState([])
    const [filterGames, setFilterGames] = useState([])
    const [filterType, setFilterType] = useState([])
    const [selectedSerie, setSelectedSerie] = useState("")
    const [selectedGame, setSelectedGame] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [searchName, setSearchName] = useState("")
    const numFigures = 8

    useEffect(() => {
        const fetchAccesories = async () => {
            try {
                //Call Cards and Yarns and push to same array
                const responseCards = await fetch('https://www.amiiboapi.com/api/amiibo/?type=Card')
                const dataCards = await responseCards.json()

                const responseYarns = await fetch('https://www.amiiboapi.com/api/amiibo/?type=Yarn')
                const dataYarns = await responseYarns.json()

                const combinedArray = [...dataCards.amiibo, ...dataYarns.amiibo]
                setAccesories(combinedArray) // Store figures in array
            } catch (error) {
                console.error('Error en la api Amiibos:', error);
            }
        };
        fetchAccesories()
    }, [])

    // When amiibos change, search values filters hook.
    useEffect(() => {
        setFilterSeries(searchFilterSeries(accesories))
        setFilterGames(searchFilterGames(accesories))
        setFilterType(searchFilterType(accesories))
    }, [accesories])

    // Filter amiibos based on selected filters and searchName
    const filteredAmiibos = accesories.filter(amiibo => {
        const matchesTypes = selectedType ?
            amiibo.type === selectedType : true
        const matchesSeries = selectedSerie ?
            amiibo.amiiboSeries === selectedSerie : true
        const matchesGames = selectedGame ?
            amiibo.gameSeries === selectedGame : true
        const matchesName = searchName ?
            amiibo.name
                .toLowerCase()
                .includes(searchName.toLowerCase()) : true
        return matchesTypes && matchesSeries && matchesGames && matchesName
    });

    //Pagination Hook
    const {
        currentItems: currentAmiibos,
        currentPage,
        totalPages,
        nextPage,
        prevPage
    } = PaginationHook(filteredAmiibos, numFigures)

    return (
        <main className="main__figures">
            <section className="figures__filters">
                <select
                    id="type"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="" defaultValue>Selecciona Tipo</option>
                    {filterType.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>

                <select
                    id="amiibosSeries"
                    value={selectedSerie}
                    onChange={(e) => setSelectedSerie(e.target.value)}
                >
                    <option value="" defaultValue>Selecciona una Serie</option>
                    {filterSeries.map((amiiboSeries, index) => (
                        <option key={index} value={amiiboSeries}>
                            {amiiboSeries}
                        </option>
                    ))}
                </select>

                <select
                    id="gameSeries"
                    value={selectedGame}
                    onChange={(e) => setSelectedGame(e.target.value)}
                >
                    <option value="" defaultValue>Selecciona un Juego</option>
                    {filterGames.map((gameSeries, index) => (
                        <option key={index} value={gameSeries}>
                            {gameSeries}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
            </section>
            <Cards children={currentAmiibos}></Cards>
            <section className="figures__pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
            </section>
        </main>
    );
};

export default Accesories;