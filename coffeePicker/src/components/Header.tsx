import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header_container">
      <h1>Our Collections</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different types and origins, expertly roasted in small batches and
        shipped weekly
      </p>
      <div className="button_container">
        <button className="content-filter">All Products</button>
        <button className="content-filter">Available Now</button>
      </div>
    </div>
  )
}
