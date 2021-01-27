import React, { useEffect, useState } from 'react';
import FavouriteCountry from './FavouriteCountry';
import ShowCountry from './ShowCountry';

const AllCountry = () => {
    const [country, setcountry] = useState([])
    const [favcountry, setfavcountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(result => {
                setcountry(result)
            })
    }, [])

    useEffect(() => {
        fetch('https://still-scrubland-68562.herokuapp.com/readOrder')
            .then(res => res.json())
            .then(result => {
                setfavcountry(result)
            })
    }, [])

        const handleShow = () => {
            fetch('https://still-scrubland-68562.herokuapp.com/readOrder')
            .then(res => res.json())
            .then(result => {
                setfavcountry(result)
            })
        }    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <h3 className = "text center mb-5">All Country Information</h3>
                    {
                        country.map(country => <ShowCountry handleShow={handleShow} country={country}></ShowCountry>)
                    }
                </div>
                <div className="col-md-5">
                <h3 className = "text center mb-5">Favourite Country </h3>
                    {
                        favcountry.map(country =><FavouriteCountry handleShow={handleShow} country={country}></FavouriteCountry>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCountry;