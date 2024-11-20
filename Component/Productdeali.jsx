import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Productdeali() {

    const [state,setState]=useState({});
    const {id}=useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            return res.json()
        .then((data)=>{
            console.log(data);
            setState(data);
        })
    })
    })
    return (
        <div>
            <h1>product Details</h1>
            <h2>{state.title}</h2>
            <img src={state.image} alt="" />
            <h2>{state.description}</h2>
        </div>
    )
}
