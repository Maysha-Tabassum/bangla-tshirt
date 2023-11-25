import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({ children, hasFriend, ring }) => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Cousin</h2>
            <p>granda money: {money}</p>
            <p><span>{children}</span></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;