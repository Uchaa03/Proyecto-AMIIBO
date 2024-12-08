import { useEffect, useState } from "react";
import { searchFilterGames, searchFilterSeries } from "../hooks/filtersHook.jsx";
import AmiiboCards from "../components/AmiiboCards.jsx";

const Figures = () => {
    const [amiibos, setAmiibos] = useState([]) // Array of figures
    const [currentPage, setCurrentPage] = useState(1) // State for pages
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
                const response = await fetch('https://www.amiiboapi.com/api/amiibo/?type=figure') // Only Figures
                const data = await response.json()
                setAmiibos(data.amiibo) // Store figures in array
            } catch (error) {
                console.error('Error en la api Amiibos:', error);
            }
        };
        fetchAmiibos()
    }, [])

    useEffect(() => {
        setFilterSeries(searchFilterSeries(amiibos))
        setFilterGames(searchFilterGames(amiibos))
    }, [amiibos]) // When amiibos change, search values filters hook.

    // Reset current page when filters change
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedSerie, selectedGame, searchName])

    // Filter amiibos based on selected filters and searchName
    const filteredAmiibos = amiibos.filter(amiibo => {
        const matchesSeries = selectedSerie ? amiibo.amiiboSeries === selectedSerie : true
        const matchesGames = selectedGame ? amiibo.gameSeries === selectedGame : true
        const matchesName = searchName ? amiibo.name.toLowerCase().includes(searchName.toLowerCase()) : true
        return matchesSeries && matchesGames && matchesName
    });

    // Calculate figures in the actual page
    const indexOfLastFigure = currentPage * numFigures
    const indexOfFirstItem = indexOfLastFigure - numFigures

    // Show 8 figures index of FirstItem
    const currentAmiibos = filteredAmiibos.slice(indexOfFirstItem, indexOfLastFigure) // Array of actual 8 amiibos

    // Calculate total pages
    const totalPages = Math.ceil(filteredAmiibos.length / numFigures)

    // Change pages to next
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Change page to previous
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <main className="main__figures">
            <section className="figures__filters">
                <select
                    id="amiibosSeries"
                    value={selectedSerie}
                    onChange={(e) => setSelectedSerie(e.target.value)}
                >
                    <option value="" selected>Selecciona una Serie</option>
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
                    <option value="" selected>Selecciona un Juego</option>
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
            <AmiiboCards children={currentAmiibos}></AmiiboCards>
            <section className="figures__pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
            </section>
        </main>
    );
};

export default Figures;