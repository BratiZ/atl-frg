import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import AppLoading from './app-loading';
import AppContent from './app-content';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getData')
            .then(
                (dataFromStore) => {
                    console.log(dataFromStore);
                    setData(dataFromStore);
                }
            );
    }, []);

    useEffect(() => {
        if (data === null) {
            return;
        }

        saveVotes(data);
    }, [data])

    const onButtonClick = (key) => {
        setData(state => ({
            ...state,
            [key]: state[key] + 1,
        }));
    }

    const saveVotes = (myData) => {
        invoke('setData', { data: myData })
    }

    return data === null
        ? (<AppLoading />)
        : (<AppContent data={data} onButtonClick={onButtonClick} />)
}

export default App;
