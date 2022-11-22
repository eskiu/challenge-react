import { useState } from "react"
import useData from "../Hooks/useData"
import ReactPlayer from "react-player"
import DownArrow from "../assets/DownArrow"
import { useParams, Link } from "react-router-dom";



function ItemContainer() {

    const { data, isLoading } = useData()
    const [showMore, setShowMore] = useState(false)
    const [expanded, setExpanded] = useState(true)
    const { id } = useParams()

    return (
        <>
            <div className="gohome"><Link to="/" onClick={() => document.title = "GREYDIVE"}>VOLVER AL INICIO</Link></div>
            {isLoading && <div>Loading...</div>}
            {
                data?.filter((item) => item.cliente === id).map(({ id, cliente, transcripcion, preguntas, escenario, video }) => (
                    <div key={id} className='main-container'>
                        <div className="content-container">
                            <h1 className="cliente">{cliente}</h1>
                            <h2 className="testeador">Testeador: </h2>
                            <div className="player-wrapper">
                                <ReactPlayer className="react-player" url={video} controls={true} width='85%' height="85%" />
                            </div>
                            <div className="transcription-p" onClick={() => { setShowMore(!showMore) }}>
                                <h2>Transcripción</h2>
                                {showMore ? <div dangerouslySetInnerHTML={{ __html: transcripcion }} onClick={() => { setShowMore(!showMore) }}></div> : <div onClick={() => { setShowMore(!showMore) }} dangerouslySetInnerHTML={{ __html: (transcripcion.substring(0, 200) + '...') }}></div>}
                                <button onClick={() => { setShowMore(!showMore) }}>{showMore ? 'Motrar menos' : 'Mostrar más'}</button>
                            </div>
                            <div className="tareas">
                                <h2>Tareas</h2>
                                <p className="escenario"><strong>Escenario:</strong> {escenario}</p>
                                {expanded ? <><div className="showalltasks" onClick={() => { setExpanded(!expanded) }}>
                                    <p>CONTRAER TODAS LAS TAREAS</p>
                                    <div className={expanded ? 'svg rotate180' : 'svg'} >
                                        <DownArrow />
                                    </div>
                                </div>
                                    {
                                        preguntas?.map((item, index) => {
                                            return (
                                                <div key={index} className='preguntas-container'>
                                                    <div className="task-header">
                                                        <h3>Tarea {index + 1}</h3>
                                                    </div>
                                                    <div className="task-body">
                                                        {expanded ?
                                                            <>
                                                                <p>{item.texto}</p>
                                                                <p>Respuesta: {item.respuesta}</p>
                                                                <p style={{ color: '#995393' }}>Duración de la tarea: {item.tiempo}</p>
                                                            </>
                                                            : ''
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }</> : <>
                                    <div className="showalltasks" onClick={() => { setExpanded(!expanded) }}>
                                        <p>EXPANDIR TODAS LAS TAREAS</p>
                                        <div className={expanded ? 'svg rotate180' : 'svg'} >
                                            <DownArrow />
                                        </div>
                                    </div>
                                </>}


                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ItemContainer
