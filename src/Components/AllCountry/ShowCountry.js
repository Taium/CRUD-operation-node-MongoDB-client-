
import React from 'react';
import { Button } from 'react-bootstrap';

const ShowCountry = (props) => {
    const {name,capital,flag}=props.country
    const handleAdd=()=>{
        const formdata = new FormData();
        formdata.append('country',name)
        formdata.append('capital',capital)
        fetch('http://localhost:8000/addInformation',{
            method: 'POST',
            body: formdata
        })
        .then(res=>res.json())
        .then(data =>{
            props.handleShow()
        })

    }
    return (
        <div>
            <img src={flag} height="50px" width="50px"></img>
            <h1>{name}</h1>
            <p>{capital}</p>
            <Button className="btn btn-primary" onClick={handleAdd}>add</Button>
        </div>
    );
};

export default ShowCountry;