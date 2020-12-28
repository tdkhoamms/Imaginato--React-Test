import React, {useState, useEffect} from 'react';
import './App.css';
import initData from './data.json';
import {formatData} from './ultils/utils';
import ItemList from './components/ItemList';

function App() {
    const [data, setData] = useState(formatData(initData));

    useEffect(() => {
        setInterval(() => {
            setData(formatData);
        }, 1000);
    }, []);

    return <ItemList data={data}/>
}

export default App;
