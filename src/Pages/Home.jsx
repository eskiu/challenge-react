import React from 'react'
import useData from "../Hooks/useData"
import { Link } from 'react-router-dom'


function Home() {

    const { data } = useData()


    return (
        <>
            <div className="home-container">
                <nav className='navbar-container'>
                    <h1>simulacr.</h1>
                </nav>
                <div>
                    <div className='review-containers'>
                        {data.map(({ id, cliente }) => (
                            <Link to={(`/${cliente}`)} key={id} onClick={() => document.title = (`${cliente} / Greydive`).toUpperCase()}>
                                <h1>{(cliente).toUpperCase()}</h1>
                                <p>Testing by:</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
