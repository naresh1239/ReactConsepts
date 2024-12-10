import React, { useEffect } from 'react'
import {emitter} from './Emiter'

const Child = () => {
    
    useEffect(() => {
        const listener = emitter.addListener('event', (x: number, y: number) => {
            console.log(x,y)
        });
        // Cleanup the listener on component unmount
        return () => {
            listener.remove();
        };
    }, []);
    
    return (
        <div>Child data is here</div>
    );
}

export default Child;
