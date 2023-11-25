import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = "diamond";
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>has Money : {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;