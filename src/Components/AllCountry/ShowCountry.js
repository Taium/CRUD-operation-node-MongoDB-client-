
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ShowCountry = (props) => {
    const {name,capital,flag}=props.country
    const handleAdd=()=>{
        const formdata = new FormData();
        formdata.append('country',name)
        formdata.append('capital',capital)
        fetch('https://still-scrubland-68562.herokuapp.com/addInformation',{
            method: 'POST',
            body: formdata
        })
        .then(res=>res.json())
        .then(data =>{
            props.handleShow()
        })

    }
    return (
       <div className="mt-5">
        <Card style={{ width: '28rem' }}>
        <Card.Img  src={flag} height="200px" width="50px" variant="top" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
              CAPITAL : 
          { capital}
          </Card.Text>
          <Button className="btn btn-primary" onClick={handleAdd}>add to your fav. list</Button>
        </Card.Body>
      </Card>
      </div>
    );
};

export default ShowCountry;