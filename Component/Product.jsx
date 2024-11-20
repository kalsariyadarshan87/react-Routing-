import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <div>
        <Link to="electronics">Electronics</Link>
        </div>
        <div>
        <Outlet></Outlet>
        </div>
        
    </div>
  )
}
