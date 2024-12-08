import { useEffect, useState } from "react";
import { searchFilterGames, searchFilterSeries } from "../hooks/filtersHook.jsx";
import Cards from "../components/Cards.jsx";
import PaginationHook from "../hooks/paginationHook.jsx";

const Figures = () => {
    const [amiibos, setAmiibos] = useState([]) // Array of figures
    const [filterSeries, setFilterSeries] = useState([]) // Get values for filter
    const [filterGames, setFilterGames] = useState([])
    const [selectedSerie, setSelectedSerie] = useState("") // For inputs for filter
    const [selectedGame, setSelectedGame] = useState("")
    const [searchName, setSearchName] = useState("") // For searching by name
    const numFigures = 8 // Numbers of figures in a page

    useEffect(() => {
        const fetchAmiibos = async () => {
            try {
                // API CALL For extract amiibos
                const response = await fetch('https://www.amiiboapi.com/api/amiibo/?type=figure') // Only Accesories
                const data = await response.json()
                setAmiibos(data.amiibo) // Store figures in array
            } catch (error) {
                console.error('Error en la api Amiibos:', error);
            }
        };
        fetchAmiibos()
    }, [])

    // When amiibos change, search values filters hook.
    useEffect(() => {
        setFilterSeries(searchFilterSeries(amiibos))
        setFilterGames(searchFilterGames(amiibos))
    }, [amiibos])

    // Filter amiibos based on selected filters and searchName
        const filteredAmiibos = amiibos.filter(amiibo => {
            const matchesSeries = selectedSerie ?
                amiibo.amiiboSeries === selectedSerie : true
            const matchesGames = selectedGame ?
                amiibo.gameSeries === selectedGame : true
            const matchesName = searchName ?
                amiibo.name
                    .toLowerCase()
                    .includes(searchName.toLowerCase()) : true
        return matchesSeries && matchesGames && matchesName
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

export default Figures;