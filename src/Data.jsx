import React from 'react';

const Data = ({ iconUrl, name, price, symbol }) => {

    return (
        <>
            <div className='coin'>
                <img src={iconUrl} alt="coinImage" />
                <h1 className='head'>{name}</h1>
                <div className='value'>
                    <p>{price}</p>
                    <p className='symbol'>({symbol})</p></div>
            </div>
        </>
    )
}

export default Data;