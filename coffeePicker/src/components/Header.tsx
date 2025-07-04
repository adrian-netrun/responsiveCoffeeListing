import React, { act, useState } from 'react'
import './Header.css'

function CustomButton({ style, content, active, handleChange }) {
  if (active) {
    return (
      <div
        className="content-filter"
        style={style}
        onClick={active ? handleChange : null}
      >
        {content}
      </div>
    )
  } else
    return (
      <div
        className="content-filter"
        style={undefined}
        onClick={!active ? handleChange : null}
      >
        {content}
      </div>
    )
}

export default function Header({ filter, setFilter }) {
  const [isActive, setIsActive] = useState<boolean>(true)
  const selectedStyle = {
    backgroundColor: '#4d5562',
    padding: '0.4rem 0.8rem',
    borderRadius: '0.4rem',
  }

  const handleFilterChange = () => {
    setIsActive(!isActive)
    setFilter(!filter)
  }

  return (
    <div className="header_container">
      <h1>Our Collections</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different types and origins, expertly roasted in small batches and
        shipped weekly
      </p>
      <div className="button_container">
        <CustomButton
          content={'All Products'}
          style={selectedStyle}
          active={isActive}
          handleChange={handleFilterChange}
        />
        <CustomButton
          content={'Available'}
          style={selectedStyle}
          active={!isActive}
          handleChange={handleFilterChange}
        />
      </div>
    </div>
  )
}
