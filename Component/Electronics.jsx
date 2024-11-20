import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Electronics() {
    const [state,setState]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then((res)=>{
            return res.json()
        .then((data)=>{
            setState(data);
        })
    })
    },[])
    return (
        <div>
            {
                state.map((el,i)=>{
                    
                       return <Link to={`/Productdeali/${el.id}`}>{el.title}</Link>
                   
                })
            }
        </div>
    )
}
