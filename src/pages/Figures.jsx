import {useEffect, useState} from "react"

const Figures = () => {
        const [amiibos, setAmiibos] = useState([]) //Array of figures
        const [currentPage, setCurrentPage] = useState(1) //State for pages
        const numFigures = 8 //Numbers of figures in a page

        // API CALL
        useEffect(() => {
            const fetchAmiibos = async () => {
                try {
                    const response = await fetch('https://www.amiiboapi.com/api/amiibo/?type=figure') //Only Figures
                    const data = await response.json()
                    setAmiibos(data.amiibo) //Store figures in array
                } catch (error) {
                    console.error('Error en la api Amiibos:', error)
                }
            }
            fetchAmiibos()
        }, [])

        // Calculate figuras in the actual page
        const indexOfLastFigure = currentPage * numFigures
        const indexOfFirstItem = indexOfLastFigure - numFigures
        //Show 8 figures index of FirstItem
        const currentAmiibos = amiibos.slice(indexOfFirstItem, indexOfLastFigure) //Array of actual 8 amiibos

        // Calculate total pages
        const totalPages = Math.ceil(amiibos.length / numFigures) //For show remaining items in the last page.

        //Change pages to next
        const nextPage = () => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1)
            }
        }

        //Chage page to previus
        const prevPage = () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            }
        }

        return (
            <div>
                <h2>Amiibo Figures</h2>
                <div>
                    {currentAmiibos.map((amiibo, index) => ( //Run array of actual amiibos
                        <div key={index}>
                            <img src={amiibo.image} alt={amiibo.name}/>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
                    <span>{`Pagina ${currentPage} de ${totalPages}`}</span>
                    <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
                </div>
            </div>
        );
}
export default Figures
