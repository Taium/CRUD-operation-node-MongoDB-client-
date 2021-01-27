import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavouriteCountry = (props) => {
    const { _id, country, capital } = props.country
    const handleDelete = () => {
        // const formData = new FormData()
        // formData.append("id", id)
        const alertDelete = window.confirm("do you want to delete")
        alertDelete &&
        fetch(`https://still-scrubland-68562.herokuapp.com/delete/${_id}`, {
            method: 'DELETE'
            // body: formData
        })
            .then(res => res.json())
            .then(data => {
                props.handleShow()
            })
    }
    return (
        <div className="mb-5 border border-secondary center">
            <h1>{country}</h1>
            <p>{capital}</p>
            <Button className="btn btn-danger" onClick={handleDelete}>delete</Button>
          <Link to={"/edit/"+_id}>  <Button className="btn btn-primary">edit</Button></Link>

        </div>
    );
};

export default FavouriteCountry;