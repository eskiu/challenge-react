import {useEffect, useState} from 'react';

const useData = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getAllData = async () => {
        const url = 'db.json';
        const response = await fetch(url);
        const data = await response.json();
        const items = data.map(item => ({
            id: item.idVideo,
            cliente: item.cliente,
            video: item.linkVideo,
            transcripcion: item.transcripcion,
            preguntas: item.preguntas,
            escenario: item.escenario,
        }))
        setData(items);
        setIsLoading(false);
    }

    useEffect(() => {
        getAllData();
    }, []);

    return {
        data, 
        isLoading
    }
}

export default useData;