import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
const SingleCountry = () => {
    const { _id } = useParams()
    console.log(_id);
    const [favcountry, setfavcountry] = useState([])
    const [singleCountry , setSingleCountry] = useState([])
    // useEffect(() => {
    //     const formData = new FormData();
    //     formData.append('id',id)
    //     fetch('http://localhost:5000/singlecountry',{
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             setfavcountry(result.result)
    //         })
    // }, [])

    useEffect(() => {
        
        fetch(`http://localhost:8000/singlecountry/${_id}`)
            .then(res => res.json())
            .then(result => {
                setSingleCountry(result[0])
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/show')
            .then(res => res.json())
            .then(result => {
                setfavcountry(result.result)
            })
    }, [])
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('country',data.country)
        formData.append('capital',data.capital)

        fetch(`http://localhost:8000/update/${_id}`,{
            method:'PATCH',
            body: formData
        })

    }

    console.log(singleCountry);
    return (
        <div>
            {/* {favcountry.filter(inf => inf.id == id).map(filteredPerson => ( */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <label>country</label>
                    <input name="country" defaultValue={singleCountry.country} ref={register} />
                    <label>capital</label>

                    {/* include validation with required or other standard HTML validation rules */}
                    <input name="capital" defaultValue={singleCountry.capital} ref={register({ required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            {/* ))} */}
        </div>
    );
};

export default SingleCountry;

