import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, region, capital, name, flags } = props.country;
    return (
        <div className='country bg-warning text-white'>
            <h2>Country: {name.common}</h2>
            <img src={flags.png} alt="" />
            {/* <h3>Population: {population}</h3> */}
            <p><small>Area: {area}</small></p>
            <h4>Capital: {capital}</h4>
            <p>{region}</p>


        </div>
    );
};

export default Country;